import { Component } from '@angular/core';
import {MyLibService} from './my-lib.service';
@Component({
  selector: 'lib-my-lib',
  template: `
    <p>
      my-lib works!
    </p>
  `,
  styles: ``
})
export class MyLibComponent {
  constructor(myLibService: MyLibService) {
    myLibService.getHeros();
  }
}
