/**
 * Cinnamon Cafe & Restro - Interactive Application Logic
 * Location: Station Rd, Near Eye Cure, Opp. Vikash Textile, Sribhumi, Assam 788711
 * Phone: 094018 48694
 */

// ==========================================================================
// 1. MENU DATA REPOSITORY
// ==========================================================================
const MENU_ITEMS = [
  // --- MOMO (Page 02) ---
  {
    id: "mo-1",
    name: "Veg. Steam Momo",
    category: "momo",
    diet: "veg",
    price: 80,
    special: false,
    bestseller: true,
    desc: "Fresh steamed dumplings packed with minced seasoned vegetables & herbs, served with spicy red dip."
  },
  {
    id: "mo-2",
    name: "Chicken Steam Momo",
    category: "momo",
    diet: "nonveg",
    price: 90,
    special: false,
    bestseller: true,
    desc: "Tender steamed dumplings filled with succulent minced chicken and Himalayan spices."
  },
  {
    id: "mo-3",
    name: "Fried Momo (Veg)",
    category: "momo",
    diet: "veg",
    price: 100,
    special: false,
    bestseller: false,
    desc: "Crisp golden fried vegetable dumplings served with authentic tangy chili garlic chutney."
  },
  {
    id: "mo-4",
    name: "Fried Momo (Chicken)",
    category: "momo",
    diet: "nonveg",
    price: 120,
    special: false,
    bestseller: true,
    desc: "Crunchy fried momos stuffed with juicy spiced chicken mince, served piping hot."
  },
  {
    id: "mo-5",
    name: "Pan Fried Momo (Veg)",
    category: "momo",
    diet: "veg",
    price: 120,
    special: false,
    bestseller: false,
    desc: "Crisp pan-seared vegetable momos tossed in savory sweet-chili garlic sauce glaze."
  },
  {
    id: "mo-6",
    name: "Pan Fried Momo (Chicken)",
    category: "momo",
    diet: "nonveg",
    price: 140,
    special: true,
    bestseller: true,
    desc: "Pan-fried chicken dumplings tossed with diced capsicum, onions, and spicy Schezwan sauce."
  },
  {
    id: "mo-7",
    name: "Cheese Momo (Chicken)",
    category: "momo",
    diet: "nonveg",
    price: 150,
    special: true,
    bestseller: true,
    desc: "Steamed chicken momos infused with rich gooey molten mozzarella cheese."
  },
  {
    id: "mo-8",
    name: "Kurkure Momo",
    category: "momo",
    diet: "veg",
    price: 140,
    special: true,
    bestseller: true,
    desc: "Extra crunchy crumb-coated fried momos seasoned with tangy chaat and peri-peri seasoning."
  },
  {
    id: "mo-9",
    name: "Jhul Momo",
    category: "momo",
    diet: "veg",
    price: 150,
    special: true,
    bestseller: false,
    desc: "Authentic Nepali style momos served submerged in a bowl of aromatic spiced sesame-tomato soup broth."
  },
  {
    id: "mo-10",
    name: "Combo Momo Platter",
    category: "momo",
    diet: "veg",
    price: 250,
    special: true,
    bestseller: true,
    desc: "Grand chef's platter featuring an assortment of steamed, fried, and pan-fried momo varieties with specialty dips."
  },

  // --- BURGER & SANDWICH (Page 02) ---
  {
    id: "bs-1",
    name: "Burger (Veg)",
    category: "burgers-sandwiches",
    diet: "veg",
    price: 100,
    special: false,
    bestseller: false,
    desc: "Crispy vegetable patty in a toasted sesame bun with lettuce, sliced tomatoes, onions, and creamy mayo."
  },
  {
    id: "bs-2",
    name: "Burger (Chicken)",
    category: "burgers-sandwiches",
    diet: "nonveg",
    price: 120,
    special: false,
    bestseller: true,
    desc: "Grilled spiced chicken patty with crisp lettuce, melted cheese spread, and house signature burger dressing."
  },
  {
    id: "bs-3",
    name: "Fried Chicken Burger",
    category: "burgers-sandwiches",
    diet: "nonveg",
    price: 130,
    special: true,
    bestseller: true,
    desc: "Crisp golden fried chicken fillet dusted in flavorful spices, layered with crunchy slaw and spicy mayo."
  },
  {
    id: "bs-4",
    name: "Sandwich (Veg)",
    category: "burgers-sandwiches",
    diet: "veg",
    price: 80,
    special: false,
    bestseller: false,
    desc: "Fresh toasted sandwich stuffed with seasoned garden vegetables, cucumber, tomatoes, and mint spread."
  },
  {
    id: "bs-5",
    name: "Sandwich (Chicken)",
    category: "burgers-sandwiches",
    diet: "nonveg",
    price: 120,
    special: false,
    bestseller: false,
    desc: "Toasted bread filled with shredded roasted chicken, herbs, black pepper, and creamy mayonnaise."
  },
  {
    id: "bs-6",
    name: "Cheese Corn Sandwich",
    category: "burgers-sandwiches",
    diet: "veg",
    price: 140,
    special: false,
    bestseller: true,
    desc: "Golden toasted sandwich loaded with sweet corn kernels and melted gooey mozzarella cheese."
  },
  {
    id: "bs-7",
    name: "Paneer Grilled Sandwich",
    category: "burgers-sandwiches",
    diet: "veg",
    price: 120,
    special: false,
    bestseller: true,
    desc: "Pan-grilled sandwich stuffed with marinated spiced cottage cheese cubes, capsicum, and house sauce."
  },
  {
    id: "bs-8",
    name: "Chicken Club Sandwich",
    category: "burgers-sandwiches",
    diet: "nonveg",
    price: 160,
    special: true,
    bestseller: true,
    desc: "Multi-layered hearty toasted club sandwich stuffed with seasoned chicken, egg, cheese, and crunchy veggies."
  },

  // --- ROLLS (Page 03) ---
  {
    id: "ro-1",
    name: "Egg Kati Roll",
    category: "rolls",
    diet: "nonveg",
    price: 80,
    special: false,
    bestseller: false,
    desc: "Flaky paratha layered with seasoned egg omelette, sliced onions, green chilies, and tangy chaat masala."
  },
  {
    id: "ro-2",
    name: "Paneer Kati Roll",
    category: "rolls",
    diet: "veg",
    price: 100,
    special: false,
    bestseller: true,
    desc: "Crispy flatbread wrapped around marinated tandoori cottage cheese cubes, capsicum, and mint sauce."
  },
  {
    id: "ro-3",
    name: "Chicken Kati Roll",
    category: "rolls",
    diet: "nonveg",
    price: 110,
    special: false,
    bestseller: true,
    desc: "Warm paratha wrap loaded with tender spiced chicken tikka pieces, tossed onions, and zesty lime."
  },
  {
    id: "ro-4",
    name: "Egg Chicken Kathi Roll",
    category: "rolls",
    diet: "nonveg",
    price: 130,
    special: true,
    bestseller: true,
    desc: "Signature combo roll featuring egg-layered flaky paratha filled with hearty spiced juicy chicken chunks."
  },

  // --- PIZZA (Page 03) ---
  {
    id: "pz-1",
    name: "Margherita Pizza",
    category: "pizza",
    diet: "veg",
    price: 150,
    special: false,
    bestseller: true,
    desc: "Classic hand-stretched crust topped with rich Italian tomato sauce, melted mozzarella, and fresh basil herbs."
  },
  {
    id: "pz-2",
    name: "Farmhouse Pizza",
    category: "pizza",
    diet: "veg",
    price: 180,
    special: false,
    bestseller: false,
    desc: "Topped with crunchy bell peppers, onions, ripe tomatoes, sliced mushrooms, and herbs with melted cheese."
  },
  {
    id: "pz-3",
    name: "Cheese & Corn Pizza",
    category: "pizza",
    diet: "veg",
    price: 210,
    special: false,
    bestseller: true,
    desc: "Sweet juicy golden corn kernels smothered under a thick layer of melted mozzarella and cheddar cheese."
  },
  {
    id: "pz-4",
    name: "Deluxe Veggie Pizza",
    category: "pizza",
    diet: "veg",
    price: 230,
    special: false,
    bestseller: false,
    desc: "Loaded with black olives, bell peppers, crisp sweet corn, mushrooms, jalapeños, and spiced tomato base."
  },
  {
    id: "pz-5",
    name: "Paneer Tikka Pizza",
    category: "pizza",
    diet: "veg",
    price: 220,
    special: true,
    bestseller: true,
    desc: "Tandoori marinated paneer cubes, crisp capsicum, diced red onions, and smoky spices on mozzarella base."
  },
  {
    id: "pz-6",
    name: "Chicken Tikka Pizza",
    category: "pizza",
    diet: "nonveg",
    price: 240,
    special: true,
    bestseller: true,
    desc: "Succulent tandoori spiced roasted chicken chunks, caramelized onion rings, paprika, and premium cheese."
  },
  {
    id: "pz-7",
    name: "Overloaded Pizza",
    category: "pizza",
    diet: "veg",
    price: 250,
    special: true,
    bestseller: false,
    desc: "Maximum toppings extravaganza with exotic veggies, double cheese blend, and signature herb seasoning."
  },
  {
    id: "pz-8",
    name: "Cinnamon Special Pizza",
    category: "pizza",
    diet: "veg",
    price: 300,
    special: true,
    bestseller: true,
    desc: "Chef's gourmet masterpiece loaded with premium toppings, lavish cheese, and house secret spiced drizzle."
  },

  // --- NOODLES & PASTA (Page 04) ---
  {
    id: "nd-1",
    name: "Vegetable Noodles",
    category: "noodles-pasta",
    diet: "veg",
    price: 80,
    special: false,
    bestseller: false,
    desc: "Stir-fried classic noodles tossed with shredded cabbage, carrots, capsicum, spring onions, and light soy."
  },
  {
    id: "nd-2",
    name: "Chicken Noodles",
    category: "noodles-pasta",
    diet: "nonveg",
    price: 100,
    special: false,
    bestseller: true,
    desc: "Wok-tossed long noodles with juicy shredded chicken, julienned vegetables, and savory Chinese spices."
  },
  {
    id: "nd-3",
    name: "Egg Chicken Noodles",
    category: "noodles-pasta",
    diet: "nonveg",
    price: 120,
    special: false,
    bestseller: true,
    desc: "Stir-fried noodles loaded with scrambled eggs, diced chicken pieces, crunchy greens, and dark soy."
  },
  {
    id: "nd-4",
    name: "Schezwan Noodles (Veg)",
    category: "noodles-pasta",
    diet: "veg",
    price: 100,
    special: false,
    bestseller: false,
    desc: "Spicy wok noodles tossed in fiery Sichuan pepper sauce with crunchy garden veggies."
  },
  {
    id: "nd-5",
    name: "Schezwan Noodles (Chicken)",
    category: "noodles-pasta",
    diet: "nonveg",
    price: 120,
    special: false,
    bestseller: true,
    desc: "Fiery Schezwan style spicy noodles with tender chicken chunks, garlic, and hot red chili glaze."
  },
  {
    id: "nd-6",
    name: "Hakka Noodles (Veg)",
    category: "noodles-pasta",
    diet: "veg",
    price: 100,
    special: false,
    bestseller: false,
    desc: "Traditional Indo-Chinese Hakka style noodles stir-fried with crisp cabbage, bell peppers, and scallions."
  },
  {
    id: "nd-7",
    name: "Hakka Noodles (Chicken)",
    category: "noodles-pasta",
    diet: "nonveg",
    price: 120,
    special: false,
    bestseller: true,
    desc: "Classic Hakka noodles tossed on high flame with seasoned chicken strips and light seasonings."
  },
  {
    id: "nd-8",
    name: "Chilli Garlic Noodles (Veg)",
    category: "noodles-pasta",
    diet: "veg",
    price: 100,
    special: false,
    bestseller: false,
    desc: "Aromatic noodles tossed with burnt garlic flakes, red chilies, and crisp vegetables."
  },
  {
    id: "nd-9",
    name: "Chilli Garlic Noodles (Chicken)",
    category: "noodles-pasta",
    diet: "nonveg",
    price: 130,
    special: false,
    bestseller: false,
    desc: "Piquant garlic-infused wok noodles tossed with spiced chicken chunks and crushed red chili flakes."
  },
  {
    id: "nd-10",
    name: "Butter Garlic Noodles (Veg)",
    category: "noodles-pasta",
    diet: "veg",
    price: 130,
    special: true,
    bestseller: false,
    desc: "Rich butter-tossed noodles flavored with toasted minced garlic, herbs, and fresh spring onions."
  },
  {
    id: "nd-11",
    name: "Butter Garlic Noodles (Chicken)",
    category: "noodles-pasta",
    diet: "nonveg",
    price: 150,
    special: true,
    bestseller: true,
    desc: "Silky butter glazed noodles tossed with golden garlic, sautéed chicken strips, and cracked pepper."
  },
  {
    id: "nd-12",
    name: "Mixed American Chopsuey",
    category: "noodles-pasta",
    diet: "nonveg",
    price: 180,
    special: true,
    bestseller: true,
    desc: "Crispy fried noodle nest topped with tangy sweet & sour gravy, chicken, egg, and fresh vegetables."
  },
  {
    id: "ps-1",
    name: "White Sauce Pasta (Veg)",
    category: "noodles-pasta",
    diet: "veg",
    price: 120,
    special: true,
    bestseller: true,
    desc: "Penne pasta in rich creamy Alfredo cheese sauce with sautéed mushrooms, bell peppers, and herbs."
  },
  {
    id: "ps-2",
    name: "White Sauce Pasta (Non-Veg)",
    category: "noodles-pasta",
    diet: "nonveg",
    price: 150,
    special: true,
    bestseller: true,
    desc: "Creamy white sauce Alfredo pasta tossed with tender herb chicken slices and melted parmesan."
  },
  {
    id: "ps-3",
    name: "Red Sauce Pasta (Veg)",
    category: "noodles-pasta",
    diet: "veg",
    price: 120,
    special: false,
    bestseller: false,
    desc: "Penne tossed in robust Italian tomato basil marinara sauce with garlic and sautéed vegetables."
  },
  {
    id: "ps-4",
    name: "Red Sauce Pasta (Non-Veg)",
    category: "noodles-pasta",
    diet: "nonveg",
    price: 150,
    special: false,
    bestseller: false,
    desc: "Spicy Arrabbiata red sauce pasta loaded with seasoned chicken, chili flakes, olives, and herbs."
  },

  // --- STARTER (VEG) (Page 05) ---
  {
    id: "stv-1",
    name: "Veg. Pakoda",
    category: "starters-soups",
    diet: "veg",
    price: 90,
    special: false,
    bestseller: false,
    desc: "Crispy golden gram flour fritters made with assorted fresh vegetables and carom seeds."
  },
  {
    id: "stv-2",
    name: "Paneer Pakoda",
    category: "starters-soups",
    diet: "veg",
    price: 140,
    special: false,
    bestseller: true,
    desc: "Thick fresh cottage cheese slices coated in spiced gram flour batter and deep fried to golden perfection."
  },
  {
    id: "stv-3",
    name: "Paneer Tikka",
    category: "starters-soups",
    diet: "veg",
    price: 160,
    special: true,
    bestseller: true,
    desc: "Succulent cubes of cottage cheese marinated in yogurt and tandoori spices, char-grilled with capsicum and onion."
  },
  {
    id: "stv-4",
    name: "Chilli Paneer (Dry)",
    category: "starters-soups",
    diet: "veg",
    price: 150,
    special: false,
    bestseller: true,
    desc: "Wok-tossed crispy paneer cubes in spicy soy-chili sauce with diced capsicum, onions, and spring garlic."
  },
  {
    id: "stv-5",
    name: "French Fries",
    category: "starters-soups",
    diet: "veg",
    price: 110,
    special: false,
    bestseller: false,
    desc: "Classic golden salted crispy potato fries served hot with tomato ketchup and house dip."
  },
  {
    id: "stv-6",
    name: "Peri Peri Fries",
    category: "starters-soups",
    diet: "veg",
    price: 120,
    special: false,
    bestseller: true,
    desc: "Hot crispy fries generously dusted with spicy, tangy African peri-peri seasoning."
  },
  {
    id: "stv-7",
    name: "Crispy Chilli Babycorn",
    category: "starters-soups",
    diet: "veg",
    price: 140,
    special: true,
    bestseller: true,
    desc: "Crunchy fried tender babycorn fingers tossed with green chilies, garlic, and sweet-spicy Chinese glaze."
  },
  {
    id: "stv-8",
    name: "American Corn (Salt & Pepper)",
    category: "starters-soups",
    diet: "veg",
    price: 120,
    special: false,
    bestseller: false,
    desc: "Crisp fried sweet corn kernels tossed with freshly ground black pepper, sea salt, and scallions."
  },
  {
    id: "stv-9",
    name: "Veg. Nuggets",
    category: "starters-soups",
    diet: "veg",
    price: 130,
    special: false,
    bestseller: false,
    desc: "Crispy breaded bite-sized vegetable snacks served with garlic mayo dip."
  },
  {
    id: "stv-10",
    name: "Veg. Finger",
    category: "starters-soups",
    diet: "veg",
    price: 120,
    special: false,
    bestseller: false,
    desc: "Golden fried vegetable cutlet fingers packed with mashed potatoes, peas, and fragrant herbs."
  },
  {
    id: "stv-11",
    name: "Honey Glazed Paneer",
    category: "starters-soups",
    diet: "veg",
    price: 150,
    special: true,
    bestseller: false,
    desc: "Crisp cottage cheese tossed in sticky sweet honey glaze with toasted sesame seeds and chili flakes."
  },
  {
    id: "stv-12",
    name: "Honey Garlic Paneer",
    category: "starters-soups",
    diet: "veg",
    price: 150,
    special: true,
    bestseller: true,
    desc: "Crisp paneer bites coated in an irresistible sauce combining savory roasted garlic and sweet natural honey."
  },

  // --- FISH / PRAWN (Page 07) ---
  {
    id: "fp-1",
    name: "Fish Finger",
    category: "fish-prawn",
    diet: "nonveg",
    price: 200,
    special: false,
    bestseller: true,
    desc: "Crispy crumb-coated river fish fillets seasoned with herbs, served with tartar dip."
  },
  {
    id: "fp-2",
    name: "Chilli Fish Dry Fry",
    category: "fish-prawn",
    diet: "nonveg",
    price: 220,
    special: true,
    bestseller: true,
    desc: "Boneless fish slices tossed in wok with dark soy sauce, fresh green chilies, ginger, and spring onions."
  },
  {
    id: "fp-3",
    name: "Prawn Dry Fry",
    category: "fish-prawn",
    diet: "nonveg",
    price: 250,
    special: true,
    bestseller: true,
    desc: "Succulent juicy prawns batter-fried and tossed with spices, garlic, curry leaves, and green peppers."
  },
  {
    id: "fp-4",
    name: "Hot Garlic Chilli Prawn",
    category: "fish-prawn",
    diet: "nonveg",
    price: 280,
    special: true,
    bestseller: false,
    desc: "King prawns cooked in a fiery roasted garlic and red chili sauce with rich Oriental seasoning."
  },

  // --- SOUP (Page 07) ---
  {
    id: "sp-1",
    name: "Veg. Manchow Soup",
    category: "starters-soups",
    diet: "veg",
    price: 90,
    special: false,
    bestseller: true,
    desc: "Popular spicy and sour Indo-Chinese soup packed with finely chopped vegetables, topped with crispy fried noodles."
  },
  {
    id: "sp-2",
    name: "Sweet Corn Soup (Veg)",
    category: "starters-soups",
    diet: "veg",
    price: 80,
    special: false,
    bestseller: false,
    desc: "Comforting mild soup prepared with sweet cream-style corn broth and tender fresh vegetables."
  },
  {
    id: "sp-3",
    name: "Veg Hot & Sour Soup",
    category: "starters-soups",
    diet: "veg",
    price: 90,
    special: false,
    bestseller: false,
    desc: "Tangy and spicy broth loaded with shredded mushrooms, bamboo shoots, tofu, and black pepper."
  },
  {
    id: "sp-4",
    name: "Chicken Hot & Sour Soup",
    category: "starters-soups",
    diet: "nonveg",
    price: 110,
    special: false,
    bestseller: true,
    desc: "Zesty hot and sour chicken broth with egg ribbons, shredded chicken, and aromatic chili vinegar."
  },
  {
    id: "sp-5",
    name: "Chicken Corn Soup",
    category: "starters-soups",
    diet: "nonveg",
    price: 120,
    special: false,
    bestseller: false,
    desc: "Velvety sweet corn soup simmered with minced chicken and whipped egg drop."
  },
  {
    id: "sp-6",
    name: "Chicken Manchow Soup",
    category: "starters-soups",
    diet: "nonveg",
    price: 130,
    special: true,
    bestseller: true,
    desc: "Robust spicy dark soup loaded with shredded chicken and garlic, served with crunchy noodle topping."
  },

  // --- INDIAN BREAD (Page 08) ---
  {
    id: "br-1",
    name: "Plain Roti",
    category: "breads",
    diet: "veg",
    price: 15,
    special: false,
    bestseller: false,
    desc: "Traditional whole wheat tandoori flatbread baked fresh in clay oven."
  },
  {
    id: "br-2",
    name: "Butter Roti",
    category: "breads",
    diet: "veg",
    price: 20,
    special: false,
    bestseller: true,
    desc: "Soft whole wheat tandoori roti brushed with fresh dairy butter."
  },
  {
    id: "br-3",
    name: "Plain Naan",
    category: "breads",
    diet: "veg",
    price: 60,
    special: false,
    bestseller: false,
    desc: "Classic soft and fluffy leavened white flour bread baked in tandoor."
  },
  {
    id: "br-4",
    name: "Butter Naan",
    category: "breads",
    diet: "veg",
    price: 70,
    special: false,
    bestseller: true,
    desc: "Fluffy tandoor-baked naan lavishly smeared with melted butter."
  },
  {
    id: "br-5",
    name: "Butter Garlic Naan",
    category: "breads",
    diet: "veg",
    price: 80,
    special: true,
    bestseller: true,
    desc: "Aromatic naan topped with minced roasted garlic, fresh coriander, and melted butter."
  },
  {
    id: "br-6",
    name: "Laccha Paratha",
    category: "breads",
    diet: "veg",
    price: 50,
    special: false,
    bestseller: true,
    desc: "Multi-layered flaky whole wheat bread cooked to golden crispness in the tandoor."
  },

  // --- RICE (Page 08) ---
  {
    id: "rc-1",
    name: "Steam Rice",
    category: "biryani-rice",
    diet: "veg",
    price: 60,
    special: false,
    bestseller: false,
    desc: "Fluffy, fragrant long-grain steamed white basmati rice."
  },
  {
    id: "rc-2",
    name: "Jeera Rice",
    category: "biryani-rice",
    diet: "veg",
    price: 90,
    special: false,
    bestseller: true,
    desc: "Basmati rice tempered with roasted cumin seeds and aromatic pure ghee."
  },
  {
    id: "rc-3",
    name: "Veg. Fried Rice",
    category: "biryani-rice",
    diet: "veg",
    price: 100,
    special: false,
    bestseller: false,
    desc: "Wok-tossed basmati rice with finely diced carrots, beans, cabbage, and light seasoning."
  },
  {
    id: "rc-4",
    name: "Egg Fried Rice",
    category: "biryani-rice",
    diet: "nonveg",
    price: 110,
    special: false,
    bestseller: true,
    desc: "Fragrant fried rice stir-fried with scrambled eggs, spring onions, and white pepper."
  },
  {
    id: "rc-5",
    name: "Chicken Fried Rice",
    category: "biryani-rice",
    diet: "nonveg",
    price: 150,
    special: false,
    bestseller: true,
    desc: "Wok-charred rice tossed with juicy seasoned chicken pieces and garden veggies."
  },
  {
    id: "rc-6",
    name: "Egg Chicken Fried Rice",
    category: "biryani-rice",
    diet: "nonveg",
    price: 170,
    special: true,
    bestseller: true,
    desc: "Hearty combination fried rice with double egg, tender chicken bits, and Asian spices."
  },
  {
    id: "rc-7",
    name: "Prawn Fried Rice",
    category: "biryani-rice",
    diet: "nonveg",
    price: 180,
    special: true,
    bestseller: false,
    desc: "Delicate stir-fried rice with fresh prawns, scallions, and savory soy sauce."
  },
  {
    id: "rc-8",
    name: "Schezwan Fried Rice (Veg)",
    category: "biryani-rice",
    diet: "veg",
    price: 120,
    special: false,
    bestseller: false,
    desc: "Spicy Schezwan sauce tossed rice with crisp veggies and hot chili zest."
  },
  {
    id: "rc-9",
    name: "Schezwan Fried Rice (Chicken)",
    category: "biryani-rice",
    diet: "nonveg",
    price: 170,
    special: false,
    bestseller: true,
    desc: "Fiery Schezwan style wok rice loaded with chicken bits, garlic, and hot red pepper."
  },

  // --- BIRYANI (Page 09) ---
  {
    id: "by-1",
    name: "Chicken Biryani (Mini)",
    category: "biryani-rice",
    diet: "nonveg",
    price: 100,
    special: false,
    bestseller: false,
    desc: "Single portion fragrant basmati rice slow-cooked with tender chicken and whole spices."
  },
  {
    id: "by-2",
    name: "Chicken Biryani (Full)",
    category: "biryani-rice",
    diet: "nonveg",
    price: 200,
    special: false,
    bestseller: true,
    desc: "Generous full platter of royal basmati chicken biryani served with raita and salan gravy."
  },
  {
    id: "by-3",
    name: "Paneer Biryani (Mini)",
    category: "biryani-rice",
    diet: "veg",
    price: 90,
    special: false,
    bestseller: false,
    desc: "Single serving of saffron-infused basmati rice layered with spiced paneer cubes."
  },
  {
    id: "by-4",
    name: "Paneer Biryani (Full)",
    category: "biryani-rice",
    diet: "veg",
    price: 180,
    special: false,
    bestseller: true,
    desc: "Full pot of fragrant spiced rice layered with marinated cottage cheese, mint, and saffron."
  },
  {
    id: "by-5",
    name: "Mutton Biryani (Mini)",
    category: "biryani-rice",
    diet: "nonveg",
    price: 150,
    special: false,
    bestseller: false,
    desc: "Mini portion of rich basmati biryani cooked with succulent mutton pieces and aromatic spices."
  },
  {
    id: "by-6",
    name: "Mutton Biryani (Full)",
    category: "biryani-rice",
    diet: "nonveg",
    price: 300,
    special: true,
    bestseller: true,
    desc: "Sumptuous full plate of traditional slow-simmered mutton biryani with tender meat pieces."
  },
  {
    id: "by-7",
    name: "Chicken Dum Biryani (Mini)",
    category: "biryani-rice",
    diet: "nonveg",
    price: 120,
    special: false,
    bestseller: false,
    desc: "Hyderabadi style sealed dum-cooked aromatic chicken biryani (mini portion)."
  },
  {
    id: "by-8",
    name: "Chicken Dum Biryani (Full)",
    category: "biryani-rice",
    diet: "nonveg",
    price: 240,
    special: true,
    bestseller: true,
    desc: "Clay-pot sealed authentic Dum Biryani cooked with fragrant saffron basmati and juicy chicken pieces."
  },
  {
    id: "by-9",
    name: "Mutton Dum Biryani (Mini)",
    category: "biryani-rice",
    diet: "nonveg",
    price: 180,
    special: false,
    bestseller: false,
    desc: "Authentic sealed dum mutton biryani with caramelized onions and saffron (mini portion)."
  },
  {
    id: "by-10",
    name: "Mutton Dum Biryani (Full)",
    category: "biryani-rice",
    diet: "nonveg",
    price: 360,
    special: true,
    bestseller: true,
    desc: "Grand feast sealed Dum Biryani with melt-in-mouth tender mutton and rich royal spices."
  },

  // --- INDIAN GRAVY (VEG) (Page 09) ---
  {
    id: "gr-1",
    name: "Matar Paneer",
    category: "curries-gravy",
    diet: "veg",
    price: 140,
    special: false,
    bestseller: false,
    desc: "Cottage cheese cubes and tender green peas simmered in a spiced onion-tomato gravy."
  },
  {
    id: "gr-2",
    name: "Kadhai Paneer",
    category: "curries-gravy",
    diet: "veg",
    price: 160,
    special: false,
    bestseller: true,
    desc: "Paneer and bell peppers tossed in thick rustic gravy spiced with freshly roasted coriander and red chilies."
  },
  {
    id: "gr-3",
    name: "Paneer Lababdar",
    category: "curries-gravy",
    diet: "veg",
    price: 180,
    special: true,
    bestseller: true,
    desc: "Rich and luscious gravy prepared with grated and cubed paneer in a mildly spiced cashew-tomato curry."
  },
  {
    id: "gr-4",
    name: "Paneer Butter Masala",
    category: "curries-gravy",
    diet: "veg",
    price: 170,
    special: false,
    bestseller: true,
    desc: "Velvety butter tomato gravy with soft paneer cubes, finished with cream and fenugreek (kasuri methi)."
  },
  {
    id: "gr-5",
    name: "Paneer Bhuna Masala",
    category: "curries-gravy",
    diet: "veg",
    price: 160,
    special: false,
    bestseller: false,
    desc: "Roasted cottage cheese slow-cooked with caramelized onions, whole spices, and thick dry-roasted gravy."
  },
  {
    id: "gr-6",
    name: "Paneer Dopyaaza",
    category: "curries-gravy",
    diet: "veg",
    price: 180,
    special: false,
    bestseller: false,
    desc: "Classic North Indian curry cooked with generous layers of sautéed crunchy onion pearls and paneer."
  },
  {
    id: "gr-7",
    name: "Shahi Paneer",
    category: "curries-gravy",
    diet: "veg",
    price: 180,
    special: true,
    bestseller: true,
    desc: "Royal Mughlai curry crafted with pureed cashews, aromatic saffron, cream, and tender paneer."
  },
  {
    id: "gr-8",
    name: "Mushroom Masala",
    category: "curries-gravy",
    diet: "veg",
    price: 200,
    special: false,
    bestseller: false,
    desc: "Fresh button mushrooms cooked in a flavorful spiced onion, tomato, and garam masala curry."
  },
  {
    id: "gr-9",
    name: "Mushroom Malai Masala",
    category: "curries-gravy",
    diet: "veg",
    price: 200,
    special: true,
    bestseller: true,
    desc: "Rich and velvety fresh cream and cashew gravy infused with juicy sautéed button mushrooms."
  },

  // --- CHINESE GRAVY (Page 11) ---
  {
    id: "ch-1",
    name: "Veg. Manchurian (Gravy)",
    category: "curries-gravy",
    diet: "veg",
    price: 150,
    special: false,
    bestseller: true,
    desc: "Crispy fried vegetable dumplings simmered in savory dark soy, ginger, and garlic Manchurian gravy."
  },
  {
    id: "ch-2",
    name: "Chilli Paneer (Gravy)",
    category: "curries-gravy",
    diet: "veg",
    price: 130,
    special: false,
    bestseller: true,
    desc: "Soft cottage cheese chunks simmered with diced bell peppers in tangy, spicy chili-garlic soy gravy."
  },
  {
    id: "ch-3",
    name: "Chicken Manchurian (Gravy)",
    category: "curries-gravy",
    diet: "nonveg",
    price: 190,
    special: false,
    bestseller: true,
    desc: "Juicy chicken meatballs cooked in a luscious Indo-Chinese soy, scallion, and coriander sauce."
  },
  {
    id: "ch-4",
    name: "Prawn Manchurian (Gravy)",
    category: "curries-gravy",
    diet: "nonveg",
    price: 250,
    special: true,
    bestseller: false,
    desc: "Tender prawns cooked in a zesty, flavorful dark Chinese Manchurian gravy."
  },
  {
    id: "ch-5",
    name: "Chilli Chicken (Gravy)",
    category: "curries-gravy",
    diet: "nonveg",
    price: 230,
    special: true,
    bestseller: true,
    desc: "All-time favorite tender chicken chunks with capsicum and green chilies in spicy garlic-soy gravy."
  },

  // --- COFFEE & TEA (Page 11) ---
  {
    id: "cf-1",
    name: "Hot Coffee",
    category: "beverages",
    diet: "veg",
    price: 60,
    special: false,
    bestseller: false,
    desc: "Freshly brewed steaming cup of aromatic coffee with frothed milk."
  },
  {
    id: "cf-2",
    name: "Black Coffee",
    category: "beverages",
    diet: "veg",
    price: 60,
    special: false,
    bestseller: false,
    desc: "Rich and bold dark roast espresso brew served hot without milk."
  },
  {
    id: "cf-3",
    name: "Latte",
    category: "beverages",
    diet: "veg",
    price: 80,
    special: false,
    bestseller: true,
    desc: "Smooth espresso shot balanced with silky steamed milk and subtle froth layer."
  },
  {
    id: "cf-4",
    name: "Cappuccino",
    category: "beverages",
    diet: "veg",
    price: 80,
    special: false,
    bestseller: true,
    desc: "Equal parts bold espresso, velvety steamed milk, and thick frothy crown dusted with cocoa."
  },
  {
    id: "cf-5",
    name: "Cold Coffee",
    category: "beverages",
    diet: "veg",
    price: 100,
    special: true,
    bestseller: true,
    desc: "Chilled thick blended coffee shake topped with chocolate drizzle and vanilla cream."
  },

  // --- LASSI & MILKSHAKE (Page 12) ---
  {
    id: "ls-1",
    name: "Plain Lassi",
    category: "beverages",
    diet: "veg",
    price: 80,
    special: false,
    bestseller: false,
    desc: "Traditional sweet churned yogurt cooler flavored with cardamom and rose water."
  },
  {
    id: "ls-2",
    name: "Mango Lassi",
    category: "beverages",
    diet: "veg",
    price: 120,
    special: true,
    bestseller: true,
    desc: "Thick creamy yogurt blended with sweet Alphonso mango pulp and saffron."
  },
  {
    id: "ms-1",
    name: "Banana Shake",
    category: "beverages",
    diet: "veg",
    price: 100,
    special: false,
    bestseller: false,
    desc: "Creamy fresh banana milkshake blended with chilled milk and honey."
  },
  {
    id: "ms-2",
    name: "Mango Shake",
    category: "beverages",
    diet: "veg",
    price: 130,
    special: false,
    bestseller: true,
    desc: "Luscious mango milkshake made with rich mango puree and chilled whole milk."
  },
  {
    id: "ms-3",
    name: "Dry Fruit Shake",
    category: "beverages",
    diet: "veg",
    price: 120,
    special: true,
    bestseller: true,
    desc: "Nutrient-packed shake loaded with crushed almonds, cashews, pistachios, dates, and cardamom."
  },
  {
    id: "ms-4",
    name: "Oreo Chocolate Shake",
    category: "beverages",
    diet: "veg",
    price: 120,
    special: true,
    bestseller: true,
    desc: "Decadent thick shake blended with Oreo cookies, chocolate fudge syrup, and cream."
  },
  {
    id: "ms-5",
    name: "Peanut Butter Shake",
    category: "beverages",
    diet: "veg",
    price: 120,
    special: false,
    bestseller: false,
    desc: "Rich and nutty shake blended with smooth roasted peanut butter and dairy milk."
  },

  // --- FRESH JUICE (Page 12) ---
  {
    id: "fj-1",
    name: "Fresh Lime",
    category: "beverages",
    diet: "veg",
    price: 60,
    special: false,
    bestseller: false,
    desc: "Refreshing freshly squeezed lemon juice with mint and ice water."
  },
  {
    id: "fj-2",
    name: "Fresh Lime Soda",
    category: "beverages",
    diet: "veg",
    price: 80,
    special: false,
    bestseller: true,
    desc: "Sparkling soda with fresh lime juice, choice of sweet, salted, or mixed."
  },
  {
    id: "fj-3",
    name: "Watermelon Juice",
    category: "beverages",
    diet: "veg",
    price: 90,
    special: false,
    bestseller: true,
    desc: "100% pure hydrating freshly extracted sweet watermelon juice served chilled."
  },
  {
    id: "fj-4",
    name: "Mosambi Juice",
    category: "beverages",
    diet: "veg",
    price: 120,
    special: false,
    bestseller: false,
    desc: "Freshly squeezed sweet lime juice packed with Vitamin C and natural citrus zest."
  },
  {
    id: "fj-5",
    name: "Fresh Mango Juice",
    category: "beverages",
    diet: "veg",
    price: 120,
    special: false,
    bestseller: true,
    desc: "Sweet, refreshing chilled mango juice extracted from ripe golden mangoes."
  },

  // --- MOJITO & MOCKTAILS (Page 13) ---
  {
    id: "mj-1",
    name: "Vergin Mojito",
    category: "beverages",
    diet: "veg",
    price: 80,
    special: false,
    bestseller: true,
    desc: "Classic refresher with crushed mint leaves, fresh lime wedges, simple syrup, and fizzy soda."
  },
  {
    id: "mj-2",
    name: "Chilli Guava Mojito",
    category: "beverages",
    diet: "veg",
    price: 90,
    special: true,
    bestseller: true,
    desc: "Tropical pink guava nectar with a spicy chili-salt rim and fizzy lime soda."
  },
  {
    id: "mj-3",
    name: "Blueberry Mojiti",
    category: "beverages",
    diet: "veg",
    price: 90,
    special: false,
    bestseller: true,
    desc: "Wild blueberry infusion, fresh mint sprigs, lime juice, and sparkling club soda."
  },
  {
    id: "mj-4",
    name: "Strawberry Mojito",
    category: "beverages",
    diet: "veg",
    price: 80,
    special: false,
    bestseller: false,
    desc: "Sweet strawberry crush muddled with mint leaves and chilled sparkling soda."
  },
  {
    id: "mj-5",
    name: "Mango Mojito",
    category: "beverages",
    diet: "veg",
    price: 90,
    special: false,
    bestseller: false,
    desc: "Tropical ripe mango pulp shaken with mint, lime, and crisp bubbly soda."
  },
  {
    id: "mj-6",
    name: "Green Apple Mocktail",
    category: "beverages",
    diet: "veg",
    price: 90,
    special: false,
    bestseller: false,
    desc: "Crisp tangy green apple cooler topped with mint leaves and sparkling soda."
  },
  {
    id: "mj-7",
    name: "Blue Curacao Mocktail",
    category: "beverages",
    diet: "veg",
    price: 100,
    special: true,
    bestseller: true,
    desc: "Vibrant electric blue citrus mocktail served over crushed ice with a lemon wheel."
  },

  // --- DESSERT (Page 13) ---
  {
    id: "ds-1",
    name: "Ice Cream",
    category: "desserts",
    diet: "veg",
    price: 60,
    special: false,
    bestseller: true,
    desc: "Rich and creamy dessert ice cream scoop (choice of Vanilla, Chocolate, or Butterscotch)."
  },
  {
    id: "ds-2",
    name: "Gulab Jamun (2 pcs)",
    category: "desserts",
    diet: "veg",
    price: 40,
    special: true,
    bestseller: true,
    desc: "Warm melt-in-the-mouth soft milk dumplings soaked in aromatic cardamom and rose sugar syrup."
  },

  // --- DRINKS (Page 13) ---
  {
    id: "dr-1",
    name: "Regular Cold Drink",
    category: "beverages",
    diet: "veg",
    price: 40,
    special: false,
    bestseller: false,
    desc: "Chilled carbonated soft drink bottle/can (Coke, Thums Up, Sprite)."
  },
  {
    id: "dr-2",
    name: "Masala Cold Drink",
    category: "beverages",
    diet: "veg",
    price: 50,
    special: true,
    bestseller: true,
    desc: "Chilled cola enhanced with roasted cumin, chaat masala, and a splash of fresh lemon."
  },
  {
    id: "dr-3",
    name: "Packaged Drinking Water",
    category: "beverages",
    diet: "veg",
    price: 20,
    special: false,
    bestseller: false,
    desc: "Sealed hygienic packaged mineral water bottle (MRP)."
  }
];

