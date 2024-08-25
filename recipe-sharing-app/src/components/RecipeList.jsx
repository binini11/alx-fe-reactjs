// RecipeList.jsx
import React from "react";
import useRecipeStore from "./recipeStore.js";

const RecipeList = ({ onEdit }) => {
  const recipes = useRecipeStore((state) => state.filteredRecipes); // Use filteredRecipes

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => onEdit(recipe)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
