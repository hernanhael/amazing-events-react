import './navbar.scss'

export default function Navbar({ links }) {
  console.log(links)

  return <nav>{links.map((link) => link.title)}</nav>
}
