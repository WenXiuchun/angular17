import { Injectable } from '@angular/core';
import { MyDecorator } from './my-decorator';

@MyDecorator
@Injectable({
  providedIn: 'root'
})
export class MyLibService {

  constructor() {
    console.log("old Constructor")
  }

  getHeros() {
    console.log("my lib service get heros");
  }
}
