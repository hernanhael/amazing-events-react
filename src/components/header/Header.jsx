import Logo from '../logo/Logo'
import Navbar from '../navbar/Navbar'
import { LINKS } from '../../utils/enums'
import './header.scss'

export default function Header() {
  return (
    <>
      <Logo />
      <Navbar links={LINKS} />
    </>
  )
}
