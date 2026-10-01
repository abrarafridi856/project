# 🌟 Cinnamon Cafe & Restro — Interactive Digital Dining Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](https://opensource.org/licenses/MIT)
[![Deploy with Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)](https://vercel.com/new)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?logo=github)](https://github.com/abrarafridi856/project)
[![Location](https://img.shields.io/badge/Location-Sribhumi%2C%20Assam-orange?logo=googlemaps)](https://maps.google.com/?q=Cinnamon+Cafe+%26+Restro+Station+Rd+near+Eye+Cure+Sribhumi+Assam+788711)

> **"Nestled in the heart of the town, Cinnamon Cafe & Restro offers the perfect blend of taste and elegance — a bustling cafe by day, an ambient restro retreat by night."**

---

## 📖 Table of Contents
- [🎯 Motivation & Project Vision](#-motivation--project-vision)
- [✨ Key Interactive Features](#-key-interactive-features)
- [🍽️ Complete Digital Menu (120+ Items)](#️-complete-digital-menu-120-items)
- [🛠️ Tech Stack & Architecture](#️-tech-stack--architecture)
- [🚀 Quick Start & Local Setup](#-quick-start--local-setup)
- [🌐 Live Deployment Guide (Vercel & GitHub)](#-live-deployment-guide-vercel--github)
- [📱 WhatsApp Order Integration Format](#-whatsapp-order-integration-format)
- [👑 Restaurant Owner Studio](#-restaurant-owner-studio)
- [📍 Restaurant Details & Contact](#-restaurant-details--contact)

---

## 🎯 Motivation & Project Vision

Traditional physical menu booklets are static, easily worn out, and don't provide customers with interactive pricing calculations, dietary filtration, or immediate digital pre-ordering. 

The goal of this project is to build a **state-of-the-art, hyper-responsive digital web platform** for **Cinnamon Cafe & Restro** (located at Station Road, Sribhumi, Assam) that:
1. **Transcribes 100% of the authentic restaurant printed menu** into a fast, interactive digital catalog with instant search and dietary filters (Veg / Non-Veg / Chef's Choice).
2. **Eliminates order friction** through a built-in **"Order Plate" / Tray** that calculates the bill in real-time and formats a structured order dispatched straight to the restaurant's official WhatsApp line (`094018 48694`).
3. **Showcases the Day vs. Night dual ambiance** with a 1-click **Mood Toggle** (Daytime Warm Cafe vs. Evening Restro Ambiance).
4. **Empowers the restaurant owner** with a secure **Owner Studio** to upload and manage cafe food and interior photos directly from mobile or desktop with automated client-side image compression and persistence.
5. **Preserves authenticity** by providing full-resolution scans of the physical menu book in a sleek, full-screen image lightbox.

---

## ✨ Key Interactive Features

### ☀️🌙 1. Day / Night Mood Switcher
- Instant toggle between **☀️ Daytime Cafe Vibe** (warm honey & cream aesthetic) and **🌙 Evening Restro Vibe** (candlelit obsidian & dark cinnamon glow).
- Preferences are automatically preserved across sessions using `localStorage`.

### 🥟🍕 2. 120+ Item Dynamic Menu with Instant Search
- **Category Tabs**: 12 dedicated sections (*Momo, Burgers & Sandwiches, Kati Rolls, Pizza, Noodles & Pasta, Starters & Soups, Fish & Prawn, Biryani & Rice, Gravy & Main Course, Indian Breads, Beverages & Shakes, Desserts*).
- **Dietary Filter Buttons**: 🟢 *Pure Veg*, 🔴 *Non-Veg*, ⭐ *Chef's Choice*.
- **Real-Time Search Bar**: Instant debounced search querying dish names, ingredients, and categories.

### 🍽️📲 3. Live Food Plate Tray & WhatsApp Order Dispatch
- 1-Click **"Add to Plate"** button on every single dish card.
- Floating Cart button (FAB) with animated item counter badges.
- Slide-up interactive modal to increment/decrement quantities, select order type (*Dine-In*, *Takeaway*, or *Home Delivery*), and input customer name & table/address.
- Generates a beautifully formatted WhatsApp payload sent directly to `+91 94018 48694`.

### 📊 4. Simulated Google Popular Times & Live Hours Widget
- Interactive hourly bar chart based on actual dining trends in Sribhumi.
- Real-time **Open / Closed clock calculation** (Mon–Sun 10:30 AM to 11:00 PM).
- Dynamic busy indicator based on current local time.

### 🖼️ 5. Authentic Photo Gallery & HD Lightbox
- High-definition gallery showcasing dining hall ambiance, signature dishes, celebration zones, and **original printed menu booklet scans**.
- Fullscreen modal lightbox with smooth backdrop blur and keyboard `Esc` closing.

### ⭐ 6. Customer Review Submission System
- Interactive 5-star rating selector and review form.
- Real-time dynamic appending of new customer reviews with toast notifications.

### 👑 7. Restaurant Owner Photo Studio
- PIN-protected authentication screen (Default Demo PIN: `1234`).
- Drag-and-drop file upload with client-side canvas compression (`max 1200px`, JPEG quality `0.82`) for ultra-fast load times.
- Management tab to delete and organize custom uploaded restaurant snapshots.

---

## 🍽️ Complete Digital Menu (120+ Items)

| Category | Highlights & Included Items | Price Range |
| :--- | :--- | :--- |
| **🥟 Momo** | Veg & Chicken Steamed, Fried, Pan-Fried, Cheese Momo, Kurkure Momo, Jhul Momo, Combo Platter | ₹80 – ₹250 |
| **🍔 Burgers & Sandwiches** | Veg/Chicken Burgers, Fried Chicken Burger, Paneer Grilled Sandwich, Cheese Corn, Chicken Club Sandwich | ₹80 – ₹160 |
| **🌯 Kati Rolls** | Egg Kati Roll, Paneer Kati Roll, Chicken Kati Roll, Egg Chicken Kathi Roll | ₹80 – ₹130 |
| **🍕 Pizzas** | Margherita, Farmhouse, Cheese & Corn, Deluxe Veggie, Paneer Tikka, Chicken Tikka, Overloaded, Cinnamon Special Pizza | ₹150 – ₹300 |
| **🍝 Noodles & Pasta** | Veg/Chicken Hakka, Schezwan, Chilli Garlic, Butter Garlic, American Chopsuey, White & Red Sauce Pasta (Veg/Non-Veg) | ₹80 – ₹180 |
| **🥗 Starters & Soups** | Paneer Tikka, Chilli Paneer (Dry), Peri-Peri Fries, Honey Garlic Paneer, Crispy Chilli Babycorn, Manchow & Hot & Sour Soups | ₹80 – ₹160 |
| **🦐 Fish & Prawn** | Fish Finger, Chilli Fish Dry Fry, Prawn Dry Fry, Hot Garlic Chilli Prawn | ₹200 – ₹280 |
| **🍚 Biryani & Rice** | Chicken, Paneer, Mutton Biryani (Mini/Full), Chicken Dum Biryani, Mutton Dum Biryani, Jeera Rice, Schezwan & Fried Rice | ₹60 – ₹360 |
| **🍲 Gravy & Curries** | Matar Paneer, Kadhai Paneer, Paneer Lababdar, Paneer Butter Masala, Shahi Paneer, Mushroom Malai Masala, Chilli Chicken, Manchurian Gravies | ₹130 – ₹250 |
| **🫓 Indian Breads** | Plain Roti, Butter Roti, Plain Naan, Butter Naan, Butter Garlic Naan, Laccha Paratha | ₹15 – ₹80 |
| **☕ Shakes, Coffee & Drinks** | Hot/Black Coffee, Latte, Cappuccino, Cold Coffee, Mango Lassi, Oreo Shake, Fresh Juices, Virgin/Chilli Guava/Blueberry Mojitos | ₹40 – ₹130 |
| **🍨 Desserts** | Ice Cream, Gulab Jamun | ₹40 – ₹60 |

---

## 🛠️ Tech Stack & Architecture

```
project/
├── index.html          # Semantic HTML5 Structure with SEO Optimization
├── styles.css          # Vanilla CSS Design System with Glassmorphism & Themes
├── app.js              # State Management, Menu Rendering, Cart & WhatsApp Logic
├── .gitignore          # Git exclusion rules
├── README.md           # Documentation & Deployment Guide
├── images/             # High resolution restaurant assets & dish photography
└── unnamed*.webp       # Authentic printed menu scans (Pages 02 - 13)
```

- **Frontend**: Vanilla HTML5, Modern CSS3 (Variables, Glassmorphism, CSS Grid, Flexbox), Vanilla ES6+ JavaScript.
- **Iconography & Typography**: FontAwesome 6.4.0, Google Fonts (*Outfit* and *Plus Jakarta Sans*).
- **State Management**: Reactive in-memory state with automatic `localStorage` persistence for Cart, Theme, and Custom Photos.
- **Zero Build Step**: Fully static, high-performance architecture capable of running on any static host with sub-second load times.

---

## 🚀 Quick Start & Local Setup

### 1. Clone the repository
```bash
git clone https://github.com/abrarafridi856/project.git
cd project
```

### 2. Run locally in any browser
You can open `index.html` directly in your browser, or start a local lightweight web server:

**Using Python:**
```bash
python -m http.server 8080
```
Then visit: `http://localhost:8080`

**Using Node / `npx serve`:**
```bash
npx serve .
```

---

## 🌐 Live Deployment Guide (Vercel & GitHub)

### Option A: 1-Command Deployment with Vercel CLI
You can deploy this project live to Vercel instantly without any configuration files:

```bash
# 1. Install or run Vercel directly
npx vercel

# 2. Follow the prompt (Set scope, link project, confirm root directory)
# 3. For production release:
npx vercel --prod
```

### Option B: Deploying via GitHub to Vercel
1. Push this repository to your GitHub account:
   ```bash
   git add .
   git commit -m "Deploy latest Cinnamon digital platform"
   git push origin main
   ```
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import your GitHub repository (`abrarafridi856/project`).
4. Click **Deploy** — Vercel will automatically assign a live production URL (e.g., `https://cinnamon-cafe-restro.vercel.app`).

---

## 📱 WhatsApp Order Integration Format

When a customer builds their order tray and clicks **"Send Order on WhatsApp"**, the application automatically structures an itemized bill:

```text
*🌟 NEW ORDER - CINNAMON CAFE & RESTRO 🌟*

*Order Type:* Dine-In / Pre-cook
*Customer Name:* Joydeep
*Table / Address:* Table 4

*--- Order Items ---*
1. Chicken Dum Biryani (Full) x 2 = ₹480
2. Cinnamon Special Pizza x 1 = ₹300
3. Virgin Mojito x 2 = ₹160

*Total Amount:* ₹940
*Restaurant Contact:* 094018 48694 (Station Rd, Sribhumi)

Please confirm my order and approximate prep time. Thank you!
```

---

## 👑 Restaurant Owner Studio

The built-in Owner Studio is accessible via the **"Owner Studio"** buttons in the header, photo gallery, and footer.

- **Default Access PIN**: `1234`
- **Alternative Admin PINs**: `admin` or `0940`
- **Features**:
  - Live photo upload with automatic image scaling and quality optimization.
  - Category tagging (*Ambiance, Food, Events, Exterior*).
  - Deletion and management of published custom photos.

---

## 📍 Restaurant Details & Contact

- **Restaurant**: **Cinnamon Cafe & Restro**
- **Address**: Station Rd, near Eye Cure, opp. Vikash Textile, Sribhumi, Assam 788711
- **Phone**: [`094018 48694`](tel:09401848694)
- **WhatsApp**: [`+91 94018 48694`](https://wa.me/919401848694)
- **Timings**: Monday – Sunday: `10:30 AM – 11:00 PM`
- **Price Range**: ₹200 – ₹400 per person

---

*Crafted with ❤️ for Cinnamon Cafe & Restro, Sribhumi.*
