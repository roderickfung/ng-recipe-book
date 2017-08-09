import { ImageUtils } from '../../../utils/image.util';
import { Recipe } from '../../../models/recipe.model';
import { Component, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-input',
  templateUrl: './recipe-input.component.html',
  styleUrls: ['./recipe-input.component.css']
})
export class RecipeInputComponent {

  @Output() recipeObj = new EventEmitter<{name: string, description: string, image: object}>();

  // @ViewChild('nameInput') public newName: ElementRef;
  // @ViewChild('fileInput') public newFile: ElementRef;
  // @ViewChild('descriptionInput') public content: ElementRef;

  newName = '';
  uploadFile: any = {};
  newDesc = '';

  public isDisabled() {
    if (this.newName.length > 0 && this.uploadFile.type !== undefined && this.newDesc.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  public getFile(event) {
    console.log('get file function', event.target.files[0]);
    this.uploadFile = event.target.files[0];
    console.log(this.uploadFile.type);
  }

  public getFileName() {
    return this.uploadFile.name ? this.uploadFile.name : '';
  }

  public onSubmitRecipe() {
    console.log('image file: ', this.uploadFile);
    console.log('title: ', this.newName);
    console.log('description: ', this.newDesc);

    // const image = this.newFile.nativeElement.value;
    if (ImageUtils.imageObjectFormatCheck(this.uploadFile)) {
      this.recipeObj.emit({
        name: this.newName,
        description: this.newDesc,
        image: this.uploadFile
      });
      this._recipeReset();
    }
  }

  private _recipeReset() {
    this.newName = '';
    this.newDesc = '';
    this.uploadFile = {};
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
