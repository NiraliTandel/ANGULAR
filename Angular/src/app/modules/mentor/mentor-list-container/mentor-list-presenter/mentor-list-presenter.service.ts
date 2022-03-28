import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FilterData, Mentor } from '../../mentor.model';
import { FilterFormPresentationComponent } from '../filter-form-presentation/filter-form-presentation.component';

@Injectable()
export class MentorListPresenterService {
  private delete: Subject<number>;
  public delete$: Observable<number>;
  public filterdata: Subject<Mentor[]>;
  public filterdata$: Observable<Mentor[]>;

  constructor(private overlay: Overlay) {
    this.delete = new Subject();
    this.delete$ = new Observable();
    this.delete$ = this.delete.asObservable();

    this.filterdata = new Subject();
    this.filterdata$ = new Observable();
    this.filterdata$ = this.filterdata.asObservable();
  }

  public onDelete(id: number) {
    this.delete.next(id);
  }

  openFilterModel(currentList: Mentor[]) {
    let config = new OverlayConfig();
    config.hasBackdrop = true;
    config.positionStrategy = this.overlay.position().global().right();

    const overlayRef = this.overlay.create(config);
    const component = new ComponentPortal(FilterFormPresentationComponent);
    const componentRef = overlayRef.attach(component);

    componentRef.instance?.closeFilter?.subscribe(res => {
      overlayRef.detach()
    });

    componentRef.instance.filterData.subscribe(res => {
      let dataKey = Object.keys(currentList[0]);
      let newData = [...currentList];

      dataKey.forEach((item) => {
        let i = item as keyof FilterData;
        if (res[i]) {
          console.log(res[i])
          newData = newData.filter((data: any) => {
            return data[item] == res[i]
          });
        }
      })

      console.log(newData)
      this.filterdata.next(newData);
      overlayRef.detach();
    });

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
    });
  }

}
