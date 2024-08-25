// RecipeList.jsx
import React from "react";
import useRecipeStore from "./recipeStore.js";
import { Link } from "react-router-dom";

const RecipeList = ({ onEdit }) => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipes/${recipe.id}`}>View Details</Link>{" "}
          {/* Use Link */}
          <button onClick={() => onEdit(recipe)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
