# Playonix - Premium Entertainment & Casino Management Platform

**Playonix** is a high-performance, feature-rich web application designed for a premium entertainment experience. It serves as a dual-interface platform, providing users with curated media content and administrators with powerful tools for management, analytics, and content moderation.

---

## 🚀 Key Features

### For Users
- **Media Explorer**: Seamlessly browse high-quality videos and photos.
- **Personalized Experience**: Save favorites and manage personal settings.
- **Categorized Content**: Easy navigation through various entertainment categories.
- **Top Rated Insights**: Discover top-rated casinos and rewards.
- **Multi-Language Support**: Fully localized interface for global accessibility.

### For Administrators
- **Comprehensive Analytics**: Monitor platform performance with real-time data visualization.
- **User Management**: Efficiently manage user accounts and permissions.
- **Feed Ordering**: Control the priority and arrangement of content feeds.
- **Content Moderation**: Review and moderate user interactions and content.
- **Dynamic Settings**: Update platform-wide configurations on the fly.

---

## 🛠️ Tech Stack & Rationale (Why We Use It)

This project uses a modern, industry-standard stack to ensure scalability, maintainability, and a premium user experience.

### Core Frameworks
| Technology | Why We Use It |
| :--- | :--- |
| **React 18** | For building a component-based, highly interactive, and declarative UI that scales efficiently. |
| **TypeScript** | To provide static typing, catching errors early in development and improving code maintainability. |
| **Vite 6** | Chosen for its lightning-fast development server and optimized build process compared to traditional tools. |

### State Management & Data Fetching
| Technology | Why We Use It |
| :--- | :--- |
| **Redux Toolkit (RTK)** | For predictable, centralized state management and simplified boilerplate code. |
| **RTK Query** | To handle API caching, synchronization, and data fetching with minimal manual state management. |
| **Axios** | For a robust and flexible HTTP client with built-in support for request/response interceptors. |

### UI & Styling
| Technology | Why We Use It |
| :--- | :--- |
| **Tailwind CSS 4** | For rapid, utility-first styling that ensures a consistent design system and smaller bundle sizes. |
| **Radix UI** | For unstyled, accessible UI primitives that form the foundation of high-quality components. |
| **Framer Motion** | To implement smooth, professional-grade animations that enhance the premium feel of the app. |
| **AOS (Animate On Scroll)** | For lightweight, high-performance scroll animations that bring the content to life. |
| **Lucide / Heroicons** | For a clean, modern, and consistent iconography set across the entire application. |

### Forms & Validation
| Technology | Why We Use It |
| :--- | :--- |
| **React Hook Form** | For performance-focused form management that minimizes re-renders. |
| **Zod** | For "schema-first" validation that ensures data integrity and provides excellent TypeScript support. |

### Monitoring & Feedback
| Technology | Why We Use It |
| :--- | :--- |
| **Recharts** | To create beautiful, responsive charts for the Admin Analytics dashboard. |
| **Sonner / Hot Toast** | To provide instant, non-intrusive feedback for user actions. |
| **SweetAlert2** | For stylish and user-friendly confirmation dialogs and alerts. |

---

## 📂 File Structure

The project follows a modular and organized structure for better scalability:

```text
src/
├── assets/           # Static assets (images, logos, global styles)
├── common/           # Shared UI patterns and wrapper components
├── components/       # Reusable business logic components (Auth, Sidebar, etc.)
├── hooks/            # Custom React hooks for shared logic
├── Layout/           # High-level layout wrappers (AdminLayout, UserLayout)
├── lib/              # Third-party library configurations (utils, form schemas)
├── locales/          # i18n translation files (en, bn, etc.)
├── pages/            # Main route-level components organized by module
│   ├── Admin/        # Analytics, User Management, Feed Ordering
│   └── User/         # Media feeds, Favorites, Settings
├── redux/            # RTK slices and API service definitions
├── routes/           # React Router configuration and route guards
├── store/            # Centralized Redux store configuration
├── types/            # Global TypeScript interfaces and types
├── ui/               # Atomic UI components (Buttons, Inputs, Modals)
├── utils/            # Helper functions and constants
├── App.tsx           # Root component
├── main.tsx          # Application entry point
└── i18n.ts           # Internationalization setup
```

---

## ⚙️ Getting Started

### Prerequisites
- **Node.js**: v18.x or higher
- **Package Manager**: npm or yarn

### Installation
1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd playonix-frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

---

## 📄 License

Proprietary Software. All rights reserved by Playonix.
