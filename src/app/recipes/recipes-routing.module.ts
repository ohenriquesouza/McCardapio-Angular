import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth-guard.service";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesStartComponent } from "./recipes-start/recipes-start.component";
import { RecipesComponent } from "./recipes.component";

const recipesRoutes: Routes = [
  {path: '', redirectTo: '/signup', pathMatch: 'full'}, //<-- pathMatch previne erros vinculados a paginas incompletas
  {path: 'recipes', canActivate: [AuthGuard],component: RecipesComponent, children: [{path: '', component: RecipesStartComponent},
  {path: 'new', component: RecipeEditComponent},
  {path: ':id', component: RecipeDetailComponent},
  {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}]},
]

@NgModule({
    imports: [
        RouterModule.forChild(recipesRoutes)
    ],
    exports: [RouterModule]
})
export class RecipesRoutingModule{

}
