import React, { useState } from "react";
import useRecipeStore from "./store";

function App() {
  const [newRecipe, setNewRecipe] = useState("");
  const recipes = useRecipeStore((state) => state.recipes);
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const handleAddRecipe = () => {
    addRecipe(newRecipe);
    setNewRecipe("");
  };

  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <input
        type="text"
        value={newRecipe}
        onChange={(e) => setNewRecipe(e.target.value)}
        placeholder="Add a new recipe"
      />
      <button onClick={handleAddRecipe}>Add Recipe</button>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>{recipe}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
