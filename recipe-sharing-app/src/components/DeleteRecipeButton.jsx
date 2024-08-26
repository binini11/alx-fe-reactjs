// DeleteRecipeButton.js
import React from "react";
import { useRecipeStore } from "./recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const handleDelete = () => {
    useRecipeStore.getState().deleteRecipe(recipeId);
  };

  return (
    <button onClick={handleDelete} style={{ color: "red" }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
