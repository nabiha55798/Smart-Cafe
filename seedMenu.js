const mongoose = require('mongoose');
const dotenv = require('dotenv');
const MenuItem = require('./models/MenuItem');

dotenv.config();

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        
        const menuItems = [
            { name: "Artisan Espresso", description: "Rich, bold, and perfectly balanced double shot.", price: 3.50, category: "Coffee", image_url: "/images/espresso.png" },
            { name: "Caramel Macchiato", description: "Velvety steamed milk with vanilla, marked with espresso and caramel.", price: 5.50, category: "Coffee", image_url: "/images/macchiato.png" },
            { name: "Avocado Smashed Toast", description: "Artisan sourdough topped with poached eggs, chili flakes, and microgreens.", price: 12.50, category: "Breakfast", image_url: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop" },
            { name: "Classic Eggs Benedict", description: "Poached eggs and ham on an English muffin with silky hollandaise.", price: 13.50, category: "Breakfast", image_url: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?q=80&w=800&auto=format&fit=crop" },
            { name: "Gourmet Angus Burger", description: "Premium angus beef, aged cheddar, and house-made brioche.", price: 14.50, category: "Main Course", image_url: "/img/gourmet_burger_1776337486331.png" },
            { name: "Margherita Woodfire Pizza", description: "San Marzano tomatoes, fresh buffalo mozzarella, and basil.", price: 12.00, category: "Main Course", image_url: "/img/margherita_pizza_1776337596904.png" },
            { name: "Ribeye Steak", description: "Grilled ribeye with herb butter and seasonal roasted vegetables.", price: 28.00, category: "Main Course", image_url: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=800&auto=format&fit=crop" },
            { name: "Fresh Sushi Platter", description: "Hand-rolled selection of premium sashimi and nigiri.", price: 18.00, category: "Main Course", image_url: "/img/sushi_platter_1776337675716.png" },
            { name: "Signature Chocolate Cake", description: "Decadent dark chocolate layers with a silky ganache finish.", price: 7.50, category: "Bakery", image_url: "/img/chocolate_cake_1776337612686.png" },
            { name: "Mango Passion Cheesecake", description: "Creamy cheesecake with a vibrant mango and passion fruit glaze.", price: 8.50, category: "Bakery", image_url: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop" },
            { name: "Wild Berry Smoothie", description: "Refreshing blend of fresh blueberries, raspberries, and yogurt.", price: 6.50, category: "Beverages", image_url: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=800&auto=format&fit=crop" },
            { name: "Iced Matcha Latte", description: "Premium ceremonial grade matcha with chilled milk and ice.", price: 5.75, category: "Beverages", image_url: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?q=80&w=800&auto=format&fit=crop" },
            { name: "Truffle Parmesan Fries", description: "Crispy golden fries dusted with herbs, parmesan, and truffle oil.", price: 9.00, category: "Sides & Salads", image_url: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop" },
            { name: "Caesar Salad", description: "Romaine hearts, grilled chicken, garlic croutons, and parmesan.", price: 11.50, category: "Sides & Salads", image_url: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=800&auto=format&fit=crop" },
            { name: "Spicy Tuna Tartare", description: "Sashimi-grade tuna with avocado, cucumber, and spicy sesame.", price: 14.00, category: "Sides & Salads", image_url: "https://images.unsplash.com/photo-1546039907-7fa05f864c02?q=80&w=800&auto=format&fit=crop" }
        ];

        await MenuItem.deleteMany(); // Clear existing
        await MenuItem.insertMany(menuItems);
        console.log("Menu items with high quality images properly seeded!");
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

seedDB();
