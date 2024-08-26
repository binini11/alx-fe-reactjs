// RecipeDetails.js
import React from "react";
import { useParams } from "react-router-dom"; // Import useParams to get the recipe ID
import { useRecipeStore } from "./recipeStore";

const RecipeDetails = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(id))
  );

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Add any other recipe details you want to display */}
    </div>
  );
};

export default RecipeDetails;
