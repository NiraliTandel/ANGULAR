import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FilterData } from '../../mentor.model';
import { FilterFormPresentationComponent } from '../filter-form-presentation/filter-form-presentation.component';

@Injectable()
export class MentorListPresenterService {
  private delete: Subject<number>;
  public delete$: Observable<number>;
  public filterdata: FilterData;
  public filterdata$: Subject<FilterData>;

  constructor(private overlay: Overlay) {
    this.delete = new Subject();
    this.delete$ = new Observable();
    this.delete$ = this.delete.asObservable();

    this.filterdata$ = new Subject<FilterData>();
  }

  public onDelete(id: number) {
    this.delete.next(id);
  }

  openFilterModel() {
    let config = new OverlayConfig();
    config.hasBackdrop = true;
    config.positionStrategy = this.overlay.position().global().right();

    const overlayRef = this.overlay.create(config);
    const component = new ComponentPortal(FilterFormPresentationComponent);
    const componentRef = overlayRef.attach(component);

    componentRef.instance?.closeFilter?.subscribe(res => {
      overlayRef.detach()
    });

    componentRef.instance?.filterData?.subscribe(res => {
      this.filterdata = res;
      this.filterdata$.next(res);
      overlayRef.detach();
    });

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    });
  }

}
