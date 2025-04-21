import './navbar.scss'

export default function Navbar({ links }) {
  return <nav>{links.map((link) => link.title)}</nav>
}
