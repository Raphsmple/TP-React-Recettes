import type { Recipe } from "../types/recipe";

export const recipes: Recipe[] = [
    {
        name: "Pates carbonara",
        slug: "pates-carbonara",
        catégorie: "Plat",
        ingrédients: [
            "200 g de pâtes",
            "100 g de lardons",
            "2 œufs",
            "50 g de parmesan",
            "Sel",
            "Poivre"
        ],
        durée: "25 minutes",
        préparation: [
            "Faire cuire les pâtes dans une casserole d'eau salée.",
            "Faire revenir les lardons dans une poêle.",
            "Mélanger les œufs avec le parmesan dans un bol.",
            "Égoutter les pâtes en gardant un peu d'eau de cuisson.",
            "Ajouter les pâtes aux lardons.",
            "Retirer la poêle du feu puis ajouter le mélange œufs-parmesan.",
            "Mélanger rapidement et ajouter un peu d'eau de cuisson si nécessaire.",
            "Poivrer et servir."
        ]
    },
    {
        name: "Tarte aux pommes",
        slug: "tarte-aux-pommes",
        catégorie: "Dessert",
        ingrédients: [
            "1 pâte brisée",
            "4 pommes",
            "50 g de sucre",
            "30 g de beurre",
            "1 sachet de sucre vanillé"
        ],
        durée: "45 minutes",
        préparation: [
            "Préchauffer le four à 180°C.",
            "Étaler la pâte dans un moule.",
            "Éplucher et couper les pommes en fines tranches.",
            "Disposer les pommes sur la pâte.",
            "Saupoudrer de sucre et de sucre vanillé.",
            "Ajouter quelques morceaux de beurre.",
            "Faire cuire au four pendant environ 30 minutes."
        ]
    },
    {
        name: "Pizza Margherita",
        slug: "pizza-margherita",
        catégorie: "Plat",
        ingrédients: [
            "1 pâte à pizza",
            "150 g de sauce tomate",
            "125 g de mozzarella",
            "Quelques feuilles de basilic",
            "1 cuillère à soupe d'huile d'olive",
            "Sel"
        ],
        durée: "30 minutes",
        préparation: [
            "Préchauffer le four à 220°C.",
            "Étaler la pâte à pizza.",
            "Ajouter la sauce tomate.",
            "Couper la mozzarella et la répartir sur la pizza.",
            "Ajouter un peu de sel et d'huile d'olive.",
            "Faire cuire pendant environ 15 minutes.",
            "Ajouter les feuilles de basilic avant de servir."
        ]
    }
]