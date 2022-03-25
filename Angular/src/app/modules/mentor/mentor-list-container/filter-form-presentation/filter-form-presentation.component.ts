import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FilterData } from '../../mentor.model';
import { FilterFormPresenterService } from '../filter-form-presenter/filter-form-presenter.service';

@Component({
  selector: 'app-filter-form-presentation',
  templateUrl: './filter-form-presentation.component.html',
  styleUrls: ['./filter-form-presentation.component.scss'],
  viewProviders: [FilterFormPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterFormPresentationComponent implements OnInit {
  @Output() closeFilter: EventEmitter<any>;
  @Output() filterData: EventEmitter<FilterData>;

  filterForm: FormGroup;

  constructor(private filterFormPresenter: FilterFormPresenterService) {
    this.filterForm = this.filterFormPresenter.buildForm();

    this.closeFilter = new EventEmitter();
    this.filterData = new EventEmitter();
  }

  ngOnInit(): void {
  }

  cancelFilter() {
    this.closeFilter.emit();
  }

  applyFilter() {
    console.log(this.filterForm.value);
    this.filterData.emit(this.filterForm.value);
  }

}
