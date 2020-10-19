import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
}) 
export class RecipesListComponent implements OnInit {

  @Output() oneRecipeEmitter = new EventEmitter<Recipe>();

  myRecipes: Recipe[] = [
    new Recipe('Apple', 'this is for Apple', 'https://img.bestrecipes.com.au/rZFo7F8i/h300-w400-cscale-1495077669/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg'),
    new Recipe('Banana', 'this is for Banana', 'https://img.bestrecipes.com.au/rZFo7F8i/h300-w400-cscale-1495077669/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg')
  ];
  

  constructor() { }

  ngOnInit() {
  }

  showRecipeDetail(oneRecipe: Recipe) {
    this.oneRecipeEmitter.emit(oneRecipe);
  }


}
