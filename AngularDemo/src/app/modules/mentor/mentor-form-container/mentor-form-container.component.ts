import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Department, Mentor, MentorForm, Office } from '../mentor.model';
import { MentorService } from '../mentor.service';

@Component({
  selector: 'app-mentor-form-container',
  templateUrl: './mentor-form-container.component.html',
  styleUrls: ['./mentor-form-container.component.css']
})
export class MentorFormContainerComponent implements OnInit {
  public id!: string;
  public mentorData$: Observable<Mentor>
  public departmentList$: Observable<Department[]>;
  public officeList$: Observable<Office[]>;

  constructor(
    private mentorService: MentorService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.mentorData$ = new Observable();
    this.departmentList$ = new Observable();
    this.officeList$ = new Observable();
    console.log(this.activatedRoute)
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id)

    if (this.id) {
      this.mentorData$ = this.mentorService.getMentorById(this.id);
    }
   }

  ngOnInit(): void {
    this.getDepartment();
    this.getOffice();
  }

  getDepartment(){
    this.departmentList$=this.mentorService.getDepartment();
  }

  getOffice(){
    this.officeList$=this.mentorService.getOffice();
  }

  addUser(mentorForm: MentorForm) {
    this.mentorService.addMentor(mentorForm).subscribe(
      (res: any) => {
        alert('Data saved successfully')
        this.router.navigateByUrl('mentor/list');
      }
    );
  }

  editUser(mentorForm: MentorForm) {
    this.mentorService.editMentor(mentorForm,this.id).subscribe(
      (res: any) => {
        alert('Data updated successfully')
        this.router.navigateByUrl('mentor/list');
      }
    );
  }

}
