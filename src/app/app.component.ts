import { Component } from '@angular/core';
import { Sneaker } from './models/sneaker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab804';

  sneakerList: Sneaker[] = [];

  receiveList(list: Sneaker[]) {
    list.forEach(item => {
      console.log("AHI VA " + item);
      this.sneakerList.push(item);
    });
  }

}
