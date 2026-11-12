# Cozy Roast &mdash; Artisanal Roastery &amp; Specialty Coffee ☕✨

A modern, responsive specialty coffee shop and artisanal roastery landing page built with **React 19**, **Vite 8**, and **Tailwind CSS 4**.

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Lucide](https://img.shields.io/badge/Lucide_Icons-1.14-F56565?style=for-the-badge)](https://lucide.dev/)
[![ESLint](https://img.shields.io/badge/ESLint-10.2-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)

> **Cozy Roast** celebrates the craft of small-batch coffee roasting, single-origin beans, and a warm neighborhood atmosphere designed to bring comfort, artisanal precision, and unforgettable aromas to every cup.

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Website Features &amp; Sections](#-website-features--sections)
- [Contact Details &amp; Alternative Channels](#-contact-details--alternative-channels)
- [Tech Stack](#-tech-stack)
- [Project Directory Structure](#-project-directory-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Design System &amp; Palette](#-design-system--palette)
- [Roadmap &amp; Enhancements](#-roadmap--enhancements)
- [License](#-license)

---

## 🌟 Overview

**Cozy Roast** is an immersive single-page marketing and roastery web experience. It is designed to welcome coffee lovers with warm, earth-toned visuals, fluid responsive layouts, interactive elements, and accessible communication channels.

The frontend architecture is organized into reusable components, structured sections, and a design-tokenized Tailwind CSS setup that enables quick maintenance and frictionless scaling into full e-commerce or ordering systems.

---

## ✨ Website Features &amp; Sections

1. **Sticky Header &amp; Navigation (`#navbar`)**:
   - Distinct **Cozy Roast** brand logo with circular badge.
   - Smooth-scrolling anchor links for **Home**, **Services**, **Menu**, **Reviews**, and **Contact**.
   - Interactive expanding search bar and cart indicator button.
   - Mobile responsive slide-in drawer with backdrop dismiss.

2. **Hero Section (`#home`)**:
   - High-impact editorial typography (*Playfair Display* &amp; *Pacifico*).
   - Brand storytelling highlighting slow-roasted craftsmanship and ethical bean sourcing.
   - Highlighting call-to-action button (*Order Now*) with micro-interaction hover state.
   - Coffee stat pills and illustrative hero coffee cup imagery with typographic backdrop.

3. **Services &amp; Craftsmanship (`#services`)**:
   - Card showcases for **Coffee Types**, **Different Beans**, and **Cold Coffee**.
   - Clean iconography, hover elevation, and decorative high-resolution coffee bean separator.

4. **Artisan Product Showcase (`#menu`)**:
   - Grid layout of hand-crafted beverages (Cappuccino, Chai Latte, Macchiato, Americano, Espresso).
   - Visual pricing cards with high-quality photography and instant order trigger buttons.

5. **Customer Reviews &amp; Testimonials (`#reviews`)**:
   - Stateful customer review carousel powered by React `useState`.
   - Smooth navigation controls (previous/next chevron buttons) with circular customer portraits.

6. **Full Roastery Footer &amp; Contact Hub (`#contact`)**:
   - Atmospheric background hero banner with social media links (*Facebook*, *Twitter*, *YouTube*, *Instagram*).
   - Dedicated **Primary Desk Details** column.
   - Dedicated **Alternative Contact &amp; Ordering Channels** column.
   - Quick navigation links with animated chevron arrows.
   - Structured opening hours schedule and curbside pickup information.
   - Sub-footer copyright notice and policy links.

---

## 📞 Contact Details &amp; Alternative Channels

Cozy Roast provides both **Primary Roastery Details** and **Alternative Direct Channels** to ensure customers, event organizers, and partners can reach the team promptly:

| Category | Primary Channel (Roastery Desk) | Alternative Channel (Express &amp; Support) |
| :--- | :--- | :--- |
| **Location** | **742 Evergreen Terrace**, Arts District, Los Angeles, CA 90013 | **Suite 204, Westside Brew Lab**, Santa Monica, CA 90401 *(Alt Pick-up Hub)* |
| **Telephone** | `+1 (555) 269-9778` (`+1 555-COZY-RST`) | `+1 (555) 834-COZY (2699)` *(Hotline &amp; WhatsApp)* |
| **Email** | `hello@cozyroast.com` *(General &amp; Roastery Inquiries)* | `orders@cozyroast.com` *(Orders &amp; Quick Dispatch)*<br>`catering@cozyroast.com` *(Events &amp; Pop-ups)* |
| **Operating Hours** | **Mon &ndash; Fri:** 07:00 AM &ndash; 08:00 PM<br>**Sat &ndash; Sun:** 08:00 AM &ndash; 09:00 PM | **Curbside / Alt Pickup:** Until 09:30 PM Daily<br>**Cupping &amp; Tasting Bar:** Thu&ndash;Sun 10:00 AM&ndash;02:00 PM |
| **Delivery** | In-store pickup &amp; Roastery patio dine-in | On-demand via **DoorDash**, **UberEats**, &amp; **Postmates** (`@CozyRoast`) |
| **Online Socials** | In-app contact form &amp; social profiles | Direct WhatsApp Instant Chat |

---

## 🛠 Tech Stack

- **Core Library**: [React 19](https://react.dev/)
- **Build Tool &amp; Dev Server**: [Vite 8](https://vitejs.dev/)
- **CSS &amp; Styling**: [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/vite`
- **Icons**: [Lucide React](https://lucide.dev/) &amp; [React Icons](https://react-icons.github.io/react-icons/)
- **Typography**: Google Fonts (*Playfair Display*, *Pacifico*, *Great Vibes*)
- **Code Quality**: ESLint 10 (Flat Configuration)

---

## 📂 Project Directory Structure

```text
Cozy-Roast/
├── public/
├── src/
│   ├── assets/                       # High-resolution imagery, logo, and artwork
│   │   ├── coffee_beans.png
│   │   ├── customerReview1.jpg
│   │   ├── customerReview2.jpg
│   │   ├── customerReview3.jpg
│   │   ├── footer.jpg
│   │   ├── hero_coffee_cup.png
│   │   ├── logo.jpg
│   │   ├── product1.jpg ... product6.jpg
│   │   └── service1.png ... service3.png
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Heading.jsx           # Reusable section heading with title & description
│   │   │   └── Logo.jsx              # Cozy Roast logo & brand mark
│   │   │
│   │   ├── navbar/
│   │   │   ├── Navbar.jsx            # Sticky navigation bar with mobile toggle
│   │   │   └── navComponent/
│   │   │       ├── MobileMenu.jsx    # Slide-in mobile drawer
│   │   │       ├── NavButton.jsx     # Interactive search input, cart, and signup
│   │   │       └── NavLink.jsx       # Smooth-scrolling anchor navigation links
│   │   │
│   │   ├── section/
│   │   │   ├── hero/                 # Hero section & artwork
│   │   │   │   ├── HeroSection.jsx
│   │   │   │   └── heroComponent/
│   │   │   │       ├── Items.jsx
│   │   │   │       ├── LeftHeroSection.jsx
│   │   │   │       └── RightHeroSection.jsx
│   │   │   ├── service/              # Service cards & bean divider
│   │   │   │   ├── ServiceSection.jsx
│   │   │   │   └── serviceComponent/ServiceCard.jsx
│   │   │   ├── product/              # Product showcase grid
│   │   │   │   ├── ProductSection.jsx
│   │   │   │   └── productComponent/ProductCard.jsx
│   │   │   └── review/               # Customer review carousel
│   │   │       ├── ReviewSection.jsx
│   │   │       └── reviewComponent/
│   │   │           ├── CastomersReview.jsx
│   │   │           ├── LeftReview.jsx
│   │   │           └── RightReview.jsx
│   │   │
│   │   └── footer/                   # Structured footer components
│   │       ├── FooterSection.jsx
│   │       └── footerComponent/
│   │           ├── FooterAbout.jsx        # About Cozy Roast & Primary Desk details
│   │           ├── FooterAlternative.jsx  # Alternative hotline, orders, and hub
│   │           ├── FooterBottom.jsx       # Copyright notice & policy links
│   │           ├── FooterColumns.jsx      # Responsive 4-column layout wrapper
│   │           ├── FooterHero.jsx         # Footer banner with social icons
│   │           ├── FooterHours.jsx        # Opening schedule & curbside hours
│   │           └── FooterLinks.jsx        # Quick navigation anchor links
│   │
│   ├── App.jsx                       # Root component assembling sections with IDs
│   ├── index.css                     # Tailwind CSS import & smooth scroll behavior
│   └── main.jsx                      # React application entry point
│
├── DESIGN.md                         # Detailed design system specification
├── eslint.config.js                  # ESLint configuration
├── index.html                        # HTML entry point with metadata & web fonts
├── package.json                      # Project dependencies and npm scripts
└── vite.config.js                    # Vite configuration with React & Tailwind plugins
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher recommended) and **npm** installed on your workstation.

```bash
node -v
npm -v
```

### Installation

Clone the repository and install the project dependencies:

```bash
git clone https://github.com/alifjobaer12/Frontend_The_Coffee_Cup.git Cozy-Roast
cd Cozy-Roast
npm install
```

### Run Development Server

Launch the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

---

## 📋 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts Vite local development server with instant HMR |
| `npm run build` | Compiles and bundles production-ready assets into `dist/` |
| `npm run preview` | Locally serves the production `dist/` build for verification |
| `npm run lint` | Executes ESLint checks across JavaScript and JSX files |

---

## 🎨 Design System &amp; Palette

The visual identity is guided by [DESIGN.md](./DESIGN.md) and centers around rich, inviting coffee tones:

- **Primary Roast Brown** (`#6B3E26`): Main headings, navigation links, and primary brand accents.
- **Deep Espresso** (`#432010`): Buttons, active states, and dark focus indicators.
- **Dark Roastery Chocolate** (`#2B1208`): Deep footer background and high-contrast anchors.
- **Warm Caramel Tan** (`#C89B6D`): Secondary hero text, badges, and hover highlights.
- **Light Cream Accent** (`#E2C8AE`): Subtle badges, card borders, and warm contrast text.
- **Golden Tan** (`#C4A574`): Primary contact badge, review stars, and accent dividers.
- **Warm Parchment Surface** (`#F5F2EF`): Soft page background preventing eye strain.

---

## 🔮 Roadmap &amp; Enhancements

1. **Shopping Cart &amp; Checkout**: Add shopping cart state (Context API or Zustand) and integrate Stripe or Square for checkout.
2. **Table &amp; Cupping Reservations**: Interactive booking modal for Roastery cupping sessions and weekend brunch table seating.
3. **Bean Subscription Flow**: Customizable monthly coffee bean delivery frequency and grind type selector.
4. **Backend API Integration**: Connect to headless CMS (Sanity / Strapi) or Node.js backend for dynamic menu and inventory updates.
5. **Internationalization (i18n)**: Multi-language support for international guests and tourists.

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to adapt and expand it for your own cafe or roastery concepts!
