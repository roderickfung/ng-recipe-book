import { ImageUtils } from '../../../utils/image.util';
import { Recipe } from '../../../models/recipe.model';
import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-input',
  templateUrl: './recipe-input.component.html',
  styleUrls: ['./recipe-input.component.css']
})
export class RecipeInputComponent {

  @Output() recipeObj = new EventEmitter<{name: string, description: string, image: string}>();

  // @ViewChild('nameInput') public newName: ElementRef;
  @ViewChild('fileInput') public newFile: ElementRef;
  // @ViewChild('descriptionInput') public content: ElementRef;
  
  newName = '';
  uploadFile = '';
  newDesc = '';

  public isDisabled() {
    if (this.newName.length > 0 && this.uploadFile.length > 0 && this.newDesc.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  public onSubmitReceipt() {
    console.log(this.uploadFile);
    // const image = this.newFile.nativeElement.value;
    if (ImageUtils.imageFormatCheck(this.uploadFile)) {
      this.recipeObj.emit({
        name: this.newName,
        description: this.newDesc,
        image: this.uploadFile
      });
    }
  }

  // public onSubmitRecipe() {
  //   const name = this.newName.nativeElement.value;
  //   const content = this.content.nativeElement.value;
  //   const image = this.newFile.nativeElement.value;
  //   console.log('Image File:', image);
  //   console.log('format check:', ImageUtils.imageFormatCheck(image));
  //   if (ImageUtils.imageFormatCheck(image)) {
  //     this.recipeObj.emit({name: name, description: content, image: image});
  //   }
  // }

}
