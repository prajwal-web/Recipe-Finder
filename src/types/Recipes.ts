export type TRecipes = {
    ingredients: string;
    instructions: string;
    servings: string;
    title: string;
  };
  
  export type TRecipeSearch = {
    setSearch: (v: string) => void;
  };
  
  export type TRecipeList = {
    recipes: TRecipes[];
  };