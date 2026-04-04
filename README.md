# Playonix - High-Stakes Entertainment Platform

**Playonix** is a premium, feature-rich media and entertainment platform designed to showcase high-stakes casino offers, exclusive rewards, and curated entertainment content. This project provides a robust, dual-interface system with specialized experiences for both users and administrators.

## 🚀 Key Features

- **Dual Dashboard System**: Separate, tailored interfaces for users and administrators.
- **Media Feed Management**: Admins can easily manage, order, and preview media content (videos and images).
- **Interactive User Experience**: Smooth animations and transitions using Framer Motion.
- **Advanced Analytics**: Real-time performance tracking and data visualization using Recharts.
- **Multi-Language Support**: Fully localized interface supporting multiple languages via `i18next`.
- **Modern UI/UX**: Dark/Light mode support with a premium design aesthetic using Tailwind CSS and Radix UI.
- **Responsive Design**: Optimized for mobile, tablet, and desktop environments.

## 🛠️ Built With (What I'm Using)

This project leverages a modern, industrial-standard tech stack for scalability and performance:

### Core Framework & Build Tools
- **Framework**: [React 18](https://reactjs.org/) (with TypeScript)
- **Runtime Environment**: [Node.js](https://nodejs.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/) - Next-generation frontend tooling.

### Branding & UI Styling
- **Styling Engine**: [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework for rapid UI development.
- **Components Library**: [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components.
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Theme Transitions**: [Theme Toggles](https://theme-toggles.js.org/) - Beautiful dark/light mode toggling.

### Application Logic & State
- **Global State**: [Redux Toolkit](https://redux-toolkit.js.org/) - Predictable state container for centralized logic.
- **Data Fetching**: [Axios](https://axios-http.com/) - Promise-based HTTP client for APIs.
- **Navigation**: [React Router v7](https://reactrouter.com/) - Standard routing for React apps.
- **Localization**: [i18next](https://www.i18next.com/) & [react-i18next](https://react.i18next.com/) - Professional translation framework.

### Interactive Elements & Visuals
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Powerful animation library for React.
- **Scroll Effects**: [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) - High-performance scroll animations.
- **Data Visualization**: [Recharts](https://recharts.org/) - D3-based charting library for React.

### Forms & Validation
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) - Performance-focused, flexible form management.
- **Schema Validation**: [Zod](https://zod.dev/) - TypeScript-first schema declaration and validation.

### UI Feedbacks & Helpers
- **Popups/Modals**: [SweetAlert2](https://sweetalert2.github.io/) - Beautiful, responsive popups.
- **Toasts**: [Sonner](https://sonner.emilkowal.ski/) & [React Hot Toast](https://react-hot-toast.com/) - Lightweight, notification libraries.
- **Persistent Storage**: [js-cookie](https://github.com/js-cookie/js-cookie) - Simple API for handling browser cookies.

## 📂 Project Structure

```text
src/
├── Layout/           # Core layout components (Admin, User, Navbars)
├── assets/           # Branding assets, logos, and global images
├── components/       # Reusable UI components (Auth, Sidebar, Search)
├── hooks/            # Custom React hooks
├── locales/          # Translation files for internationalization
├── pages/            # Page-level components (Home, Overview, Media Feed)
├── redux/            # RTK Query API slices and feature slices
├── routes/           # Application routing configuration
├── store/            # Redux store setup
├── types/            # TypeScript interface and type definitions
├── ui/               # Core atomic UI components
└── utils/            # Shared utility functions
```

## ⚙️ Getting Started

### Prerequisites
- **Node.js**: v18.x or higher
- **Package Manager**: npm (v9.x or higher) or yarn

### Installation
1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd playonix-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

### Building for Production
```bash
npm run build
```

## 📄 License

This project is proprietary. All rights reserved.
