import { AdvanceHighlightDirective } from './directives/advance-highlight.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component';
import { RecipesComponent } from './app/recipes/recipes.component';
import { RecipeListComponent } from './app/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './app/recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './app/recipes/recipe-detail/recipe-detail.component';
import { RecipeInputComponent } from './app/recipes/recipe-input/recipe-input.component';

import { ShoppingListComponent } from './app/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './app/shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeInputComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HighlightDirective,
    AdvanceHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
