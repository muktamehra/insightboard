import './ProductsPage.css'
import { useState } from 'react'

const products = [
  { id: 1, name: "Floral Midi Dress", category: "Dresses", price: "$65", stock: 23 },
  { id: 2, name: "Black Evening Dress", category: "Dresses", price: "$95", stock: 12 },
  { id: 3, name: "Classic White Tee", category: "Tops", price: "$25", stock: 45 },
  { id: 4, name: "Striped Knit Top", category: "Tops", price: "$38", stock: 30 },
  { id: 5, name: "Leather Biker Jacket", category: "Jackets", price: "$120", stock: 8 },
  { id: 6, name: "Wool Trench Coat", category: "Jackets", price: "$140", stock: 5 },
  { id: 7, name: "Mini Shoulder Bag", category: "Bags", price: "$50", stock: 18 },
  { id: 8, name: "Leather Tote Bag", category: "Bags", price: "$85", stock: 14 },
  { id: 9, name: "High Waist Jeans", category: "Pants", price: "$70", stock: 25 },
  { id: 10, name: "Wide Leg Trousers", category: "Pants", price: "$60", stock: 20 },
]

function ProductsPage() {
  const [search, setSearch] = useState('')

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="products-page">
      <div className="products-header">
        <h3>All Products</h3>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="table-search"
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>{p.price}</td>
              <td>
                <span className={`stock ${p.stock < 10 ? 'low' : 'ok'}`}>
                  {p.stock}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductsPage