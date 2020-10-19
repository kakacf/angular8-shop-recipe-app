import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  oneRecipeItem: Recipe;

  constructor() { }

  ngOnInit() {


  }

  // 取得單一 recipe
  getOneRecipe(oneRecipe: Recipe) {
    console.log('取得單一 recipe', oneRecipe);
    this.oneRecipeItem = oneRecipe;

  }

}
