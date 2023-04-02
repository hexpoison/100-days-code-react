import Image from './Image'

function Card() {
  return (
    <div className="card">
      <h3>Title/Day</h3>
      <h4>Temperature</h4>
      <Image />
      <h4>Description</h4>
    </div>
  )
}

export default Card;
