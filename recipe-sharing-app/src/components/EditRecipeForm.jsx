// EditRecipeForm.jsx
import React, { useState } from "react";
import { useRecipeStore } from "./recipeStore";

const EditRecipeForm = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleUpdate = (event) => {
    event.preventDefault();

    useRecipeStore.getState().updateRecipe({
      ...recipe,
      title,
      description,
    });
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="button" onClick={handleUpdate}>
        Save Changes
      </button>
    </div>
  );
};

export default EditRecipeForm;
