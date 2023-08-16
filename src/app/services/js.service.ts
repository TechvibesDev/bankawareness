
import { Injectable } from '@angular/core';
declare const $: any;
declare function initPBT(): any;
declare function initialize(): any;
@Injectable({
  providedIn: 'root'
})
export class JsService {

  constructor() { }
  public initPBT() {
    initialize();
    setTimeout(() => {
      initPBT();
    }, 100);
  }
}