// Popular times simulated data for Sribhumi
const POPULAR_TIMES_DATA = {
  Mon: [15, 20, 35, 45, 60, 55, 75, 80, 70, 40],
  Tue: [15, 25, 40, 50, 65, 60, 70, 75, 65, 35],
  Wed: [20, 30, 45, 55, 65, 65, 80, 85, 75, 40],
  Thu: [20, 30, 40, 50, 70, 65, 80, 85, 70, 45],
  Fri: [25, 40, 55, 65, 80, 85, 95, 100, 90, 55],
  Sat: [35, 55, 70, 80, 90, 95, 100, 100, 95, 60],
  Sun: [40, 60, 75, 85, 95, 95, 100, 95, 85, 50]
};

const TIME_LABELS = ["11a", "12p", "1p", "3p", "5p", "6p", "7p", "8p", "9p", "10p"];

// Built-in Curated Gallery Items
const DEFAULT_GALLERY_ITEMS = [
  {
    id: "g-hero",
    src: "images/hero_cafe.jpg",
    title: "Cinnamon Cafe Dining Hall & Warm Ambiance",
    caption: "Aesthetic wooden interiors, warm mood lighting, and comfortable dining booths.",
    category: "ambiance",
    isOwnerUpload: false
  },
  {
    id: "g-pasta",
    src: "images/signature_pasta.jpg",
    title: "Gourmet White Sauce Pasta (₹120)",
    caption: "Velvety cheese cream sauce with garden vegetables and toasted garlic bread.",
    category: "food",
    isOwnerUpload: false
  },
  {
    id: "g-coffee",
    src: "images/specialty_coffee.jpg",
    title: "Artisan Cappuccino & Latte Brews",
    caption: "Freshly roasted espresso with velvety microfoam and rich aroma.",
    category: "food",
    isOwnerUpload: false
  },
  {
    id: "g-party",
    src: "images/party_celebration.jpg",
    title: "Festive Kids' Birthday & Anniversary Zone",
    caption: "Vibrant party balloon decor, customized lighting, and festive table arrangements.",
    category: "events",
    isOwnerUpload: false
  },
  {
    id: "g-sizzler",
    src: "images/sizzler_platter.jpg",
    title: "Hot Chinese & Continental Delicacies",
    caption: "Steaming hot dishes prepared fresh by Cinnamon Cafe culinary masters.",
    category: "food",
    isOwnerUpload: false
  },
  {
    id: "g-burger",
    src: "images/burger_fastbites.jpg",
    title: "Crispy Fried Chicken Burger & French Fries",
    caption: "Crisp toasted sesame bun, fried chicken fillet, cheese, and seasoned fries.",
    category: "food",
    isOwnerUpload: false
  },
  {
    id: "g-dessert",
    src: "images/dessert_delights.jpg",
    title: "Gulab Jamun & Sweet Desserts",
    caption: "Warm soft gulab jamuns and decadent ice creams to finish your meal.",
    category: "food",
    isOwnerUpload: false
  },
  // Authentic Menu Book Page Scans
  {
    id: "g-menu-1",
    src: "unnamed.webp",
    title: "Menu Card - Momo, Burgers & Sandwiches (Page 02)",
    caption: "Authentic printed menu featuring Steam, Fried & Kurkure Momos and Sandwiches.",
    category: "menu-cards",
    isOwnerUpload: false
  },
  {
    id: "g-menu-2",
    src: "unnamed (2).webp",
    title: "Menu Card - Kati Rolls & Pizzas (Page 03)",
    caption: "Authentic printed menu featuring Kati Rolls and Margherita to Cinnamon Special Pizza.",
    category: "menu-cards",
    isOwnerUpload: false
  },
  {
    id: "g-menu-3",
    src: "unnamed (5).webp",
    title: "Menu Card - Noodles & Pastas (Page 04)",
    caption: "Authentic printed menu with Schezwan, Hakka, Butter Garlic Noodles and Pasta.",
    category: "menu-cards",
    isOwnerUpload: false
  },
  {
    id: "g-menu-4",
    src: "unnamed (8).webp",
    title: "Menu Card - Veg Starters (Page 05)",
    caption: "Authentic printed menu with Paneer Tikka, Peri Peri Fries, and Honey Glazed Paneer.",
    category: "menu-cards",
    isOwnerUpload: false
  },
  {
    id: "g-menu-5",
    src: "unnamed (6).webp",
    title: "Menu Card - Fish, Prawn & Soups (Page 07)",
    caption: "Authentic printed menu with Fish Finger, Chilli Prawns, and Hot & Sour Soups.",
    category: "menu-cards",
    isOwnerUpload: false
  },
  {
    id: "g-menu-6",
    src: "unnamed (1).webp",
    title: "Menu Card - Indian Bread & Fried Rice (Page 08)",
    caption: "Authentic printed menu with Tandoori Naan, Roti, and Fried Rice varieties.",
    category: "menu-cards",
    isOwnerUpload: false
  },
  {
    id: "g-menu-7",
    src: "unnamed (7).webp",
    title: "Menu Card - Biryani & Indian Veg Gravy (Page 09)",
    caption: "Authentic printed menu with Chicken/Mutton Biryanis and Rich Paneer Gravies.",
    category: "menu-cards",
    isOwnerUpload: false
  },
  {
    id: "g-menu-8",
    src: "unnamed (9).webp",
    title: "Menu Card - Chinese Gravy, Coffee & Tea (Page 11)",
    caption: "Authentic printed menu with Manchurian, Chilli Chicken, and Artisan Coffees.",
    category: "menu-cards",
    isOwnerUpload: false
  },
  {
    id: "g-menu-9",
    src: "unnamed (4).webp",
    title: "Menu Card - Lassi, Milkshakes & Fresh Juices (Page 12)",
    caption: "Authentic printed menu with Shakes, Lassi, and Fresh Cold-Pressed Juices.",
    category: "menu-cards",
    isOwnerUpload: false
  },
  {
    id: "g-menu-10",
    src: "unnamed (3).webp",
    title: "Menu Card - Mojitos, Mocktails & Desserts (Page 13)",
    caption: "Authentic printed menu with Virgin Mojitos, Mocktails, Ice Cream & Desserts.",
    category: "menu-cards",
    isOwnerUpload: false
  }
];

// ==========================================================================
// 2. STATE MANAGEMENT
// ==========================================================================
let currentCategory = "all";
let currentDiet = "all";
let searchQuery = "";
let cart = JSON.parse(localStorage.getItem("cinnamon_cart") || "[]");

// ==========================================================================
// 3. INITIALIZATION ON DOM READY
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderMenu();
  setupMenuControls();
  setupCart();
  setupPopularTimes();
  setupReviews();
  renderGallery();
  setupGalleryTabs();
  setupGalleryLightbox();
  setupOwnerPhotoStudio();
  setupNavigation();
  updateLiveHoursStatus();
});

// ==========================================================================
// 4. DAY / NIGHT MOOD TOGGLE
// ==========================================================================
function initTheme() {
  const savedTheme = localStorage.getItem("cinnamon_theme") || "evening";
  setTheme(savedTheme);

  const moodToggleBtn = document.getElementById("moodToggleBtn");
  if (moodToggleBtn) {
    moodToggleBtn.addEventListener("click", () => {
      const current = document.body.getAttribute("data-theme");
      const next = current === "day" ? "evening" : "day";
      setTheme(next);
      showToast(`Switched to ${next === 'day' ? '☀️ Daytime Cafe Vibe' : '🌙 Evening Restro Vibe'}`);
    });
  }
}

function setTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("cinnamon_theme", theme);
  const moodLabel = document.getElementById("moodLabel");
  const moodBtn = document.getElementById("moodToggleBtn");
  
  if (moodLabel && moodBtn) {
    if (theme === "day") {
      moodLabel.textContent = "Daytime Cafe";
      moodBtn.innerHTML = '<i class="fa-solid fa-sun"></i> <span>Daytime Cafe</span>';
    } else {
      moodLabel.textContent = "Evening Restro";
      moodBtn.innerHTML = '<i class="fa-solid fa-moon"></i> <span>Evening Restro</span>';
    }
  }
}

// ==========================================================================
// 5. MENU RENDERING & FILTERING
// ==========================================================================
function renderMenu() {
  const grid = document.getElementById("menuGrid");
  if (!grid) return;

  const filtered = MENU_ITEMS.filter(item => {
    // Category match
    const matchCategory = currentCategory === "all" || item.category === currentCategory;
    
    // Diet match
    let matchDiet = true;
    if (currentDiet === "veg") matchDiet = item.diet === "veg";
    else if (currentDiet === "nonveg") matchDiet = item.diet === "nonveg";
    else if (currentDiet === "special") matchDiet = item.special === true;

    // Search match
    const matchSearch = searchQuery === "" || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.desc.toLowerCase().includes(searchQuery.toLowerCase());

    return matchCategory && matchDiet && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
        <i class="fa-solid fa-magnifying-glass" style="font-size: 2.5rem; color: var(--cinnamon); margin-bottom: 1rem;"></i>
        <h3 style="color: var(--text-primary); margin-bottom: 0.5rem;">No Dishes Found</h3>
        <p style="color: var(--text-secondary);">Try adjusting your search terms or dietary filters.</p>
        <button class="btn btn-outline btn-sm" style="margin-top: 1rem;" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const isVeg = item.diet === "veg";
    const dietIcon = isVeg 
      ? '<span style="color: #10b981;" title="Vegetarian"><i class="fa-solid fa-circle-dot"></i></span>'
      : '<span style="color: #ef4444;" title="Non-Vegetarian"><i class="fa-solid fa-square-caret-up"></i></span>';
    
    const specialBadge = item.special 
      ? '<span class="badge-tag" style="font-size:0.65rem;"><i class="fa-solid fa-star"></i> Chef Choice</span>' 
      : '';
    const bestsellerBadge = item.bestseller 
      ? '<span class="badge-tag" style="background: rgba(239, 68, 68, 0.2); color: #f87171; border-color: rgba(239,68,68,0.3); font-size:0.65rem;"><i class="fa-solid fa-fire"></i> Popular</span>' 
      : '';

    return `
      <div class="menu-card" data-id="${item.id}">
        <div>
          <div class="menu-card-top">
            <h4 class="menu-dish-title">
              ${dietIcon} ${item.name}
            </h4>
            <span class="menu-dish-price">₹${item.price}</span>
          </div>
          <p class="menu-dish-desc">${item.desc}</p>
        </div>

        <div class="menu-card-bottom">
          <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
            ${specialBadge}
            ${bestsellerBadge}
          </div>
          <button class="btn btn-sm btn-primary add-to-plate-btn" data-id="${item.id}" data-name="${escapeHtml(item.name)}" data-price="${item.price}" data-category="${item.category}">
            <i class="fa-solid fa-plus"></i> Add
          </button>
        </div>
      </div>
    `;
  }).join("");

  // Attach click events to Add buttons
  grid.querySelectorAll(".add-to-plate-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      const name = btn.getAttribute("data-name");
      const price = parseFloat(btn.getAttribute("data-price"));
      const category = btn.getAttribute("data-category");
      addToCart(id, name, price, category);
    });
  });
}

