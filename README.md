# ☕ Cinnamon Cafe & Restro — Interactive Web Application & Digital Menu

[![Website Status](https://img.shields.io/badge/Status-Active%20%26%20Live%20Ready-success?style=for-the-badge&logo=googlechrome&logoColor=white)](https://github.com/abrarafridi856/project)
[![Rating](https://img.shields.io/badge/Google%20Rating-4.4%20%E2%98%85%20(167%2B%20Reviews)-F4B400?style=for-the-badge&logo=google&logoColor=white)](https://maps.google.com/?q=Cinnamon+Cafe+%26+Restro+Station+Rd+near+Eye+Cure+Sribhumi+Assam+788711)
[![Technology](https://img.shields.io/badge/Tech-Vanilla%20HTML5%20%7C%20CSS3%20%7C%20JS%20ES6+-E34F26?style=for-the-badge&logo=javascript&logoColor=white)](https://github.com/abrarafridi856/project)
[![WhatsApp Ordering](https://img.shields.io/badge/Order-WhatsApp%20Integration-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/919401848694)

> **"Where Warm Aromas Meet Evening Elegance."**  
> A premium, high-performance, mobile-first web experience and digital menu ordering system tailored specifically for **Cinnamon Cafe & Restro**, located on Station Road, Sribhumi (Karimganj), Assam.

---

## 🌟 Project Motivation & Background

**Cinnamon Cafe & Restro** is one of Sribhumi's premier dining destinations — celebrated for its distinct dual ambiance:
- ☀️ **By Day:** A bustling, sunlit coffee retreat serving artisanal brews, sandwiches, creamy pasta, and quick bites for casual work sessions, dates, and friendly gatherings.
- 🌙 **By Night:** An elegant, ambient restro serving authentic clay-pot dum biryanis, tandoori breads, rich Indian curries, sizzlers, Chinese gravies, and hosting private birthday parties.

### Why this Web Application was Built:
1. **Complete Menu Digitization**: Accurately transcribed all **120+ dishes and beverages** across 10 authentic printed menu pages (Momos, Pizzas, Biryanis, Pastas, Starters, Shakes, Mojitos & Desserts) with exact pricing (₹15 – ₹360).
2. **Frictionless WhatsApp Ordering (My Plate Tray)**: Allowed guests to customize dishes, view subtotal breakdowns, choose order purpose (*Dine-In*, *Takeaway*, or *Home Delivery*), and transmit formatted orders straight to the restaurant's WhatsApp without third-party commission apps.
3. **Owner Photo Upload Studio**: Empowered restaurant owners to directly upload, categorize, and manage fresh dish and event photos right into the live photo gallery using secure PIN authorization.
4. **Dynamic Day/Night Mood Switcher**: Visualized the transition between daytime cafe vibes and evening dining ambiance with real-time CSS theme swapping.
5. **Zero Dependency & Lightning Speed**: Built in pure modern Vanilla web standards (HTML5, Modern CSS Variables, Modular JS) ensuring instantaneous 100/100 Lighthouse performance and zero build configuration hurdles.

---

## 🍽️ Complete Digital Menu Structure (120+ Authentic Dishes)

The website features full digital categorization transcribed directly from the restaurant's physical menu booklet:

```
├── 🥟 Momo (10 items)             -> Steamed, Fried, Pan-Fried, Cheese Chicken Momo, Kurkure Momo, Jhul Momo, Combo Platter
├── 🍔 Burgers & Sandwiches (8)    -> Veg/Chicken Burgers, Fried Chicken Burger, Paneer Grilled Sandwich, Club Sandwich
├── 🌯 Kati Rolls (4)              -> Egg Kati Roll, Paneer Kati Roll, Chicken Kati Roll, Egg Chicken Kathi Roll
├── 🍕 Pizza (8)                   -> Margherita, Farmhouse, Cheese & Corn, Deluxe Veggie, Paneer & Chicken Tikka, Cinnamon Special
├── 🍝 Noodles & Pasta (16)        -> Schezwan, Hakka, Butter Garlic, American Chopsuey, Creamy White Sauce & Red Sauce Pasta
├── 🥗 Veg Starters & Soups (18)   -> Paneer Tikka, Peri-Peri Fries, Crispy Chilli Babycorn, Honey Garlic Paneer, Manchow & Hot & Sour Soups
├── 🦐 Fish & Prawn (4)            -> Fish Finger, Chilli Fish Dry Fry, Prawn Dry Fry, Hot Garlic Chilli Prawn
├── 🍚 Biryani & Rice (19)         -> Royal Chicken Dum Biryani, Mutton Dum Biryani, Paneer Biryani, Schezwan & Fried Rice
├── 🍲 Gravy & Main Course (14)    -> Matar Paneer, Kadhai Paneer, Shahi Paneer, Mushroom Malai Masala, Chilli Chicken, Manchurian
├── 🫓 Indian Breads (6)           -> Tandoori Butter Roti, Plain Naan, Butter Garlic Naan, Laccha Paratha
├── ☕ Coffee, Shakes & Drinks (27) -> Espresso, Latte, Cold Coffee, Mango Lassi, Oreo Shake, Fresh Juices, Virgin/Guava/Blueberry Mojitos
└── 🍨 Desserts (2)                -> Ice Cream Scoops, Warm Gulab Jamun
```

---

## 🚀 Key Interactive Systems & Feature Highlights

| Feature Module | Functionality & Implementation Details |
| :--- | :--- |
| 🌓 **Day & Night Mood Engine** | Live theme toggle (`body[data-theme]`) with smooth color-palette transitions, glowing cinnamon accents, and persistent `localStorage` preference. |
| 🔍 **Real-Time Menu Search & Filter** | Instant multi-condition query engine filtering 120+ dishes by keyword, dietary preference (All, Pure Veg, Non-Veg, Chef's Choice), and category tabs. |
| 🛒 **Interactive "My Plate" Tray** | Cart drawer supporting item increments, decrements, subtotal calculation, order type selection (*Dine-In / Takeaway / Delivery*), and 1-click WhatsApp order generator. |
| 📸 **Interactive Photo Gallery & Lightbox** | Multi-category gallery with modal zoom lightbox, including high-resolution scans of the authentic printed menu book pages. |
| 🔐 **Owner Restaurant Photo Studio** | PIN-protected portal (`PIN: 1234`) enabling restaurant staff to drag-and-drop or browse new photos, assign categories, write captions, and publish directly to the live gallery. |
| ⭐ **Live Review Engine** | Verified diner review showcase with an interactive 5-star submission modal that saves feedback locally and renders new testimonial cards in real time. |
| 📊 **Simulated Google Popular Times** | Interactive day-of-the-week switcher showing simulated peak visiting hours and typical visit durations. |
| 📱 **Adaptive Mobile Experience** | Responsive slide-out navigation drawer, sticky floating action buttons (Direct Call, WhatsApp, Cart Plate, Scroll-to-top). |

---

## 📁 Repository Structure

```
├── index.html            # Main semantic HTML5 document with structured JSON-LD data
├── styles.css            # Comprehensive responsive CSS design system & CSS variables
├── app.js                # Core interactive JavaScript application logic & state management
├── images/               # High-resolution curated gallery & ambiance photography
│   ├── hero_cafe.jpg
│   ├── signature_pasta.jpg
│   ├── specialty_coffee.jpg
│   ├── party_celebration.jpg
│   ├── sizzler_platter.jpg
│   └── burger_fastbites.jpg
├── unnamed*.webp         # High-resolution original scanned pages of the physical menu book
└── README.md             # Project documentation, motivation, and setup instructions
```

---

## 🛠️ Technology Stack & Design Architecture

- **Markup**: Semantic HTML5 with Schema.org Restaurant Microdata for local SEO optimization.
- **Styling**: Vanilla CSS3 using custom properties (Design Tokens), Flexbox, CSS Grid, Glassmorphism backdrop filters, and CSS keyframe micro-animations.
- **Typography**: Google Fonts (`Outfit`, `Playfair Display`, `Plus Jakarta Sans`).
- **Icons**: Font Awesome 6.5.1 Pro Iconography CDN.
- **Logic**: Vanilla ES6+ JavaScript with dynamic DOM rendering, event delegation, and Web Storage API (`localStorage`).
- **External Dependencies**: **Zero runtime JavaScript frameworks** — no build tools, bundlers, or heavy node_modules needed!

---

## 💻 How to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/abrarafridi856/project.git
   cd project
   ```

2. **Run in any browser**:
   - Simply double click `index.html` to open it in your default web browser, or
   - Start a lightweight local development server:
     ```bash
     # Python 3
     python -m http.server 8080
     ```
   - Open your browser and navigate to `http://localhost:8080`.

---

## 🌐 Deploy to Live Hosting (Free 1-Click Methods)

### Option 1: GitHub Pages (Recommended)
1. In your GitHub repository (`https://github.com/abrarafridi856/project`), go to **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, select **Deploy from a branch**.
3. Set Branch to `main` and folder to `/(root)`, then click **Save**.
4. Your website will be live in ~60 seconds at `https://abrarafridi856.github.io/project/`.

### Option 2: Vercel or Netlify
1. Import your GitHub repository to [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
2. Leave build settings empty (as it is pure static HTML/CSS/JS).
3. Click **Deploy**.

---

## 📍 Restaurant Details & Contact

- **Restaurant**: Cinnamon Cafe & Restro
- **Address**: Station Rd, near Eye Cure, opp. Vikash Textile, Sribhumi (Karimganj), Assam 788711
- **Phone**: [+91 94018 48694](tel:09401848694)
- **WhatsApp**: [+91 94018 48694](https://wa.me/919401848694)
- **Hours**: Monday – Sunday: 10:30 AM – 11:00 PM
- **Average Spend**: ₹200 – ₹400 per person

---

<div align="center">
  <sub>Crafted with passion for <strong>Cinnamon Cafe & Restro</strong>. © 2026 All Rights Reserved.</sub>
</div>
