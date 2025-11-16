function Card({ title, current, previous, color }) {
  return (
    <div className="card" style={{ '--color': color }}>
      <div className="card-bg"></div>
      <div className="card-content">
        <h3>{title}</h3>
        <p className="hours">{current}hrs</p>
        <p className="previous">Yesterday - {previous}hrs</p>
      </div>
    </div>
  );
}

export default Card;