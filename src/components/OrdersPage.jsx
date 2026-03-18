import './OrdersPage.css'
import { useState } from 'react'

const orders = [
  { id: 1, customer: "Alice Johnson", product: "Leather Biker Jacket", amount: "$120", date: "Mar 1, 2026", status: "Completed" },
  { id: 2, customer: "Bob Smith", product: "Floral Midi Dress", amount: "$65", date: "Mar 3, 2026", status: "Pending" },
  { id: 3, customer: "Carol White", product: "Wool Trench Coat", amount: "$140", date: "Mar 5, 2026", status: "Completed" },
  { id: 4, customer: "David Brown", product: "Mini Shoulder Bag", amount: "$50", date: "Mar 7, 2026", status: "Cancelled" },
  { id: 5, customer: "Eva Green", product: "High Waist Jeans", amount: "$70", date: "Mar 9, 2026", status: "Completed" },
  { id: 6, customer: "Frank Lee", product: "Classic White Tee", amount: "$25", date: "Mar 11, 2026", status: "Pending" },
  { id: 7, customer: "Grace Kim", product: "Leather Tote Bag", amount: "$85", date: "Mar 13, 2026", status: "Completed" },
]

function OrdersPage() {
  const [search, setSearch] = useState('')

  const filteredOrders = orders.filter((o) =>
    o.customer.toLowerCase().includes(search.toLowerCase()) ||
    o.product.toLowerCase().includes(search.toLowerCase()) ||
    o.status.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="orders-page">
      <div className="orders-header">
        <h3>All Orders</h3>
        <input
          type="text"
          placeholder="Search orders..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="table-search"
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.customer}</td>
              <td>{o.product}</td>
              <td>{o.amount}</td>
              <td>{o.date}</td>
              <td>
                <span className={`status ${o.status.toLowerCase()}`}>
                  {o.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default OrdersPage