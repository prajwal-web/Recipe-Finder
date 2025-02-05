import { TRecipeList, TRecipes } from "../../types/Recipes";

const RecipeList = ({ recipes }: TRecipeList) => {
    console.log(recipes)
  return (
    <ul>
      {recipes.map((recipe: TRecipes) => (
        <>
          <li>{recipe?.title}</li>
          <li>{recipe?.servings}</li>
        </>
      ))}
    </ul>
  );
};

export default RecipeList;