function setupMenuControls() {
  // Category tabs
  const catTabs = document.querySelectorAll(".cat-tab");
  catTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      catTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentCategory = tab.getAttribute("data-category");
      renderMenu();
    });
  });

  // Dietary buttons
  const dietBtns = document.querySelectorAll(".diet-btn");
  dietBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      dietBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentDiet = btn.getAttribute("data-diet");
      renderMenu();
    });
  });

  // Search input
  const searchInput = document.getElementById("menuSearchInput");
  const clearBtn = document.getElementById("clearSearchBtn");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      if (clearBtn) {
        clearBtn.style.display = searchQuery ? "block" : "none";
      }
      renderMenu();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchQuery = "";
      clearBtn.style.display = "none";
      renderMenu();
      searchInput.focus();
    });
  }

  // Hook for Signature dishes add to cart buttons
  document.querySelectorAll(".signature-dishes-section .add-to-plate-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      const name = btn.getAttribute("data-name");
      const price = parseFloat(btn.getAttribute("data-price"));
      const category = btn.getAttribute("data-category");
      addToCart(id, name, price, category);
    });
  });

  // Day vibe quick filter button
  const exploreCafeDrinksBtn = document.getElementById("exploreCafeDrinksBtn");
  if (exploreCafeDrinksBtn) {
    exploreCafeDrinksBtn.addEventListener("click", () => {
      window.location.hash = "#menu";
      const coffeeTab = document.querySelector('.cat-tab[data-category="beverages"]');
      if (coffeeTab) coffeeTab.click();
    });
  }
}

