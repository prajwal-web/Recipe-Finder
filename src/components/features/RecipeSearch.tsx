import TextField from "@mui/material/TextField";
import { TRecipeSearch } from "../../types/Recipes";

const RecipeSearch = ({ setSearch }: TRecipeSearch) => {
  return (
    <TextField
      id="recipe-search"
      label="Outlined"
      variant="outlined"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default RecipeSearch;