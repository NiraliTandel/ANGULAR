import { ConnectedPosition, FlexibleConnectedPositionStrategy, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department, User } from '../../models/user.model';
import { FormService } from '../../services/form.service';
import { FormModelComponent } from '../form-model/form-model.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  userData: User[] = [];
  searchText: string = "";
  department: Department[] = [];

  constructor(private service: FormService, private router: Router, private overlay: Overlay) { }

  ngOnInit(): void {
    this.getUserData();
    this.getDepartment();
  }

  getUserData() {
    this.service.getUserList().subscribe(
      (result) => {
        this.userData = result;
      },
      (error) => {
        console.log('Something went wrong');
      }
    );
  }

  deleteUser(id: number) {
    this.service.deleteUser(id).subscribe(
      () => {
        alert(id + ' is Deleted');
        this.getUserData();
      },
      (error) => {
        alert('Something went wrong');
      }
    );
  }

  getDepartment() {
    this.service.getDepartment().subscribe((data) => (this.department = data));
  }

  openFormModel() {
    const target = document.querySelector("#btn") as HTMLElement;
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().right()
    });
    const component = new ComponentPortal(FormModelComponent);
    const componentRef = overlayRef.attach(component);
    componentRef.instance.cancel.subscribe(()=> overlayRef.detach());
  }
}