window.filterMenuCategory = function(categoryKey) {
  const tab = document.querySelector(`.cat-tab[data-category="${categoryKey}"]`);
  if (tab) tab.click();
  window.location.hash = "#menu";
};

window.resetFilters = function() {
  currentCategory = "all";
  currentDiet = "all";
  searchQuery = "";
  document.querySelectorAll(".cat-tab").forEach(t => t.classList.toggle("active", t.getAttribute("data-category") === "all"));
  document.querySelectorAll(".diet-btn").forEach(b => b.classList.toggle("active", b.getAttribute("data-diet") === "all"));
  const sInput = document.getElementById("menuSearchInput");
  if (sInput) sInput.value = "";
  renderMenu();
};

// ==========================================================================
// 6. ORDER PLATE / CART MANAGEMENT
// ==========================================================================
function setupCart() {
  updateCartBadges();

  const cartToggleBtn = document.getElementById("cartToggleBtn");
  const fabCartBtn = document.getElementById("fabCartBtn");
  const openCartFromMenuBtn = document.getElementById("openCartFromMenuBtn");
  const closeCartModalBtn = document.getElementById("closeCartModalBtn");
  const clearCartBtn = document.getElementById("clearCartBtn");
  const sendWhatsAppOrderBtn = document.getElementById("sendWhatsAppOrderBtn");
  const cartModal = document.getElementById("cartModal");

  const openModal = () => {
    renderCartModal();
    if (cartModal) cartModal.classList.add("active");
  };

  const closeModal = () => {
    if (cartModal) cartModal.classList.remove("active");
  };

  if (cartToggleBtn) cartToggleBtn.addEventListener("click", openModal);
  if (fabCartBtn) fabCartBtn.addEventListener("click", openModal);
  if (openCartFromMenuBtn) openCartFromMenuBtn.addEventListener("click", openModal);
  if (closeCartModalBtn) closeCartModalBtn.addEventListener("click", closeModal);

  if (cartModal) {
    cartModal.addEventListener("click", (e) => {
      if (e.target === cartModal) closeModal();
    });
  }

  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      if (cart.length === 0) return;
      if (confirm("Clear all items from your plate?")) {
        cart = [];
        saveCart();
        renderCartModal();
        showToast("Order plate cleared");
      }
    });
  }

  if (sendWhatsAppOrderBtn) {
    sendWhatsAppOrderBtn.addEventListener("click", generateWhatsAppOrder);
  }
}

function addToCart(id, name, price, category) {
  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, name, price, category, qty: 1 });
  }
  saveCart();
  showToast(`Added "${name}" to plate! 🍽️`);
}

function updateCartQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id);
  }
  saveCart();
  renderCartModal();
}

function saveCart() {
  localStorage.setItem("cinnamon_cart", JSON.stringify(cart));
  updateCartBadges();
}

function updateCartBadges() {
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const cartCountEl = document.getElementById("cartCount");
  const fabCartCountEl = document.getElementById("fabCartCount");
  const cartCountBannerEl = document.getElementById("cartCountBanner");

  if (cartCountEl) cartCountEl.textContent = totalCount;
  if (fabCartCountEl) fabCartCountEl.textContent = totalCount;
  if (cartCountBannerEl) cartCountBannerEl.textContent = totalCount;
}

function renderCartModal() {
  const container = document.getElementById("cartItemsContainer");
  const subtotalEl = document.getElementById("cartSubtotal");
  const totalEl = document.getElementById("cartTotal");
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: var(--text-muted);">
        <i class="fa-solid fa-utensils" style="font-size: 2rem; margin-bottom: 0.5rem; color: var(--cinnamon);"></i>
        <p>Your plate is empty!</p>
        <p style="font-size: 0.8rem; margin-top: 0.25rem;">Explore our menu and add your favorite dishes.</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = "₹0";
    if (totalEl) totalEl.textContent = "₹0";
    return;
  }

  let subtotal = 0;
  container.innerHTML = cart.map(item => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;
    return `
      <div class="cart-item-row">
        <div class="cart-item-info">
          <strong>${item.name}</strong>
          <span>₹${item.price} each = ₹${itemTotal}</span>
        </div>
        <div class="cart-qty-controls">
          <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', -1)">-</button>
          <span style="font-weight:700; min-width:18px; text-align:center;">${item.qty}</span>
          <button class="cart-qty-btn" onclick="updateCartQty('${item.id}', 1)">+</button>
        </div>
      </div>
    `;
  }).join("");

  if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
  if (totalEl) totalEl.textContent = `₹${subtotal}`;
}

window.updateCartQty = updateCartQty;

function generateWhatsAppOrder() {
  if (cart.length === 0) {
    alert("Please add at least one item to your plate before sending.");
    return;
  }

  const nameInput = document.getElementById("cartCustomerName");
  const tableOrAddressInput = document.getElementById("cartCustomerTableOrAddress");
  const orderTypeRadio = document.querySelector('input[name="orderType"]:checked');

  const customerName = nameInput ? nameInput.value.trim() : "";
  const locationInfo = tableOrAddressInput ? tableOrAddressInput.value.trim() : "";
  const orderType = orderTypeRadio ? orderTypeRadio.value : "Dine-In";

  let totalAmount = 0;
  let itemsListText = "";

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    totalAmount += itemTotal;
    itemsListText += `${index + 1}. ${item.name} x ${item.qty} = ₹${itemTotal}%0A`;
  });

  let message = `*🌟 NEW ORDER - CINNAMON CAFE %26 RESTRO 🌟*%0A%0A`;
  message += `*Order Type:* ${orderType}%0A`;
  if (customerName) message += `*Customer Name:* ${customerName}%0A`;
  if (locationInfo) message += `*Table / Address:* ${locationInfo}%0A`;
  message += `%0A*--- Order Items ---*%0A${itemsListText}`;
  message += `%0A*Total Amount:* ₹${totalAmount}%0A`;
  message += `*Restaurant Contact:* 094018 48694 (Station Rd, Sribhumi)%0A`;
  message += `%0APlease confirm my order and approximate prep time. Thank you!`;

  const waUrl = `https://wa.me/919401848694?text=${message}`;
  window.open(waUrl, "_blank");
}

// ==========================================================================
// 7. POPULAR TIMES CHART
// ==========================================================================
function setupPopularTimes() {
  const container = document.getElementById("ptBarsContainer");
  const dayBtns = document.querySelectorAll(".pt-day-btn");
  if (!container) return;

  const renderDay = (dayKey) => {
    const data = POPULAR_TIMES_DATA[dayKey] || POPULAR_TIMES_DATA["Sat"];
    container.innerHTML = data.map((val, idx) => {
      const isPeak = val >= 80;
      const isCurrentTime = idx === 6; // Evening dinner slot
      return `
        <div class="pt-bar-col" title="${TIME_LABELS[idx]}: ${val}% busy">
          <div class="pt-bar ${isPeak ? 'peak' : ''} ${isCurrentTime ? 'current-hour' : ''}" style="height: ${val}%;"></div>
          <span class="pt-time-lbl">${TIME_LABELS[idx]}</span>
        </div>
      `;
    }).join("");
  };

  dayBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      dayBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderDay(btn.getAttribute("data-day"));
    });
  });

  renderDay("Sat");
}

// ==========================================================================
// 8. REVIEWS SUBMISSION & STAR RATING
// ==========================================================================
function setupReviews() {
  const openAddReviewBtn = document.getElementById("openAddReviewBtn");
  const addReviewModal = document.getElementById("addReviewModal");
  const closeReviewModalBtn = document.getElementById("closeReviewModalBtn");
  const newReviewForm = document.getElementById("newReviewForm");
  const starIcons = document.querySelectorAll("#interactiveStars i");
  const starInput = document.getElementById("selectedStarRating");

  if (openAddReviewBtn && addReviewModal) {
    openAddReviewBtn.addEventListener("click", () => addReviewModal.classList.add("active"));
  }

  if (closeReviewModalBtn && addReviewModal) {
    closeReviewModalBtn.addEventListener("click", () => addReviewModal.classList.remove("active"));
  }

  if (addReviewModal) {
    addReviewModal.addEventListener("click", (e) => {
      if (e.target === addReviewModal) addReviewModal.classList.remove("active");
    });
  }

  // Interactive stars
  starIcons.forEach(star => {
    star.addEventListener("click", () => {
      const rating = parseInt(star.getAttribute("data-rating"));
      if (starInput) starInput.value = rating;
      starIcons.forEach(s => {
        const sRating = parseInt(s.getAttribute("data-rating"));
        s.classList.toggle("active", sRating <= rating);
      });
    });
  });

  // Review Form Submit
  if (newReviewForm) {
    newReviewForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("revAuthorName").value.trim();
      const dish = document.getElementById("revDishMention").value.trim();
      const comment = document.getElementById("revComment").value.trim();
      const rating = starInput ? parseInt(starInput.value) : 5;

      const sliderGrid = document.querySelector(".reviews-slider-grid");
      if (sliderGrid) {
        const newCard = document.createElement("div");
        newCard.className = "review-card";
        let starsHtml = "";
        for (let i = 0; i < rating; i++) starsHtml += '<i class="fa-solid fa-star"></i>';

        newCard.innerHTML = `
          <div class="rev-header">
            <div class="rev-avatar" style="background: linear-gradient(135deg, #10b981, #059669);">${name.charAt(0).toUpperCase()}</div>
            <div class="rev-user">
              <h4>${name}</h4>
              <span class="rev-source"><i class="fa-solid fa-check-circle text-success"></i> Customer Review</span>
            </div>
            <div class="rev-stars">${starsHtml}</div>
          </div>
          <p class="rev-body">"${comment}"</p>
          <div class="rev-footer">
            <span class="rev-date">${dish ? dish : 'Dine-in'} · Just Now</span>
            <span class="rev-verified"><i class="fa-solid fa-circle-check"></i> Verified Diner</span>
          </div>
        `;
        sliderGrid.prepend(newCard);
      }

      showToast("Thank you for your review! ⭐⭐⭐⭐⭐");
      newReviewForm.reset();
      if (addReviewModal) addReviewModal.classList.remove("active");
    });
  }
}

// ==========================================================================
// 9. PHOTO GALLERY & RESTAURANT OWNER STUDIO
// ==========================================================================
let currentGalleryCat = "all";
let selectedImageDataUrl = null;
let ownerAuthUnlocked = false;

function getOwnerPhotos() {
  try {
    return JSON.parse(localStorage.getItem("cinnamon_owner_photos") || "[]");
  } catch (e) {
    console.error("Error reading owner photos from storage", e);
    return [];
  }
}

function saveOwnerPhotos(photos) {
  try {
    localStorage.setItem("cinnamon_owner_photos", JSON.stringify(photos));
  } catch (e) {
    console.error("Error saving owner photos", e);
    showToast("Storage limit exceeded. Try deleting older photos or uploading smaller images.");
  }
}

function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;

  const ownerPhotos = getOwnerPhotos();
  // Combine owner uploads first, followed by built-in curated photos
  const allPhotos = [...ownerPhotos, ...DEFAULT_GALLERY_ITEMS];

  let filtered = allPhotos;
  if (currentGalleryCat === "owner") {
    filtered = allPhotos.filter(item => item.isOwnerUpload);
  } else if (currentGalleryCat !== "all") {
    filtered = allPhotos.filter(item => item.category === currentGalleryCat);
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border-color);">
        <i class="fa-solid fa-camera" style="font-size: 2.5rem; color: var(--cinnamon); margin-bottom: 1rem;"></i>
        <h3 style="color: var(--text-primary); margin-bottom: 0.5rem;">No Photos in this Category Yet</h3>
        <p style="color: var(--text-secondary); max-width: 450px; margin: 0 auto 1.25rem;">
          ${currentGalleryCat === 'owner' ? 'The restaurant owner has not added custom photos yet. Click below to upload your restaurant photos!' : 'Be the first to add a snapshot in this category.'}
        </p>
        <button class="btn btn-primary btn-sm" onclick="document.getElementById('openOwnerUploadBtn')?.click()">
          <i class="fa-solid fa-cloud-arrow-up"></i> Owner: Upload Restaurant Photo
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const ownerBadge = item.isOwnerUpload 
      ? '<span class="badge-owner-tag"><i class="fa-solid fa-crown"></i> Owner Photo</span>' 
      : '';
    
    return `
      <div class="gallery-item" data-src="${item.src}" data-title="${escapeHtml(item.title)}" data-caption="${escapeHtml(item.caption || '')}">
        <img src="${item.src}" alt="${escapeHtml(item.title)}" loading="lazy">
        ${ownerBadge}
        <div class="gallery-overlay">
          <i class="fa-solid fa-magnifying-glass-plus"></i>
          <h4>${escapeHtml(item.title)}</h4>
          <span>${escapeHtml(item.caption || '')}</span>
        </div>
      </div>
    `;
  }).join("");

  // Re-attach lightbox handlers to newly rendered gallery items
  attachGalleryLightboxEvents();
}

function setupGalleryTabs() {
  const tabs = document.querySelectorAll(".g-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentGalleryCat = tab.getAttribute("data-gcat") || "all";
      renderGallery();
    });
  });
}

function attachGalleryLightboxEvents() {
  const lightbox = document.getElementById("imageLightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      const src = item.getAttribute("data-src");
      const title = item.getAttribute("data-title");
      const caption = item.getAttribute("data-caption");
      if (lightboxImg) lightboxImg.src = src;
      if (lightboxTitle) lightboxTitle.innerHTML = `<strong>${title}</strong>${caption ? `<br><span style="font-size:0.85rem; font-weight:normal; opacity:0.85; display:block; margin-top:4px;">${caption}</span>` : ''}`;
      if (lightbox) lightbox.classList.add("active");
    });
  });
}

function setupGalleryLightbox() {
  const lightbox = document.getElementById("imageLightbox");
  const closeBtn = document.getElementById("closeLightboxBtn");

  const closeLightbox = () => {
    if (lightbox) lightbox.classList.remove("active");
  };

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // Allow closing any modal, drawer, or lightbox via Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLightbox();
      const ownerModal = document.getElementById("ownerUploadModal");
      if (ownerModal) ownerModal.classList.remove("active");
      const cartModal = document.getElementById("cartModal");
      if (cartModal) cartModal.classList.remove("active");
      const reviewModal = document.getElementById("addReviewModal");
      if (reviewModal) reviewModal.classList.remove("active");
      const drawer = document.getElementById("mobileDrawer");
      if (drawer) drawer.classList.remove("open");
    }
  });
}

