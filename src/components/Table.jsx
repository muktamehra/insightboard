import './Table.css'
import { useState } from 'react'

const transactions = [
  { id: 1, customer: "Alice Johnson", product: "Leather Biker Jacket", amount: "$120", status: "Completed" },
  { id: 2, customer: "Bob Smith", product: "Floral Midi Dress", amount: "$65", status: "Pending" },
  { id: 3, customer: "Carol White", product: "Wool Trench Coat", amount: "$140", status: "Completed" },
  { id: 4, customer: "David Brown", product: "Mini Shoulder Bag", amount: "$50", status: "Cancelled" },
  { id: 5, customer: "Eva Green", product: "High Waist Jeans", amount: "$70", status: "Completed" },
  { id: 6, customer: "Frank Lee", product: "Classic White Tee", amount: "$25", status: "Pending" },
  { id: 7, customer: "Grace Kim", product: "Leather Tote Bag", amount: "$85", status: "Completed" },
]

function Table() {
    const [search, setSearch] = useState('')

    const filteredTransactions = transactions.filter((t) =>
    t.customer.toLowerCase().includes(search.toLowerCase()) ||
    t.product.toLowerCase().includes(search.toLowerCase()) ||
    t.status.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="table-card">
        <div className='table-header'>
      <h3>Recent Transactions</h3>
      <input
          type="text"
          placeholder="Search transactions..."
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
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.customer}</td>
              <td>{t.product}</td>
              <td>{t.amount}</td>
              <td>
                <span className={`status ${t.status.toLowerCase()}`}>
                  {t.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table