import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { FilterData } from '../../mentor.model';

@Injectable()
export class FilterFormPresenterService {

  private filterData: Subject<FilterData[]>
  public filterData$: Observable<FilterData[]>

  constructor(private fb: FormBuilder) {
    this.filterData = new Subject();
    this.filterData$ = new Observable();

    this.filterData$ = this.filterData.asObservable();
  }

  buildForm(): FormGroup {
    return this.fb.group({
      firstname: [''],
      age: [''],
      gender: ['']
    })
  }

  public onFilter(form: FormGroup) {
    this.filterData.next(form.value)
  }
}
