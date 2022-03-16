import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Mentor, MentorForm } from '../../mentor.model';
import { MentorFormPresenterService } from '../mentor-form-presenter/mentor-form-presenter.service';

@Component({
  selector: 'app-mentor-form-presentation',
  templateUrl: './mentor-form-presentation.component.html',
  styleUrls: ['./mentor-form-presentation.component.css'],
  viewProviders: [MentorFormPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MentorFormPresentationComponent implements OnInit {

  @Input() public set mentorData(value : Mentor | null) {
    if (value) {
      console.log(value)
      this.formTitle = 'Edit Mentor';
      console.log(this.mentorForm)

      this.mentorForm.patchValue(value);
      this._mentorData = value;
    }
  }
  public get mentorData() : Mentor | null {
    return this._mentorData;
  }
  
  private _mentorData!: Mentor;

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
    this.mentorFormPresenter.onSubmit(this.mentorForm)
  }

  onCancel() {
    this.location.back();
  }

  onReset() {
    this.mentorForm.reset();
  }

}
