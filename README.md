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

## 🛠️ Technical Stack

- **Framework**: [React](https://reactjs.org/) (with TypeScript)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [Radix UI](https://www.radix-ui.com/) & [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Charts**: [Recharts](https://recharts.org/)
- **Navigation**: [React Router DOM v7](https://reactrouter.com/)
- **Internationalization**: [i18next](https://www.i18next.com/)

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

- Node.js (v18 or higher)
- npm or yarn

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
   The application will be available at `http://localhost:5173`.

### Building for Production

To create an optimized production build:
```bash
npm run build
```
The build artifacts will be stored in the `dist/` directory.

## 📄 License

This project is proprietary. All rights reserved.
