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

  AddFile(file: MyFile) {
    this.filesList$.subscribe({
      next: (list) => {
        let isFile = list.find((res) => {
          return res.name === file.name
        })
        if (isFile) {
          alert("Duplicate File");
        }
        else {
          this.UploadFile(file);
        }
      }
    });
  }

  UploadFile(file: MyFile) {
    this.fileService.addFile(file).subscribe({
      next: () => {
        alert("File Added Successfully");
        this.filesList$ = this.fileService.getFile();
      },
      error: (e) => { console.log(e) }
    })
  }

  DeleteFile(id: number) {
    this.fileService.deleteFile(id).subscribe((res: any) => {
      alert("File Deleted Successfully");
      this.filesList$ = this.fileService.getFile();
    });
  }
}