# BistroFlow ✨

BistroFlow is a modern, elegant, and feature-rich digital storefront designed for high-end coastal restaurants. This project is a comprehensive showcase of a modern, mobile-first ordering experience, built from the ground up with a professional tech stack and a keen eye for UI/UX, performance, and accessibility.

### ➡️ [**View the Live Demo**](https://bistro-flow-sigma.vercel.app/)

![BistroFlow Live Demo Screenshot] <img width="1194" height="633" alt="image" src="https://github.com/user-attachments/assets/1c4afc5f-a178-4499-97b8-ba66b9099832" />


*(**Action:** Replace the `https://i.imgur.com/YOUR_SCREENSHOT_URL.png` link with a direct link to a screenshot of your live application!)*

---

## 核心功能 (Core Features)

BistroFlow is more than just a static landing page; it's a complete front-end application packed with features that solve real-world business needs for the hospitality industry.

*   **Interactive & Filterable Menu:**
    *   **Category Filtering:** Easily switch between categories like Starters, Seafood, and Mains.
    *   **Dietary Filtering:** Filter the menu by tags like Vegan, Gluten-Free, and Halal using a polished chip UI.
    *   **Live Search:** Instantly find dishes with a real-time search bar.

*   **Client-Side Ordering System:**
    *   **"Add to Order" Functionality:** A seamless, client-side cart managed with React Context.
    *   **Responsive Cart Drawer:** A sleek side drawer on desktop that transforms into a mobile-friendly bottom sheet (like Uber Eats).
    *   **Floating Mobile CTA:** A "View Order" button appears on mobile for persistent access to the cart.

*   **Immersive User Experience:**
    *   **Storytelling Menu:** The "All" view features thematic background animations (waves for Seafood, sparks for Grilled) and a subtle parallax scroll effect for a sense of depth.
    *   **Item Details Modal:** Click any dish to open a modal with a larger photo and more details.
    *   **Smooth Animations:** All interactions, from filtering to opening the cart, are enhanced with fluid animations using Framer Motion.

*   **Professional & Technical Features:**
    *   **Dark & Light Themes:** A beautiful, persistent theme toggle saves the user's preference in `localStorage`.
    *   **Multilingual Support (i18n):** The entire UI supports both English and Swahili, with a simple language switcher.
    *   **Admin Dashboard:** A hidden `/admin` route showcases data visualization with a chart of the most-ordered dishes.
    *   **SEO Optimized:** Includes all necessary meta tags for professional search engine results and social media sharing (`og:image`).

---

## 🛠️ Tech Stack

This project was built using a modern, type-safe, and performant technology stack.

| Technology       | Description                                                              |
| :--------------- | :----------------------------------------------------------------------- |
| **Vite**         | Next-generation front-end tooling for a blazing-fast development experience. |
| **React**        | The core UI library for building components.                             |
| **TypeScript**   | For static typing, ensuring a robust and maintainable codebase.          |
| **TailwindCSS**  | A utility-first CSS framework for rapid, custom UI development.          |
| **Framer Motion**| A production-ready motion library for creating fluid animations.         |
| **React Router** | For client-side routing and navigation (e.g., the `/admin` page).        |
| **i18next**      | A powerful internationalization framework for handling translations.     |
| **Recharts**     | A composable charting library for the admin dashboard.                   |
| **Vercel**       | For seamless, production-grade deployment.                               |

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v18 or later)
*   pnpm package manager

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/BistroFlow.git
    cd BistroFlow
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    pnpm dev
    ```

    The application will be available at `http://localhost:5173`.

---

## 📜 Available Scripts

-   `pnpm dev`: Starts the development server.
-   `pnpm build`: Bundles the app for production.
-   `pnpm lint`: Lints the project files for code quality.
-   `pnpm preview`: Serves the production build locally to test it before deployment.

---

## ✨ Crafted By

This project was designed and developed by **Hussein Salim**.
