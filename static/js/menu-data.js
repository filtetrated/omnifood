const menuData = {
    appetizers: [
        {
            name: "Foie Gras au Torchon",
            price: 32,
            description: "House-made foie gras, brioche toast, fig jam, port wine reduction",
            tags: ["Signature", "Contains Alcohol"],
            allergens: ["Dairy", "Gluten"],
            image: "foie-gras.jpg"
        },
        {
            name: "Caviar Service",
            price: 95,
            description: "30g Premium Ossetra caviar, traditional garnishes, blini",
            tags: ["Premium", "Signature"],
            allergens: ["Fish", "Dairy", "Gluten"],
            image: "caviar.jpg"
        },
        {
            name: "Tartare de Boeuf",
            price: 28,
            description: "Hand-cut beef tenderloin, quail egg, traditional garnishes, grilled sourdough",
            tags: ["Raw", "Spicy Available"],
            allergens: ["Egg", "Gluten"],
            image: "beef-tartare.jpg"
        },
        {
            name: "Wild Mushroom Velouté",
            price: 24,
            description: "Seasonal wild mushrooms, truffle cream, herb oil",
            tags: ["Vegetarian", "Gluten-Free"],
            allergens: ["Dairy"],
            image: "mushroom-veloute.jpg"
        },
        {
            name: "Seared Sea Scallops",
            price: 30,
            description: "Day-boat scallops, cauliflower purée, pancetta crisp, herb oil",
            tags: ["Signature"],
            allergens: ["Shellfish", "Dairy"],
            image: "scallops-app.jpg"
        }
    ],
    soups_salads: [
        {
            name: "Lobster Bisque",
            price: 26,
            description: "Maine lobster, cognac, crème fraîche",
            tags: ["Signature", "Contains Alcohol"],
            allergens: ["Shellfish", "Dairy"],
            image: "lobster-bisque.jpg"
        },
        {
            name: "French Onion Soup",
            price: 19,
            description: "Caramelized onions, beef broth, Gruyère cheese, crusty baguette",
            tags: ["Classic"],
            allergens: ["Dairy", "Gluten"],
            image: "onion-soup.jpg"
        },
        {
            name: "Elegant House Salad",
            price: 18,
            description: "Mixed baby lettuces, shaved vegetables, herbs, champagne vinaigrette",
            tags: ["Vegetarian", "Vegan", "Gluten-Free"],
            allergens: [],
            image: "house-salad.jpg"
        },
        {
            name: "Roasted Beet Salad",
            price: 21,
            description: "Heritage beets, goat cheese, spiced pecans, aged balsamic",
            tags: ["Vegetarian", "Gluten-Free"],
            allergens: ["Dairy", "Nuts"],
            image: "beet-salad.jpg"
        }
    ],
    main_courses: [
        {
            name: "Beef Wellington",
            price: 85,
            description: "USDA Prime beef tenderloin, mushroom duxelles, prosciutto, puff pastry, red wine sauce",
            tags: ["Signature", "Contains Alcohol"],
            allergens: ["Gluten", "Dairy", "Egg"],
            image: "beef-wellington.jpg"
        },
        {
            name: "Dry-Aged Prime Ribeye",
            price: 75,
            description: "45-day aged beef, bone marrow sauce, roasted vegetables",
            tags: ["Signature", "Gluten-Free"],
            allergens: ["Dairy"],
            image: "ribeye.jpg"
        },
        {
            name: "Rack of Lamb",
            price: 68,
            description: "Australian lamb, herb crust, spring vegetables, natural jus",
            tags: ["Premium"],
            allergens: ["Gluten"],
            image: "lamb.jpg"
        },
        {
            name: "Duck Breast",
            price: 58,
            description: "Muscovy duck, cherry gastrique, roasted root vegetables",
            tags: ["Gluten-Free"],
            allergens: [],
            image: "duck.jpg"
        }
    ],
    seafood: [
        {
            name: "Whole Maine Lobster",
            price: 85,
            description: "Choice of thermidor or grilled, seasonal vegetables",
            tags: ["Signature", "Market Price"],
            allergens: ["Shellfish", "Dairy"],
            image: "lobster.jpg"
        },
        {
            name: "Dover Sole Meunière",
            price: 82,
            description: "Whole Dover sole, brown butter, capers, lemon, parsley",
            tags: ["Signature", "Premium"],
            allergens: ["Fish", "Dairy"],
            image: "dover-sole.jpg"
        },
        {
            name: "Pan-Seared Sea Bass",
            price: 64,
            description: "Mediterranean sea bass, saffron risotto, seasonal vegetables",
            tags: ["Gluten-Free"],
            allergens: ["Fish", "Dairy"],
            image: "sea-bass.jpg"
        }
    ],
    vegetarian: [
        {
            name: "Seasonal Risotto",
            price: 42,
            description: "Carnaroli rice, seasonal vegetables, aged parmesan",
            tags: ["Vegetarian", "Gluten-Free"],
            allergens: ["Dairy"],
            image: "risotto.jpg"
        },
        {
            name: "Wild Mushroom Wellington",
            price: 38,
            description: "Seasonal mushrooms, spinach, flaky pastry, truffle sauce",
            tags: ["Vegan"],
            allergens: ["Gluten"],
            image: "mushroom-wellington.jpg"
        },
        {
            name: "Roasted Cauliflower Steak",
            price: 36,
            description: "Herb-roasted cauliflower, romesco sauce, toasted almonds",
            tags: ["Vegan", "Gluten-Free"],
            allergens: ["Nuts"],
            image: "cauliflower.jpg"
        }
    ],
    desserts: [
        {
            name: "Soufflé au Chocolat",
            price: 24,
            description: "Valrhona chocolate, vanilla ice cream (20 minute preparation)",
            tags: ["Signature"],
            allergens: ["Dairy", "Egg", "Gluten"],
            image: "souffle.jpg"
        },
        {
            name: "Crème Brûlée",
            price: 18,
            description: "Tahitian vanilla, caramelized sugar",
            tags: ["Classic", "Gluten-Free"],
            allergens: ["Dairy", "Egg"],
            image: "creme-brulee.jpg"
        },
        {
            name: "Tarte Tatin",
            price: 20,
            description: "Caramelized apples, flaky pastry, vanilla ice cream",
            tags: ["Classic"],
            allergens: ["Gluten", "Dairy"],
            image: "tarte-tatin.jpg"
        },
        {
            name: "Cheese Selection",
            price: 28,
            description: "Curated selection of artisanal cheeses, accompaniments",
            tags: ["Premium"],
            allergens: ["Dairy"],
            image: "cheese.jpg"
        }
    ]
};

// Export the menu data
export default menuData;