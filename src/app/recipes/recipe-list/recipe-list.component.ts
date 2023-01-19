import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Output() recipeSelectedNotice = new EventEmitter<Recipe>();

 recipes: Recipe[] = [
    new Recipe('BigMac', 'O queridinho de todos', 
    'https://www.farofamagazine.com.br/wp-content/uploads/2022/05/big.jpg', '503 kcal'),
    new Recipe('Big Tasty', 'Pra quando bater a Big Fome', 
    'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kzXKz2eL/200/200/original?country=br', '944 kcal'),
    new Recipe('Chedar McMelt', 'O brasileirinho mais aclamado', 
    'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kfXu0yRK/200/200/original?country=br', '474 kcal'),
    new Recipe('Quarteirão com Queijo', 'Uma explosão de queijo', 
    'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kfXDlz7u/200/200/original?country=br', '523 kcal'),
    new Recipe('McNífico Bacon', 'Não precisa nem dizer nada', 
    'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kfXEsSfl/200/200/original?country=br', '571 kcal')
  ];

  onRecipeSelected(recipe: Recipe){
    this.recipeSelectedNotice.emit(recipe);

  }

  constructor() {}
}
