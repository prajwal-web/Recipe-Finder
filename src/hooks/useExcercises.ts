import ExerciseApiKeys from "../constants/keys/exercises";
import { useState, useEffect } from "react";

const useExercises = () => {
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_RECIPE_API_HOST}${
        ExerciseApiKeys.exercises
      }??muscle=biceps`,
      {
        headers: {
          "X-Api-Key": import.meta.env.VITE_API_KEY,
        },
      }
    )
      .then((data) => data.json())
      .then((result) => setExercises(result));
  }, []);

  return {
    exercises,
  };
};

export default useExercises;
