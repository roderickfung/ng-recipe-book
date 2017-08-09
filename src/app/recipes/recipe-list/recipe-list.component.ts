import { Recipe } from '../../../models/recipe.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Input() public recipes: Recipe[];
  public details: Object = {};

  constructor() {}

  ngOnInit() {
  }

  public getDetails(selectedRecipe: Recipe) {
    console.log('show details: ', selectedRecipe);
    this.details = selectedRecipe;
  }

  public renderDetails() {
    if (Object.keys(this.details).length > 0) {
      return true;
    } else {
      return false;
    }
  }

}
