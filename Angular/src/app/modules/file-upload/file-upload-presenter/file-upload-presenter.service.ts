import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MyFile } from '../file-upload.model';

@Injectable({
  providedIn: 'root'
})
export class FileUploadPresenterService {
  private fileUpload: Subject<MyFile>;
  public fileUpload$: Observable<MyFile>;

  constructor() {
    this.fileUpload = new Subject<MyFile>();
    this.fileUpload$ = new Observable<MyFile>();
    this.fileUpload$ = this.fileUpload.asObservable();
  }

  allowedFileTypes = [
    "application/pdf", "image/png", "image/jpeg"
  ];

  uploadFile(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      const file = {} as MyFile;
      let size = Math.round(files[i].size / 1024 / 1024)
      console.log(files[i].type)
      if (size <= 2 && this.allowedFileTypes.includes(files[i].type)) {
        file.name = files[i].name;
        file.size = size;
        file.type = files[i].type;

        const reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onload = (event) => {
          file.content = event.target?.result as string;
          this.fileUpload.next(file);
        }
      }
      else if (this.allowedFileTypes.includes(file.type)) {
        alert("Please upload proper file");
      }
      else {
        alert("File Size is greater than 2MB");
      }
    }
  }
}
