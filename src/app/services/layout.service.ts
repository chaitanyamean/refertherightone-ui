import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  sideNavOpened = false;
  constructor() { }
}
