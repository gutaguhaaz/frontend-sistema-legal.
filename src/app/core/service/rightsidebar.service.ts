import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RightSidebarService {
  private sidebarSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  sidebarState = this.sidebarSubject.asObservable();

  setRightSidebar = (value: boolean) => {
    this.sidebarSubject.next(value);
  };

  changeMsg() {
    this.sidebarSubject.next(false);
  }

  constructor() {
    //constructor
  }
}
