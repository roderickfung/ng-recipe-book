import { Recipe } from '../../models/recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  public recipes: Recipe[] = [];

  constructor() {}

  ngOnInit() {
  }

  public onAddRecipe(newRecipe: {name: string, description: string, image: any}) {
    const recipe = new Recipe(newRecipe.name, newRecipe.description, newRecipe.image);
    this.recipes.push(recipe);
  }

}
