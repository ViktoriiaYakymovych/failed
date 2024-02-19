import axios from "axios";

axios.defaults.baseURL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
const API_KEY = "E4W5RGXKFH3UTAD62NKRRA3L3";

export const fetchCityWeatherForToday = async (city = "Berlin") => {
  try {
    const { data } =
      await axios.get(`/${city}/today?unitGroup=metric&include=days
&key=${API_KEY}&contentType=json`);
    console.log(data);
  } catch (error) {
    if (error.code !== "ERR_CANCELED") {
      console.log(error.message);
    }
  }
};

export const fetchCityWeatherForDays = async (
  city = "Berlin",
  startDate = "2024-02-20",
  endDate = "2024-02-25",
) => {
  try {
    const { data } = await axios.get(
      `/${city}/${startDate}/${endDate}?unitGroup=metric&include=days&key=${API_KEY}&contentType=json`
    );
    console.log(data);
  } catch (error) {
    if (error.code !== "ERR_CANCELED") {
      console.log(error.message);
    }
  }
};

/* request FROM DATE TO DATE for the city:
https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[city]/[date1]/[date2]?unitGroup=metric&amp;include=days&amp;key=YOUR_API_KEY&amp;contentType=json

for example:
https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK/2020-10-01/2020-12-31?key=YOUR_API_KEY 
*/

/*
request for today's weather in the city:
https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[city]/today?unitGroup=metric&amp;include=days
&amp;key=YOUR_API_KEY&amp;contentType=json


*/
