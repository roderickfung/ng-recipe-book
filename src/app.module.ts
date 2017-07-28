import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component';
import { RecipesComponent } from './app/recipes/recipes.component';
import { RecipeListComponent } from './app/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './app/recipes/recipe-list/recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}