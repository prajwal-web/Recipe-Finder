import { useEffect, useState } from "react";
import { TRecipes } from "../types/Recipes";
import RecipesApiKeys from "../constants/keys/recipes";

console.log(import.meta.env.VITE_RECIPE_API_HOST, "Hosted Key!!");
console.log(import.meta.env.VITE_API_KEY, "API Key!!");

const useRecipeList = () => {
  const [recipes, setRecipes] = useState<TRecipes[]>([]);
  const [search, setSearch] = useState("");

  console.log(search);

  useEffect(() => {
    if (search === "" || search.length < 3) return;
    
    fetch(
      `${import.meta.env.VITE_RECIPE_API_HOST}${
        RecipesApiKeys.recipes
      }?query=${search}`,
      {
        headers: {
          "X-Api-Key": import.meta.env.VITE_API_KEY,
        },
      }
    )
      .then((data) => data.json())
      .then((result) => setRecipes(result));
  }, [search]);

  return {
    recipes,
    setSearch,
  };
};

export default useRecipeList;
