import Avatar from './Avatar'

function Card(props) {
  return (
    <div className="card">
      <Avatar img={props.img}/>
      <div className="details">
        <h2>{props.name}</h2>
        <div className="card-half">
          <h4>{props.phone}</h4>
          <h4>{props.email}</h4>
          <h4>{props.address}</h4>
        </div>
      </div>
    </div>
  );
}

export default Card;
