import type { Recipe } from "../types/recipe"
import { Link } from "react-router-dom"

type RecipeCardProps = {
    recipe: Recipe
}
const RecipeCard = ({recipe}: RecipeCardProps) => {
    return (
        <article className="border border-pink-200 rounded-lg p-4 mb-4 shadow bg-rose-50">
            <Link to={`/recette/${recipe.slug}`}>
                <h2 className="text-xl font-bold">{recipe.name}</h2>
            </Link>
                <p className="text-gray-600">{recipe.durée}</p>
                <p className="text-gray-500">{recipe.catégorie}</p>
        </article>
    )
}

export default RecipeCard
