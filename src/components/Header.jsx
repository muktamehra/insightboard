import './Header.css'

function Header({ activePage, darkMode, setDarkMode }) {
    const titles = {
    dashboard: 'Dashboard',
    users: 'Users',
    products: 'Products',
    orders: 'Orders'
  }

  return (
    <div className="header">
      <div className="header-left">
        <h1>{titles[activePage]}</h1>
        <p>Welcome back, Mukta 👋</p>
      </div>
      <div className="header-right">
        <span className="header-date">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        <button type="button" className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️' : '🌙'}
        </button>
        <div className="header-avatar">M</div>
      </div>
    </div>
  )
}

export default Header