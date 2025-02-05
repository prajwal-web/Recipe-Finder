import "./styles/App.css";
// import useRecipeList from "./hooks/useRecipeList";
// import RecipeSearch from "./components/features/RecipeSearch";
// import RecipeList from "./components/features/RecipeList";
import Form1 from "./components/form/Form1";
import {
  styled,
  Grid2 as Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import useExercises from "./hooks/useExcercises";
import "./styles/App.css";
import Rating from "@mui/material/Rating";

function App() {
  // const { recipes, setSearch } = useRecipeList();
  const { exercises } = useExercises();

  console.log(exercises);
  const FormGrid = styled(Grid)(() => ({
    display: "flex",
    flexDirection: "column",
  }));

  const mratingObj = {
    beginner: 2,
    intermediate: 3.5,
    advanced: 4.5,
  };

  return (
    <>
      {/* <RecipeSearch setSearch={setSearch} /> */}
      {/* <RecipeList recipes={recipes} /> */}
      <Form1 />
      <Grid container spacing={3}>
        {exercises?.map((exercise: any) => {
          return (
            <FormGrid size={{ xs: 12, md: 6, lg: 4 }}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h4">
                    {exercise?.name}
                  </Typography>
                  <Typography gutterBottom variant="body1">
                    {exercise?.type}
                  </Typography>
                  <Typography gutterBottom variant="body2">
                    {exercise?.muscle}
                  </Typography>
                  <Rating
                    value={mratingObj[exercise?.difficulty]}
                    precision={0.5}
                    readOnly
                  ></Rating>
                </CardContent>
              </Card>
            </FormGrid>
          );
        })}
      </Grid>
    </>
  );
}

export default App;
