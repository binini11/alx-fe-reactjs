// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./FavoritesList";

function App() {
  const [currentRecipe, setCurrentRecipe] = useState(null);

  const handleEdit = (recipe) => {
    setCurrentRecipe(recipe);
  };

  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        {/* Add the SearchBar component */}
        <SearchBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm
                  currentRecipe={currentRecipe}
                  setCurrentRecipe={setCurrentRecipe}
                />
                <RecipeList onEdit={handleEdit} />
                <FavoritesList />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
