import './Header.css'

function Header({ activePage }) {
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
        <span className="header-date">March 17, 2026</span>
        <div className="header-avatar">M</div>
      </div>
    </div>
  )
}

export default Header