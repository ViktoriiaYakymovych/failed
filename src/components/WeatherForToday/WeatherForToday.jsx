import React from "react";
import TimeLeftToTrip from "../TimeLeftToTrip/TimeLeftToTrip";

const WeatherForToday = () => {
  return (
    <aside>
      <section>
        <p>Sunday</p>
        <div>
          <img src="" alt="" />
          <p>
            24 <sup>&deg;C</sup>
          </p>
        </div>
        Berlin
      </section>
      <TimeLeftToTrip />
    </aside>
  );
};

export default WeatherForToday;