// ==========================================================================
// 10. RESTAURANT OWNER STUDIO CONTROLS & PHOTO UPLOAD
// ==========================================================================
function setupOwnerPhotoStudio() {
  const modal = document.getElementById("ownerUploadModal");
  const openBtn = document.getElementById("openOwnerUploadBtn");
  const topOwnerBtn = document.getElementById("topOwnerUploadBtn");
  const footerOwnerBtn = document.getElementById("footerOwnerUploadBtn");
  const closeBtn = document.getElementById("closeOwnerModalBtn");
  const pinForm = document.getElementById("ownerPinForm");
  const pinInput = document.getElementById("ownerPinInput");
  const quickDemoBtn = document.getElementById("quickOwnerDemoBtn");
  const authScreen = document.getElementById("ownerAuthScreen");
  const studioScreen = document.getElementById("ownerStudioScreen");

  const tabUploadNew = document.getElementById("tabUploadNew");
  const tabManagePhotos = document.getElementById("tabManagePhotos");
  const panelUploadNew = document.getElementById("panelUploadNew");
  const panelManagePhotos = document.getElementById("panelManagePhotos");

  const dropzone = document.getElementById("ownerDropzone");
  const fileInput = document.getElementById("ownerFileInput");
  const previewCard = document.getElementById("uploadPreviewCard");
  const previewImg = document.getElementById("uploadPreviewImg");
  const previewFileName = document.getElementById("previewFileName");
  const previewFileSize = document.getElementById("previewFileSize");
  const btnRemovePreview = document.getElementById("btnRemovePreview");
  const uploadForm = document.getElementById("ownerUploadForm");

  const openModal = () => {
    if (modal) modal.classList.add("active");
    if (ownerAuthUnlocked) {
      if (authScreen) authScreen.style.display = "none";
      if (studioScreen) studioScreen.style.display = "block";
      renderManagePhotos();
    } else {
      if (authScreen) authScreen.style.display = "block";
      if (studioScreen) studioScreen.style.display = "none";
      if (pinInput) {
        pinInput.value = "";
        setTimeout(() => pinInput.focus(), 150);
      }
    }
  };

  const closeModal = () => {
    if (modal) modal.classList.remove("active");
  };

  if (openBtn) openBtn.addEventListener("click", openModal);
  if (topOwnerBtn) topOwnerBtn.addEventListener("click", openModal);
  if (footerOwnerBtn) footerOwnerBtn.addEventListener("click", openModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Owner PIN Validation
  const unlockStudio = () => {
    ownerAuthUnlocked = true;
    if (authScreen) authScreen.style.display = "none";
    if (studioScreen) studioScreen.style.display = "block";
    renderManagePhotos();
    showToast("👑 Owner Studio Unlocked! Welcome.");
  };

  if (pinForm) {
    pinForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const enteredPin = pinInput ? pinInput.value.trim() : "";
      if (enteredPin === "1234" || enteredPin === "admin" || enteredPin === "0940") {
        unlockStudio();
      } else {
        showToast("❌ Incorrect PIN. Please enter default PIN '1234'.");
        if (pinInput) {
          pinInput.value = "";
          pinInput.focus();
        }
      }
    });
  }

  if (quickDemoBtn) {
    quickDemoBtn.addEventListener("click", () => {
      if (pinInput) pinInput.value = "1234";
      unlockStudio();
    });
  }

  // Tab switching inside studio
  if (tabUploadNew && tabManagePhotos) {
    tabUploadNew.addEventListener("click", () => {
      tabUploadNew.classList.add("active");
      tabManagePhotos.classList.remove("active");
      if (panelUploadNew) panelUploadNew.style.display = "block";
      if (panelManagePhotos) panelManagePhotos.style.display = "none";
    });

    tabManagePhotos.addEventListener("click", () => {
      tabManagePhotos.classList.add("active");
      tabUploadNew.classList.remove("active");
      if (panelUploadNew) panelUploadNew.style.display = "none";
      if (panelManagePhotos) panelManagePhotos.style.display = "block";
      renderManagePhotos();
    });
  }

  // Dropzone and file selection
  if (dropzone && fileInput) {
    dropzone.addEventListener("click", () => fileInput.click());

    dropzone.addEventListener("dragover", (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.add("dragover");
    });

    dropzone.addEventListener("dragleave", (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.remove("dragover");
    });

    dropzone.addEventListener("drop", (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.remove("dragover");
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        processSelectedFile(e.dataTransfer.files[0]);
      }
    });

    fileInput.addEventListener("change", () => {
      if (fileInput.files && fileInput.files.length > 0) {
        processSelectedFile(fileInput.files[0]);
      }
    });
  }

  function processSelectedFile(file) {
    if (!file.type.startsWith("image/")) {
      showToast("⚠️ Please choose an image file (JPG, PNG, or WebP).");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const rawDataUrl = event.target.result;
      // Compress and optimize image for smooth web display and localStorage efficiency
      compressImage(rawDataUrl, 1200, 900, 0.82).then((compressedDataUrl) => {
        selectedImageDataUrl = compressedDataUrl;
        if (previewImg) previewImg.src = compressedDataUrl;
        if (previewFileName) previewFileName.textContent = file.name;
        if (previewFileSize) previewFileSize.textContent = formatBytes(file.size);
        if (previewCard) previewCard.style.display = "flex";
        if (dropzone) dropzone.style.display = "none";
      });
    };
    reader.readAsDataURL(file);
  }

  if (btnRemovePreview) {
    btnRemovePreview.addEventListener("click", () => {
      selectedImageDataUrl = null;
      if (fileInput) fileInput.value = "";
      if (previewCard) previewCard.style.display = "none";
      if (dropzone) dropzone.style.display = "block";
    });
  }

  // Upload Form Submit
  if (uploadForm) {
    uploadForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!selectedImageDataUrl) {
        showToast("⚠️ Please select or drop a restaurant photo to upload.");
        return;
      }

      const titleInput = document.getElementById("photoTitle");
      const categorySelect = document.getElementById("photoCategory");
      const captionInput = document.getElementById("photoCaption");

      const title = titleInput ? titleInput.value.trim() : "Restaurant Photo";
      const category = categorySelect ? categorySelect.value : "ambiance";
      const caption = captionInput ? captionInput.value.trim() : "Uploaded by owner";

      const newPhoto = {
        id: "owner_" + Date.now() + "_" + Math.random().toString(36).substr(2, 4),
        src: selectedImageDataUrl,
        title: title,
        category: category,
        caption: caption,
        date: new Date().toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" }),
        isOwnerUpload: true
      };

      const ownerPhotos = getOwnerPhotos();
      ownerPhotos.unshift(newPhoto);
      saveOwnerPhotos(ownerPhotos);

      // Reset form & preview
      uploadForm.reset();
      selectedImageDataUrl = null;
      if (fileInput) fileInput.value = "";
      if (previewCard) previewCard.style.display = "none";
      if (dropzone) dropzone.style.display = "block";

      // Refresh gallery and count
      renderGallery();
      renderManagePhotos();

      showToast("🎉 Photo published successfully to live gallery!");
      
      // Close modal and smoothly scroll user to gallery section
      closeModal();
      const gallerySection = document.getElementById("gallery");
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}

function renderManagePhotos() {
  const container = document.getElementById("managePhotosContainer");
  const countBadge = document.getElementById("ownerUploadCount");
  const ownerPhotos = getOwnerPhotos();

  if (countBadge) countBadge.textContent = ownerPhotos.length;
  if (!container) return;

  if (ownerPhotos.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: var(--text-muted);">
        <i class="fa-solid fa-images" style="font-size: 2rem; margin-bottom: 0.5rem; color: var(--cinnamon);"></i>
        <p>No custom owner photos uploaded yet.</p>
        <p style="font-size: 0.8rem; margin-top: 0.25rem;">Switch to the "Upload New Photo" tab to add your first restaurant photo.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = ownerPhotos.map(p => `
    <div class="manage-photo-card" data-id="${p.id}">
      <div class="manage-photo-info">
        <div class="manage-photo-thumb">
          <img src="${p.src}" alt="${escapeHtml(p.title)}">
        </div>
        <div class="manage-photo-text">
          <strong>${escapeHtml(p.title)}</strong>
          <span><i class="fa-solid fa-tag"></i> ${p.category.toUpperCase()} · Added ${p.date || 'Recently'}</span>
        </div>
      </div>
      <button class="btn-delete-uploaded-photo" onclick="deleteOwnerPhoto('${p.id}')">
        <i class="fa-solid fa-trash"></i> Delete
      </button>
    </div>
  `).join("");
}

function deleteOwnerPhoto(id) {
  if (!confirm("Are you sure you want to remove this photo from the restaurant gallery?")) {
    return;
  }
  let ownerPhotos = getOwnerPhotos();
  ownerPhotos = ownerPhotos.filter(p => p.id !== id);
  saveOwnerPhotos(ownerPhotos);
  renderManagePhotos();
  renderGallery();
  showToast("🗑️ Photo removed from gallery.");
}
window.deleteOwnerPhoto = deleteOwnerPhoto;

function compressImage(dataUrl, maxWidth, maxHeight, quality) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      let width = img.width;
      let height = img.height;
      if (width > maxWidth || height > maxHeight) {
        if (width / height > maxWidth / maxHeight) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        } else {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }
      }
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL("image/jpeg", quality));
    };
    img.onerror = () => resolve(dataUrl);
    img.src = dataUrl;
  });
}

function formatBytes(bytes, decimals = 1) {
  if (!+bytes) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

// ==========================================================================
// 10. NAVIGATION & MOBILE DRAWER
// ==========================================================================
function setupNavigation() {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const closeDrawerBtn = document.getElementById("closeDrawerBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const mobLinks = document.querySelectorAll(".mob-link");
  const backToTopBtn = document.getElementById("backToTopBtn");

  const openDrawer = () => {
    if (mobileDrawer) mobileDrawer.classList.add("open");
  };
  const closeDrawer = () => {
    if (mobileDrawer) mobileDrawer.classList.remove("open");
  };

  if (hamburgerBtn) hamburgerBtn.addEventListener("click", openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener("click", closeDrawer);
  mobLinks.forEach(link => link.addEventListener("click", closeDrawer));

  // Scroll to Top FAB
  window.addEventListener("scroll", () => {
    if (backToTopBtn) {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Active navigation highlight
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(sec => {
      const secTop = sec.offsetTop - 120;
      if (window.scrollY >= secTop) {
        current = sec.getAttribute("id");
      }
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  });
}

// ==========================================================================
// 11. LIVE HOURS & BUSY STATUS
// ==========================================================================
function updateLiveHoursStatus() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentDec = hours + minutes / 60;

  const isOpen = currentDec >= 10.5 && currentDec < 23.0; // 10:30 AM to 11:00 PM
  const livePill = document.getElementById("liveStatusPill");
  const liveBusyStatus = document.getElementById("liveBusyStatus");

  if (livePill) {
    if (isOpen) {
      livePill.innerHTML = '<span class="pulse-dot"></span> Open Now · Closes 11 PM';
      livePill.style.color = "#34d399";
    } else {
      livePill.innerHTML = '<i class="fa-solid fa-moon"></i> Closed Now · Opens 10:30 AM';
      livePill.style.color = "#f87171";
    }
  }

  if (liveBusyStatus) {
    if (currentDec >= 18.5 && currentDec <= 21.5) {
      liveBusyStatus.textContent = "Busier than usual (15-20m wait)";
    } else if (currentDec >= 12.5 && currentDec <= 15.0) {
      liveBusyStatus.textContent = "Moderate lunch crowd (10m wait)";
    } else {
      liveBusyStatus.textContent = "Usually fast seating (< 5m wait)";
    }
  }
}

// ==========================================================================
// 12. TOAST NOTIFICATIONS HELPER
// ==========================================================================
function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color:var(--cinnamon);"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-20px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function escapeHtml(text) {
  return text.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}
