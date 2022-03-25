import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Department, FilterData, Mentor, Office } from '../../mentor.model';
import { MentorListPresenterService } from '../mentor-list-presenter/mentor-list-presenter.service';

@Component({
  selector: 'app-mentor-list-presentation',
  templateUrl: './mentor-list-presentation.component.html',
  styleUrls: ['./mentor-list-presentation.component.scss'],
  viewProviders: [MentorListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MentorListPresentationComponent implements OnInit {

  @Input() public set mentorList(value: Mentor[] | null) {
    if (value) {
      console.log(this.filterData);
      this._mentorList = value;
    }
  }
  public get mentorList(): Mentor[] {
    return this._mentorList;
  }

  @Input() public set departmentList(value: Department[] | null) {
    if (value) {
      this._departmentList = value;
    }
  }
  public get departmentList(): Department[] {
    return this._departmentList;
  }

  @Input() public set officeList(value: Office[] | null) {
    if (value) {
      this._officeList = value;
    }
  }
  public get officeList(): Office[] {
    return this._officeList;
  }

  @Output() public delete: EventEmitter<number>;

  private _mentorList!: Mentor[];
  private _departmentList!: Department[];
  private _officeList!: Office[];
  public filterData: FilterData;
  searchText: string = "";

  constructor(
    private mentorListPresenter: MentorListPresenterService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.delete = new EventEmitter();
    this.searchText = '';
  }

  ngOnInit(): void {
    this.mentorListPresenter.delete$.subscribe((res: number) => {
      this.delete.emit(res);
    });
    this.mentorListPresenter.filterdata$.subscribe(res => {
      const newMentorList = this._mentorList.filter(data => {
        return data.gender == res.gender;
      });
      console.log(newMentorList);
      this._mentorList = newMentorList;
      this.cdr.detectChanges();
    })
  }

  onDelete(id: number) {
    this.mentorListPresenter.onDelete(id);
  }

  onEdit(id: number) {
    this.router.navigateByUrl(`mentor/edit/${id}`);
  }

  openFilterModel() {
    this.mentorListPresenter.openFilterModel();
  }

}
