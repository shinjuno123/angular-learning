import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
          'Panang Curry', 
          'Quick and Easy Panang Curry', 
          'https://tastesbetterfromscratch.com/wp-content/uploads/2019/12/Panang-Curry-6.jpg',
          [
            new Ingredient("tablespoon oil", 1),
            new Ingredient("tablespoons Panang curry paste", 2),
            new Ingredient("tablespoon peanut butter", 1),
            new Ingredient("pounds chicken breasts , cut into pieces against the grain", 2),
            new Ingredient("small onion , sliced", 1),
            new Ingredient("green bell pepper , thinly sliced", 1),
            new Ingredient("red bell pepper , thinly sliced", 1),
            new Ingredient("teaspoons freshly grated ginger", 2),
            new Ingredient("garlic cloves , minced", 4),
            new Ingredient("14 oz cans coconut milk (Chaokoh brand is my favorite)", 2),
            new Ingredient("teaspoons cornstarch", 2),
            new Ingredient("tablespoons fish sauce", 1),
            new Ingredient("tablespoon lime juice", 1),
            new Ingredient("loosely packed basil leaves , roughly chopped", 1),
            new Ingredient("▢Hot cooked rice white, brown or jasmine", 1)
          ]),
        
        new Recipe(
          'CHICKEN FAJITAS', 
          'Easy and flavorful weeknight meal', 
          'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/02/Chicken-Fajitas-7-1024x1536.jpg',
          [ new Ingredient("Chili Powder", 1),
          new Ingredient("Ground Cumin", 1),
          new Ingredient("Garlic Powder", 1),
          new Ingredient("Paprika", 1),
          new Ingredient("Oregano", 1),
          new Ingredient("Salt", 1),
          new Ingredient("Pepper", 1)
        ])
    ];

    constructor(private slService: ShoppingListService){}


    getRecipes(){
      return this.recipes.slice();
    }

    getRecipe(id: number){
      return this.recipes.at(id);
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
      this.slService.addIngredients(ingredients);
    }


}