import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client, Office, User } from '../../models/user-management.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() userData: User[];
  @Input() client: Client[];
  @Input() office: Office[];

  @Output() editId: EventEmitter<number>;
  @Output() deleteId: EventEmitter<number>;
  searchText: string = '';
  showForm: boolean = false;
  buttonDisabled: boolean = false;

  constructor(private service: UserService) {
    this.editId = new EventEmitter<number>();
    this.deleteId = new EventEmitter<number>();
  }

  ngOnInit(): void { }

  public editUser(id: number) {
    this.editId.emit(id);
  }

  public deleteUser(id: number) {
    this.deleteId.emit(id);
  }

  toggleForm() {
    this.showForm = !this.showForm;
    this.buttonDisabled = false;
  }

  getclient() {
    this.service.getClient().subscribe((data) => (this.client = data));
  }

  getoffice() {
    this.service.getOffice().subscribe((data) => (this.office = data));
  }

}
