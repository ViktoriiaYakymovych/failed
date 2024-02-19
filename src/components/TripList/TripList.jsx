const TripList = ({ cities }) => {
  return (
    <section>
      <ul>
        {cities.map(({ city, img, startDate, endDate }) => {
          return (
            <li key={city}>
              <img
                src="https://www.berlin.de/binaries/asset/image_assets/8215661/ratio_4_3/1686824224/800x600/"
                alt={city}
                width="240"
                height="240"
              />
              <p>{city}</p>
              <p>
                {startDate} - {endDate}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TripList;
