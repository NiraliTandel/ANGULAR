import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Department, Mentor, Office } from '../mentor.model';
import { MentorService } from '../mentor.service';

@Component({
  selector: 'app-mentor-list-container',
  templateUrl: './mentor-list-container.component.html',
  styleUrls: ['./mentor-list-container.component.css']
})
export class MentorListContainerComponent implements OnInit {

  public mentorList$: Observable<Mentor[]>;
  public departmentList$: Observable<Department[]>;
  public officeList$: Observable<Office[]>;

  constructor(private mentorService: MentorService) {
    this.mentorList$ = new Observable();
    this.departmentList$ = new Observable();
    this.officeList$ = new Observable();
  }

  ngOnInit(): void {
    this.mentorList$ = this.mentorService.getMentor();
    this.departmentList$ = this.mentorService.getDepartment();
    this.officeList$ = this.mentorService.getOffice();
  }

  getDepartment() {
    this.departmentList$ = this.mentorService.getDepartment();
  }

  getOffice() {
    this.officeList$ = this.mentorService.getOffice();
  }

  delete(id: number) {
    this.mentorService.deleteMentor(id).subscribe((res: any) => {
      alert(id + ' is Deleted');
      this.mentorList$ = this.mentorService.getMentor();
    });
  }

}
