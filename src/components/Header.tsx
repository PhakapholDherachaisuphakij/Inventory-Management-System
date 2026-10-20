import { NavLink } from 'react-router-dom'

function Header() { return <header className="app-header"><h1>Inventory Management System</h1><p>React + TypeScript Practical Exam</p><nav className="main-nav"><NavLink end to="/">Dashboard</NavLink><NavLink to="/products">Products</NavLink><NavLink to="/products/p-1001">Product Details</NavLink><NavLink to="/products/new">Add Product</NavLink></nav></header> }

export default Header
