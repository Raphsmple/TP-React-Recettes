import { useParams } from "react-router-dom"
import { recipes } from "../data/recipes"
import RecipeCard from "../components/RecipeCard"

export default function CategoryPage() {
    const { category } = useParams()

    const categoryRecipes = recipes.filter(
        (recipe) => recipe.catégorie === category
    )

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <h1 className="text-3xl font-bold mb-6">
                Catégorie : {category}
            </h1>

            {categoryRecipes.map((recipe) => (
                <RecipeCard key={recipe.slug} recipe={recipe} />
            ))}
        </div>
    )
}