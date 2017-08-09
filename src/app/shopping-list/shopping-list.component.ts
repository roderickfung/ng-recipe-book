import { Ingredient } from '../../models/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5, false),
    new Ingredient('Tomato', 10, false)
  ];

  constructor() { }

  ngOnInit() {
  }

  public addIngredient(ingredient: Ingredient) {
    return this.ingredients.push(ingredient);
  }

  public deleteIngredient(ingredient: Ingredient) {
    return this.ingredients = this.ingredients.filter(val => val !== ingredient);
  }

}
