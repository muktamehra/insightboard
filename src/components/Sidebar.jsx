import './Sidebar.css'

function Sidebar({ activePage, setActivePage }) {
  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">InsightBoard</h2>
      <nav className="sidebar-nav">
        <a href="#" className={`nav-item ${activePage === 'dashboard' ? 'active' : ''}`} onClick={() => setActivePage('dashboard')}>📊 Dashboard</a>
        <a href="#" className={`nav-item ${activePage === 'users' ? 'active' : ''}`} onClick={() => setActivePage('users')}>👤 Users</a>
        <a href="#" className={`nav-item ${activePage === 'products' ? 'active' : ''}`} onClick={() => setActivePage('products')}>📦 Products</a>
        <a href="#" className={`nav-item ${activePage === 'orders' ? 'active' : ''}`} onClick={() => setActivePage('orders')}>🛒 Orders</a>
      </nav>
    </div>
  )
}

export default Sidebar