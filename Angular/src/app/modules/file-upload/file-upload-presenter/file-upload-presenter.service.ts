import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MyFile } from '../file-upload.model';

@Injectable({
  providedIn: 'root'
})
export class FileUploadPresenterService {
  private fileUpload: Subject<MyFile[]>;
  public fileUpload$: Observable<MyFile[]>;

  constructor() {
    this.fileUpload = new Subject();
    this.fileUpload$ = new Observable();
    this.fileUpload$ = this.fileUpload.asObservable();
  }

  allowedFileTypes = [
    "application/pdf", "image/png", "image/jpeg"
  ];

  uploadFile(files: FileList) {
    const validFiles: any = [];
    const readFile = (i: number) => {
      if (i >= files.length) {
        this.fileUpload.next(validFiles);
        return;
      }
      const file = {} as MyFile;
      let size = Math.round(files[i].size / 1024 / 1024)
      if (size <= 2 && this.allowedFileTypes.includes(files[i].type)) {
        file.name = files[i].name;
        file.size = size;
        file.type = files[i].type;

        const reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onload = (event) => {
          file.content = event.target?.result as string;
          validFiles.push(file);
          console.log(file.name);
          readFile(i + 1);
        }
      }
      else if (this.allowedFileTypes.includes(files[i].type)) {
        alert("Please upload proper file");
      }
      else {
        alert("File Size is greater than 2MB");
      }
    }
    readFile(0);
  }
}
