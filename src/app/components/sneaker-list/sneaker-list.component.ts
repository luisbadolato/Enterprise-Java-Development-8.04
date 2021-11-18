import { Component, Input, OnInit } from '@angular/core';
import { Sneaker } from 'src/app/models/sneaker.model';

@Component({
  selector: 'app-sneaker-list',
  templateUrl: './sneaker-list.component.html',
  styleUrls: ['./sneaker-list.component.css']
})
export class SneakerListComponent implements OnInit {

  @Input('sneakerList')
  sneakerList!: Sneaker[];

  newList: Sneaker[];

  constructor() {
    this.newList = [];
  }

  ngOnInit(): void {
    this.newList = this.sneakerList;
  }

}
