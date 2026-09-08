import { Link, Outlet } from "react-router-dom"

export default function Layout() {
    return(
        <div className="min-h-screen bg-gradient-to-br from-orange-100 to-pink-100">
            <nav className="flex gap-4 p-4 border-b mb-6">
                <Link to="/" className="hover:underline">Accueil</Link>
                <Link to="/recettes" className="hover:underline">Recettes</Link>
                <Link to="/category/Plat" className="hover:underline">Plat</Link>
                <Link to="/category/Dessert" className="hover:underline">Dessert</Link>
            </nav>
            <main className="max-w-5xl mx-auto p-4">
                <Outlet />
            </main>
        </div>
    )

}