// FavoritesList.jsx
import React from "react";
import { useRecipeStore } from "../recipeStore"; // Adjust the import path

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) =>
      state.recipes.find((recipe) => recipe.id === id)
    )
  );

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          {/* Add buttons to remove from favorites */}
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
