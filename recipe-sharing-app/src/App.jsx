import React, { useState } from "react";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  const [currentRecipe, setCurrentRecipe] = useState(null);

  const handleEdit = (recipe) => {
    setCurrentRecipe(recipe);
  };

  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm
        currentRecipe={currentRecipe}
        setCurrentRecipe={setCurrentRecipe}
      />
      <RecipeList onEdit={handleEdit} />
    </div>
  );
}

export default App;
