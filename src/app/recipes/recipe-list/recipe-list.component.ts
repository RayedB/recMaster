import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('First Recipe', 'Test recipe for our app', 'https://c1.staticflickr.com/6/5186/5803041832_40261728ce_b.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
