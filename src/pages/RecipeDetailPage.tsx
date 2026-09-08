import { useParams } from "react-router-dom"
import { recipes } from "../data/recipes"

export default function RecipeDetailPage() {
    const { slug } = useParams()
    const recipe = recipes.find((recipe) => recipe.slug === slug)
    if (!recipe){
        return <p>Cette recette n'existe pas</p>
    }
    return (
        <div>
            <h1 className="text-3xl font-bold">{recipe.name}</h1>
            <div className="my-4">
                <p>Catégorie : {recipe.catégorie}</p>
                <p>Durée : {recipe.durée}</p>
            </div>
            <h2 className="text-2xl font-bold mt-6">Ingrédients</h2>
            <ul className="list-disc pl-6">
                {recipe.ingrédients.map((ingrédients) => (
                    <li key={ingrédients}>{ingrédients}</li>
                ))}
            </ul>
            <h2 className="text-2xl font-bold mt-6">Préparation</h2>
            <ol className="list-decimal pl-6">
                {recipe.préparation.map((préparation) => (
                    <li key={préparation}>{préparation}</li>
                ))}
            </ol>
        </div>
    ) 
    
}