import { Recipe } from '../../models/recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  sampleRecipe = new Recipe('A Test Recipe', 'Test Description 1', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Hapalos_Artos_%28soft_bread%29%2C_a_traditional_Ancient_Roman_recipe_for_a_classic_fine_bread%2C_from_Athenaeus%27_Deipnosophistae_%2816336232886%29.jpg/1024px-Hapalos_Artos_%28soft_bread%29%2C_a_traditional_Ancient_Roman_recipe_for_a_classic_fine_bread%2C_from_Athenaeus%27_Deipnosophistae_%2816336232886%29.jpg');

  public recipes: Recipe[] = [ this.sampleRecipe ];

  constructor() {}

  ngOnInit() {
  }

  public onAddRecipe(newRecipe: {name: string, description: string, image: string}) {
    const recipe = new Recipe(newRecipe.name, newRecipe.description, newRecipe.image);
    this.recipes.push(recipe);
  }

}
