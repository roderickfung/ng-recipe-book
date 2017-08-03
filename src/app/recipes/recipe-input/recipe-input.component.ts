import { Recipe } from '../../../models/recipe.model';
import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-input',
  templateUrl: './recipe-input.component.html',
  styleUrls: ['./recipe-input.component.css']
})
export class RecipeInputComponent {

  @Output() recipeObj = new EventEmitter<Recipe>();
  @ViewChild('nameInput') public newName: ElementRef;
  @ViewChild('fileInput') public newFile: ElementRef;
  @ViewChild('descriptionInput') public content: ElementRef;

  public onSubmitRecipe() {
    const name = this.newName.nativeElement.value;
    const content = this.content.nativeElement.value;
    const image = this.newFile.nativeElement.value;
    console.log('Image File:', image);
    this.recipeObj.emit(new Recipe(name, content, image));
  }

}
