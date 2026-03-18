import './UsersPage.css'
import { useState } from 'react'

const users = [
  { id: 1, name: "Alice Johnson", email: "alice@email.com", role: "Admin", status: "Active" },
  { id: 2, name: "Bob Smith", email: "bob@email.com", role: "User", status: "Active" },
  { id: 3, name: "Carol White", email: "carol@email.com", role: "User", status: "Inactive" },
  { id: 4, name: "David Brown", email: "david@email.com", role: "Editor", status: "Active" },
  { id: 5, name: "Eva Green", email: "eva@email.com", role: "User", status: "Active" },
  { id: 6, name: "Frank Lee", email: "frank@email.com", role: "User", status: "Inactive" },
  { id: 7, name: "Grace Kim", email: "grace@email.com", role: "Editor", status: "Active" },
]

function UsersPage() {
  const [search, setSearch] = useState('')

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase()) ||
    u.role.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="users-page">
      <div className="users-header">
        <h3>All Users</h3>
        <input
          type="text"
          placeholder="Search users..."
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
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                <span className={`status ${u.status.toLowerCase()}`}>
                  {u.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsersPage