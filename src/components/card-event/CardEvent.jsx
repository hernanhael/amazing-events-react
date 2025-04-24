import './cardevent.scss'

export default function CardEvent({ event }) {
  console.log(event)

  return (
    <article className="card-container">
      <img src={event.image} className="card-image"></img>
      <h2 className="card-title">{event.name}</h2>
    </article>
  )
}
