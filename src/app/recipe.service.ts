import { Injectable } from '@angular/core';
import { Recipe } from './recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: Recipe[] = [
    new Recipe('First Recipe', 'Test recipe for our app', 'https://c1.staticflickr.com/6/5186/5803041832_40261728ce_b.jpg'),
    new Recipe('Second Recipe', 'Test recipe for our app', 'http://www.dreams.metroeve.com/wp-content/uploads/2017/08/www.dreams.metroeve.com-lasagna-dreams-meaning.jpg'),
    new Recipe('Third Recipe', 'Test recipe for our app', 'https://img.buzzfeed.com/buzzfeed-static/static/2016-06/8/9/campaign_images/buzzfeed-prod-web09/23-boneless-chicken-breast-recipes-that-are-actua-2-30592-1465393955-1_dblbig.jpg'),
  ];
  constructor() { }

  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
