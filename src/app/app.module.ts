import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: ':id', component: RecipeDetailComponent }
    ]
  },
  {path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingComponent,
    RecipesComponent,
    RecipeListComponent,
    ShoppingListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    RecipeStartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
