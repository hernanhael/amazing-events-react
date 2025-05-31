import { Outlet } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './main-layout.scss'

export default function LayoutMain({ children }) {
  console.log(children)

  return (
    <div className="main-layout-container">
      <Header />
      <main className="main-layout">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
