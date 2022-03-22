import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User, Client, Office } from '../../models/user-management.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  myForm: FormGroup;
  userData: User[];
  searchText: string;
  sortclient: number;
  id!: number;
  isAddMode?: boolean;
  showForm: boolean = false;
  submitted: boolean = false;

  @Input() clientData: Client[];
  @Input() officeData: Office[];
  @Input() edit: User;

  @Output() saveData: EventEmitter<User>;
  @Output() updateUser: EventEmitter<User>;

  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.saveData = new EventEmitter<User>()
    this.updateUser = new EventEmitter<User>();
  }

  ngOnInit(): void {
    this.buildForm();

    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    console.log(this.myForm);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.buildForm();
  }

  public buildForm() {
    this.myForm = this.fb.group({
      id:[],
      firstname: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(7)]],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.maxLength(10)]],
      client: [''],
      office: ['']
    });
    this.editUserForm();
  }

  get getvalue() {
    return this.myForm['controls'];
  }

  public editUserForm() {
    if (this.edit?.id) {
      this.toggleForm();
      this.myForm.patchValue(this.edit);
    }
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  onSubmit() {
    this.submitted = true;
    if (this.myForm.valid) {
      this.saveData.emit(this.myForm.value);
    }
    this.myForm.reset();
    this.toggleForm();
  }
}