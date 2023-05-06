export async function getWeatherFrom (query = 'Facatativa') {
  return fetch(`/api/get-weather?q=${query}`).then(res => res.json())
};


