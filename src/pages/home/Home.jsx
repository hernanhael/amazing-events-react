import MainLayout from '../../layouts/main/MainLayout'
import CardEvent from '../../components/card-event/CardEvent'
import './home.scss'

export default function Home({ events }) {
  console.log(events)

  return (
    <div className="home-container">
      <MainLayout>
        <section className="event-section">
          <h2>Events</h2>
          {events.events.map((event) => (
            <CardEvent event={event} key={event._id} />
          ))}
        </section>
      </MainLayout>
    </div>
  )
}
