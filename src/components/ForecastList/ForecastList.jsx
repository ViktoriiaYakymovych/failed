import forecast from "../../data/forecast.json";

const WeatherForTripDays = () => {
  return (
    <section>
      <ul>
        {forecast.map((el) => {
          return (
            <li key={el.day}>
              <p>{el.day}</p>
              <img
                src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/1st%20Set%20-%20Monochrome/${el.icon}.png`}
                alt={el.icon}
              />
              <p>{el.temp} &deg;C</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default WeatherForTripDays;
