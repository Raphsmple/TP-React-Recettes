import { BrowserRouter, Routes, Route } from "react-router-dom"
import RecipesPage from "./pages/RecipesPage"
import RecipeDetailPage from "./pages/RecipeDetailPage"
import CategoryPage from "./pages/CategoryPage"
import NotFoundPage from "./pages/NotFoundPage"
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/recettes" element={<RecipesPage />} />
          <Route path="/recette/:slug" element={<RecipeDetailPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}