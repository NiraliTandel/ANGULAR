import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MyFile } from './file-upload.model';
import { FileUploadService } from './file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  public filesList$: Observable<MyFile[]>

  constructor(private fileService: FileUploadService) {
    this.filesList$ = new Observable<MyFile[]>();
  }

  ngOnInit(): void {
    this.filesList$ = this.fileService.getFile();
  }

  AddFile(files: MyFile[]) {
    this.filesList$.subscribe({
      next: (list) => {
        const uniqueFiles: MyFile[] = [];
        let existingFiles = list.map((res) => res.name);
        files.forEach(file => {
          if (existingFiles.includes(file.name)) {
            alert("Duplicate File");
          }
          else {
            existingFiles.push(file.name);
            uniqueFiles.push(file);
          }
        });
        this.uploadFiles(uniqueFiles);
      }
    });
  }

  uploadFiles(files: MyFile[]) {
    const validFiles: any = [];
    const uploadFile = (i: number) => {
      if (i >= files.length) {
        return;
      }
      this.fileService.addFile(files[i]).subscribe({
        next: () => {
          alert("File Added Successfully");
          this.filesList$ = this.fileService.getFile();
          uploadFile(i + 1);
        },
        error: (e) => { console.log(e) }
      });
    }
    uploadFile(0);
  }

  DeleteFile(id: number) {
    this.fileService.deleteFile(id).subscribe((res: any) => {
      alert("File Deleted Successfully");
      this.filesList$ = this.fileService.getFile();
    });
  }
}
