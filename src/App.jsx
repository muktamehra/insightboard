import Sidebar from './components/Sidebar'
import Header from './components/Header'
import StatCard from './components/StatCard'
import Chart from './components/Chart'
import Table from './components/Table'
import './App.css'
import { useState, useEffect } from 'react'
import UsersPage from './components/UsersPage'
import ProductsPage from './components/ProductsPage'
import OrdersPage from './components/OrdersPage'

function App() {
  const [activePage, setActivePage] = useState('dashboard')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
  const saved = localStorage.getItem('darkMode')
  if (saved) setDarkMode(JSON.parse(saved))
}, [])

useEffect(() => {
  localStorage.setItem('darkMode', JSON.stringify(darkMode))
}, [darkMode])

  return (
    <div className={`app-layout ${darkMode ? 'dark' : ''}`}>
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="main-content">
        <Header activePage={activePage} />
        {activePage === 'dashboard' && (
          <>
            <div className="stats-row">
              <StatCard title="Total Users" value="120" icon="👤" />
              <StatCard title="Total Revenue" value="$24,500" icon="💰" />
              <StatCard title="Total Orders" value="340" icon="🛒" />
              <StatCard title="Products" value="56" icon="📦" />
            </div>
            <Chart />
            <Table />
          </>
        )}
        {activePage === 'users' && <UsersPage />}
        {activePage === 'products' && <ProductsPage />}
        {activePage === 'orders' && <OrdersPage />}
      </div>
    </div>
  )
}

export default App