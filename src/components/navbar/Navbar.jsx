import { Link } from 'react-router-dom'
import './navbar.scss'

export default function Navbar({ links }) {
  return (
    <nav className="header-navbar">
      <ul>
        {links.map(({ title, value }, index) => (
          <li key={index}>
            <Link to={value}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
