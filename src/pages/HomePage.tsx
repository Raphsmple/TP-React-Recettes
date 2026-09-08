import { Link } from "react-router-dom"

export default function HomePage() {
    return (
        <div className="text-center py-16">
            <h1 className="text-4xl font-bold mb-4">
                Bienvenue sur mes recettes
            </h1>
            <p>Découvrez toutes mes recettes.</p>
            <Link
                to="/recettes"
                className="inline-block mt-6 rounded-lg bg-black px-6 py-3 text-lg text-white hover:bg-gray-800"
            >
                Voir les recettes
            </Link>
        </div>
    )
}