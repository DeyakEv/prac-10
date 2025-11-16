import Card from './Card';

function Cards({ data, period }) {
  const colors = ['#009a8fff', '#009a8fff', '#009a8fff', '#009a8fff', '#009a8fff', '#009a8fff'];

  return (
    <section className="cards">
      {data.map((item, index) => {
        const { current, previous } = item.timeframes[period];
        return (
          <Card
            key={item.title}
            title={item.title}
            current={current}
            previous={previous}
            color={colors[index]}
          />
        );
      })}
    </section>
  );
}

export default Cards;