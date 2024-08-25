import React, { useState, useEffect } from "react";
import useRecipeStore from "./recipeStore";

const AddRecipeForm = ({ currentRecipe, setCurrentRecipe }) => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (currentRecipe) {
      setTitle(currentRecipe.title);
      setDescription(currentRecipe.description);
    }
  }, [currentRecipe]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentRecipe) {
      updateRecipe({ ...currentRecipe, title, description });
      setCurrentRecipe(null);
    } else {
      addRecipe({ id: Date.now(), title, description });
    }
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">
        {currentRecipe ? "Update Recipe" : "Add Recipe"}
      </button>
    </form>
  );
};

export default AddRecipeForm;
