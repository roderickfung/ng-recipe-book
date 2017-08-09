import { Ingredient } from '../../../models/ingredient.model';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() onAdd = new EventEmitter<Ingredient>();

  @ViewChild('name') public name: ElementRef;
  @ViewChild('amount') public amount: ElementRef;

  constructor() {}

  ngOnInit() {
  }

  public addIngredient() {
    const name = this.name.nativeElement.value;
    const amount = this.amount.nativeElement.value;

    if (name && amount) {
      this.onAdd.emit(new Ingredient(name, amount, false));
    }
  }

}
