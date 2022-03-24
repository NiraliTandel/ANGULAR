import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Department, Mentor, MentorForm, Office } from '../../mentor.model';
import { MentorFormPresenterService } from '../mentor-form-presenter/mentor-form-presenter.service';

@Component({
  selector: 'app-mentor-form-presentation',
  templateUrl: './mentor-form-presentation.component.html',
  styleUrls: ['./mentor-form-presentation.component.css'],
  viewProviders: [MentorFormPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MentorFormPresentationComponent implements OnInit {

  @Input() public set mentorData(value: Mentor | null) {
    if (value) {
      console.log(value)
      this.formTitle = 'Edit Mentor';
      console.log(this.mentorForm)

      this.mentorForm.patchValue(value);
      this._mentorData = value;
    }
  }
  public get mentorData(): Mentor | null {
    return this._mentorData;
  }

  @Input() public set departmentList(value : Department[] | null) {
    if (value) {
      this._departmentList = value;
    }
  }
  public get departmentList() : Department[] {
    return this._departmentList;
  }


  @Input() public set officeList(value : Office[] | null) {
    if (value) {
      this._officeList = value;
    }
  }
  public get officeList() : Office[] {
    return this._officeList;
  }

  private _mentorData!: Mentor;
  private _departmentList!: Department[];
  private _officeList!: Office[];

  @Output() public add: EventEmitter<MentorForm>;
  @Output() public edit: EventEmitter<MentorForm>;

  public mentorForm: FormGroup;
  public formTitle: string;

  constructor(
    private mentorFormPresenter: MentorFormPresenterService,
    private location: Location
  ) {
    this.mentorForm = this.mentorFormPresenter.buildForm();
    this.add = new EventEmitter();
    this.edit = new EventEmitter();
    this.formTitle = 'Add Mentor'
  }

  ngOnInit(): void {
    this.mentorFormPresenter.mentorFormData$.subscribe((res: MentorForm) => {
      this.formTitle === 'Add Mentor' ? this.add.emit(res) : this.edit.emit(res);;
    })
  }

  get getvalue() {
    return this.mentorForm['controls'];
  }

  onSubmit() {
    this.mentorFormPresenter.onSubmit(this.mentorForm);
  }

  onCancel() {
    this.location.back();
  }

  onReset() {
    this.mentorForm.reset();
  }

}
