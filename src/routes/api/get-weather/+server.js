const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
		'X-RapidAPI-Key': 'a10d3839aamshc9bb7699c7dad99p1185b0jsn84d5135320aa'
	}
};

export async function GET (event) {
  const { searchParams } = event.url;
  const query = searchParams.get('q') ?? 'Facatativa';
  const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q= ${ query }`, FETCH_OPTIONS);

  const data = await response.json(); 
  
  const {location, current} = data;
  const {country, localtime, name} = location;
  const {condition, humidity, feelslike_c, is_day, temp_c, wind_kph, wind_dir, } = current
  const {text, icon} = condition 
  
  const body = {
    conditionText: text,
    conditionIcon: icon,
    country,
    localtime,
    locationName:name,
    humidity,
    isDay: is_day,
    feelsLike: feelslike_c,
    temperature: temp_c,
    windSpeed: wind_kph,
    winDir: wind_dir
  }


  return new Response (JSON.stringify({
    status: 200,
    body
  }))
}