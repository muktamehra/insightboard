# 📊 InsightBoard — Admin Dashboard

A modern admin analytics dashboard built with React, featuring data visualization, dark mode, and multi-page navigation.
Designed to simulate a real-world admin panel with data insights and management features.

🔗 ## 🌐 Live Demo
https://insightboard-seven.vercel.app
---

## Features

- 📊 **Dashboard** — stat cards, line chart, bar chart, and recent transactions
- 📊 **Data Visualization** — interactive charts using Recharts
- 👤 **Users Page** — searchable users table with role and status indicators
- 📦 **Products Page** — searchable products table with low stock alerts
- 🛒 **Orders Page** — searchable orders table with status badges
- 🌙 **Dark Mode** — toggle with localStorage persistence
- ⏳ **Loading Spinner** — smooth loading state on app start
- 🔍 **Search** — filter data on every page
- 📅 **Dynamic Date** — always shows today's date

---

## Tech Stack

- **React** — component-based UI
- **Vite** — fast build tool and dev server
- **Recharts** — line and bar charts
- **CSS** — custom styling, no UI libraries
- **localStorage** — dark mode persistence
- **Vercel** — deployment and hosting

---

## Getting Started

### Prerequisites
- Node.js installed

### Installation
```bash
git clone https://github.com/muktamehra/insightboard.git
cd insightboard
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## Project Structure
```
src/
├── components/
│   ├── Sidebar.jsx        # Navigation sidebar
│   ├── Header.jsx         # Header with dark mode toggle
│   ├── StatCard.jsx       # Summary stat cards
│   ├── Chart.jsx          # Line and bar charts
│   ├── Table.jsx          # Transactions table
│   ├── UsersPage.jsx      # Users management page
│   ├── ProductsPage.jsx   # Products management page
│   └── OrdersPage.jsx     # Orders management page
├── App.jsx                # Main app logic and routing
├── App.css                # Global styles and dark mode
└── index.css              # CSS reset
```

---

## React Concepts Used

| Concept | Where Used |
|---|---|
| `useState` | Active page, dark mode, loading, search |
| `useEffect` | localStorage persistence, loading timer |
| Props | Passing state between components |
| Conditional Rendering | Page switching, loading state |
| Array Methods | `filter`, `map` for search and lists |

---

## Deployment

Deployed on Vercel with automatic deployments on every push to `main`.

---

## Author

**Mukta Mehra**
[GitHub](https://github.com/muktamehra)

---

## License

This project is open source and available under the MIT License.