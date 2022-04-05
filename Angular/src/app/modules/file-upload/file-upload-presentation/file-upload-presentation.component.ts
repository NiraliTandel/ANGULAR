import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FileUploadPresenterService } from '../file-upload-presenter/file-upload-presenter.service';
import { MyFile } from '../file-upload.model';

@Component({
  selector: 'app-file-upload-presentation',
  templateUrl: './file-upload-presentation.component.html',
  styleUrls: ['./file-upload-presentation.component.scss']
})
export class FileUploadPresentationComponent implements OnInit {
  public files: FileList;
  public startDate: string;
  public endDate: string;

  @Output() fileUpload: EventEmitter<MyFile[]>;

  constructor(private fileUploadPrensenter: FileUploadPresenterService) {
    this.fileUpload = new EventEmitter<MyFile[]>();
  }

  ngOnInit(): void {
    this.fileUploadPrensenter.fileUpload$.subscribe({
      next: (file) => {
        this.fileUpload.emit(file);
      },
      error: (e) => { console.log(e) }
    })
  }

  readFile(fileInput: any) {
    console.log(fileInput.files)
    this.files = fileInput.files;
  }

  filesToUpload: any;

  uploadFile() {
    if (this.files) {
      this.filesToUpload = this.fileUploadPrensenter.uploadFile(this.files)
    } else {
      alert("No File is Selected")
    }
  }

  readStartDate(input: any) {
    this.startDate = input.target.value;
  }

  readEndDate(input: any) {
    this.endDate = input.target.value;
  }

}
