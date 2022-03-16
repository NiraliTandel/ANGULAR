import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Mentor } from '../../mentor.model';
import { MentorListPresenterService } from '../mentor-list-presenter/mentor-list-presenter.service';

@Component({
  selector: 'app-mentor-list-presentation',
  templateUrl: './mentor-list-presentation.component.html',
  styleUrls: ['./mentor-list-presentation.component.css'],
  viewProviders: [MentorListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MentorListPresentationComponent implements OnInit {

  @Input() public set mentorList(value : Mentor[] | null) {
    if (value) {
      this._mentorList = value;
    }
  }
  public get mentorList() : Mentor[] | null {
    return this._mentorList;
  }

  @Output() public delete: EventEmitter<number>;

  private _mentorList!: Mentor[];

  constructor(
    private mentorListPresenter: MentorListPresenterService,
    private router: Router
  ) {
    this.delete = new EventEmitter();
   }

  ngOnInit(): void {
    this.mentorListPresenter.delete$.subscribe((res: number) => {
      this.delete.emit(res);
    })
  }

  onDelete(id: number) {
    this.mentorListPresenter.onDelete(id);
  }

  onEdit(id: number) {
    this.router.navigateByUrl(`mentor/edit/${id}`);
  }

}
