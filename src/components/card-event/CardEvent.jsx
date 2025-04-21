import './cardevent.scss'

export default function CardEvent({ events }) {
  return (
    <article className="card-container">
      <h1>asa{events.events[0].name}</h1>
      <img src={events.events[0].image}></img>
    </article>
  )
}
