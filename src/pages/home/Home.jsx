import MainLayout from '../../layouts/main/MainLayout'
import CardEvent from '../../components/card-event/CardEvent'
import './home.scss'

export default function Home({ events }) {
  console.log(events)

  return (
    <div className="home-container">
      <MainLayout>
        <CardEvent events={events} />
      </MainLayout>
    </div>
  )
}
