const API_KEY = "b145a9609df60ccb0b1cc2948bdc84ec";

export default async function getDataWeather (city) {
   fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
   .then(res => res.json())
   .then(data => data)
}