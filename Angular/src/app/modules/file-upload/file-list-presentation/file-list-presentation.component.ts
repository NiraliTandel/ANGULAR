import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileListPresenterService } from '../file-list-presenter/file-list-presenter.service';
import { MyFile } from '../file-upload.model';

@Component({
  selector: 'app-file-list-presentation',
  templateUrl: './file-list-presentation.component.html',
  styleUrls: ['./file-list-presentation.component.scss']
})
export class FileListPresentationComponent implements OnInit {
  @Input() public set fileList(value: MyFile[] | null) {
    if (value) {
      this._fileList = value;
    }
  }

  @Output() public delete: EventEmitter<number>;

  public get fileList(): MyFile[] {
    return this._fileList;
  }

  private _fileList: MyFile[];

  constructor(private fileListPrensenter: FileListPresenterService) {
    this.delete = new EventEmitter();
  }

  ngOnInit(): void {
    this.fileListPrensenter.delete$.subscribe((res: number) => {
      this.delete.emit(res);
    })
  }

  onDelete(id: number) {
    this.fileListPrensenter.onDelete(id);
  }

  showFile(content: string, type: string) {
    this.fileListPrensenter.viewFile(content, type);
  }

}
