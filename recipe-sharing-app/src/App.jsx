// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, and Route
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";
import DeleteRecipeButton from "./components/DeleteRecipeButton";

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route path="/add" element={<AddRecipeForm />} />

          <Route path="/edit/:id" element={<EditRecipeForm />} />

          <Route path="/recipes/:id" element={<RecipeDetails />} />

          <Route index element={<RecipeList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
