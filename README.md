# 🍽️ Potta Penchara

> A feature-rich **Swiggy Clone** built with React 19, Redux Toolkit, Tailwind CSS, and Parcel — serving up a seamless food ordering experience.

[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.11.2-764ABC?style=flat-square&logo=redux)](https://redux-toolkit.js.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Parcel](https://img.shields.io/badge/Parcel-2.16.3-F5A623?style=flat-square)](https://parceljs.org/)
[![Jest](https://img.shields.io/badge/Jest-30.2.0-C21325?style=flat-square&logo=jest)](https://jestjs.io/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=flat-square)](https://opensource.org/licenses/ISC)

---

## 📖 About

**Potta Penchara** is a Swiggy-inspired food delivery web application built as a front-end project using modern React ecosystem tools. It replicates the core experience of browsing restaurants, exploring menus, and managing a cart — all powered by real-time data from Swiggy's public APIs.

---

## ✨ Features

- 🏠 **Home Page** — Browse restaurants with live data from Swiggy API
- 🔍 **Search & Filter** — Find restaurants by name or cuisine type
- 🍕 **Restaurant Menu** — View full menu with item details and prices
- 🛒 **Cart Management** — Add/remove items with Redux-powered state management
- 📱 **Responsive Design** — Fully mobile-friendly UI built with Tailwind CSS
- 🧭 **Client-Side Routing** — Seamless navigation using React Router v6
- ✅ **Unit & Integration Tests** — Test coverage with Jest and React Testing Library

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Frontend Framework** | React 19 |
| **State Management** | Redux Toolkit + React Redux |
| **Styling** | Tailwind CSS v4 |
| **Routing** | React Router DOM v6 |
| **Bundler** | Parcel v2 |
| **Testing** | Jest + React Testing Library |
| **Transpiler** | Babel (preset-env, preset-react) |

---

## 📁 Project Structure

```
Potta_Penchara/
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Route-level page components
│   ├── store/             # Redux store, slices
│   ├── utils/             # Helper functions, constants, hooks
│   └── __tests__/         # Unit & integration tests
├── index.html             # App entry point
├── package.json
├── babel.config.js        # Babel transpilation config
├── jest.config.js         # Jest test runner config
├── .parcelrc              # Parcel bundler config
└── .postcssrc             # PostCSS / Tailwind config
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/bhanuprakashpindi-creator/Potta_Penchara.git

# 2. Navigate to the project directory
cd Potta_Penchara

# 3. Install dependencies
npm install
```

### Running the App

```bash
# Start development server
npm start
```

The app will be available at `http://localhost:1234` (Parcel's default port).

### Build for Production

```bash
npm run build
```

---

## 🧪 Testing

This project uses **Jest** and **React Testing Library** for testing.

### Test Types Covered

| Type | Description |
|---|---|
| **Unit Testing** | Tests individual components and utility functions in isolation |
| **Integration Testing** | Tests how multiple components work together |
| **End-to-End Testing** | (Planned) Tests complete user flows |

### Running Tests

```bash
# Run all tests once
npm test

# Run tests in watch mode with coverage report
npm run watch-test
```

### Testing Setup

The following packages were configured for testing:

- `@testing-library/react` — Component rendering utilities
- `@testing-library/jest-dom` — Custom DOM matchers
- `jest-environment-jsdom` — Browser-like environment for Jest
- `babel-jest` — Babel integration for Jest
- `@babel/preset-react` — JSX transformation in tests

---

## ⚙️ Scripts

| Script | Command | Description |
|---|---|---|
| Start | `npm start` | Launch dev server via Parcel |
| Build | `npm run build` | Production build |
| Test | `npm test` | Run test suite |
| Test Watch | `npm run watch-test` | Run tests in watch mode with coverage |

---

## 📦 Dependencies

### Production

| Package | Version | Purpose |
|---|---|---|
| `react` | ^19.2.3 | Core UI library |
| `react-dom` | ^19.2.3 | DOM rendering |
| `react-router-dom` | ^6.4.0 | Client-side routing |
| `@reduxjs/toolkit` | ^2.11.2 | State management |
| `react-redux` | ^9.2.0 | React bindings for Redux |
| `tailwindcss` | ^4.1.18 | Utility-first CSS framework |

### Development

| Package | Version | Purpose |
|---|---|---|
| `parcel` | ^2.16.3 | Zero-config bundler |
| `jest` | ^30.2.0 | Test runner |
| `@testing-library/react` | ^16.3.2 | React component testing |
| `@testing-library/jest-dom` | ^6.9.1 | DOM assertion matchers |
| `babel-jest` | ^30.2.0 | Babel transform for Jest |
| `@babel/preset-react` | ^7.28.5 | JSX support in Babel |

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## 👤 Author

**Bhanu Prakash Pindi**

- GitHub: [@bhanuprakashpindi-creator](https://github.com/bhanuprakashpindi-creator)

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 🙏 Acknowledgements

- Inspired by [Swiggy](https://www.swiggy.com/) — India's leading food delivery platform
- Built with ❤️ using the React ecosystem

---

> *"Potta Penchara" — bringing the Swiggy experience to your browser!* 🚀
