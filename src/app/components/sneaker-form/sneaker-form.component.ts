import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Sneaker } from 'src/app/models/sneaker.model';

@Component({
  selector: 'app-sneaker-form',
  templateUrl: './sneaker-form.component.html',
  styleUrls: ['./sneaker-form.component.css']
})
export class SneakerFormComponent implements OnInit {

  @Output()
  updateListEvent: EventEmitter<Sneaker[]> = new EventEmitter;

  sneakerForm: FormGroup;

  name: FormControl;
  price: FormControl;
  specialEdition: FormControl;
  artistCollab: FormControl;
  author: FormControl;
  creationDate: FormControl;

  sneakerList: Sneaker[];
  newSneaker!: Sneaker;

  constructor() { 
    this.name = new FormControl('', [Validators.required]);
    this.price = new FormControl('', [Validators.required, Validators.min(20), Validators.max(180)]);
    this.specialEdition = new FormControl(false, Validators.required);
    this.artistCollab = new FormControl('', Validators.required);
    this.author = new FormControl('', Validators.required);
    this.creationDate = new FormControl('');

    this.sneakerForm = new FormGroup({
      name: this.name,
      price: this.price,
      specialEdition: this.specialEdition,
      artistCollab: this.artistCollab,
      author: this.author,
      creationDate: this.creationDate
    });

    this.sneakerList = [];

  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('Creating user...');
    console.log(this.sneakerForm.value);
    this.sneakerList.push(this.sneakerForm.value);
    this.newSneaker = this.sneakerForm.value;
    console.log(this.sneakerList);
    this.updateListEvent.emit(this.sneakerList);
    this.resetForm();
  }

  resetForm(): void {
    this.name.reset('', {emitEvent: false});
    this.price.reset('', {emitEvent: false});
    this.specialEdition.reset('', {emitEvent: false});
    this.artistCollab.reset('', {emitEvent: false});
    this.author.reset('', {emitEvent: false});
    this.creationDate.reset('', {emitEvent: false});
  }



}
