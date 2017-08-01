import { Recipe } from '../../../models/recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  onerecipe = new Recipe('A Test Recipe', 'Test Description 1', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Hapalos_Artos_%28soft_bread%29%2C_a_traditional_Ancient_Roman_recipe_for_a_classic_fine_bread%2C_from_Athenaeus%27_Deipnosophistae_%2816336232886%29.jpg/1024px-Hapalos_Artos_%28soft_bread%29%2C_a_traditional_Ancient_Roman_recipe_for_a_classic_fine_bread%2C_from_Athenaeus%27_Deipnosophistae_%2816336232886%29.jpg');

  recipes: Recipe[] = [
    this.onerecipe,
    this.onerecipe
  ];

  constructor() {}

  ngOnInit() {
  }

}
