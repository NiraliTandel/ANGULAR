import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Mentor } from '../mentor.model';
import { MentorService } from '../mentor.service';

@Component({
  selector: 'app-mentor-list-container',
  templateUrl: './mentor-list-container.component.html',
  styleUrls: ['./mentor-list-container.component.css']
})
export class MentorListContainerComponent implements OnInit {

  public mentorList$: Observable<Mentor[]>;

  constructor(private mentorService: MentorService) {
    this.mentorList$ = new Observable();
  }

  ngOnInit(): void {
    this.mentorList$ = this.mentorService.getMentor();
  }

  delete(id: number) {
    this.mentorService.deleteMentor(id).subscribe((res: any) => {
      alert(id + ' is Deleted');
      this.mentorList$ = this.mentorService.getMentor();
    });
  }

}
