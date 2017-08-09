import { Recipe } from '../../../../models/recipe.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Output() click = new EventEmitter<void>();
  @Input() public recipe: Recipe;

  constructor() {}

  ngOnInit() {
  }

  public onClick() {
    this.click.emit();
  }
}
