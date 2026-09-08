import { recipes } from "../data/recipes";
import RecipeCard from "../components/RecipeCard";

export default function RecipesPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Mes recettes</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.slug} recipe={recipe} />
                ))}
            </div>
        </div>
)
}