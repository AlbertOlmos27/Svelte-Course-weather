<script>
import { getWeatherFrom } from '../services/weather';
import WeatherFooter from '../components/weatherFooter.svelte';
import WeatherIcons from '../components/weather-icons.svelte';

const weatherPromise = getWeatherFrom();
console.log('weatherPromise :>> ', weatherPromise);
</script>

{#await weatherPromise then weather}
  <section>
    <h1><b>{weather.body.locationName}</b></h1>
    <h1>{weather.body.country}</h1>
    <h2>{weather.body.temperature}°</h2>
    <h3>☁{weather.body.conditionText}</h3>
    <h4><strong>Hour:</strong> {weather.body.localtime}</h4>
    <WeatherIcons text={weather.body.conditionText} icon={weather.body.conditionIcon}/>
  </section>
  <WeatherFooter/>
{/await}

<style>
  section {
    padding: 1.6rem;
  }
  h1, h2, h4 {
    font-weight: 300;
    color: #333;
    text-transform: uppercase;
  }
  h1 {
    padding: 1.6rem 0 0 0;
  }
  h2 {
    font-size: 12rem;
    padding: 0;
  }
  h3 {
    font-weight: 700;
    transform: rotate(-90deg);
    position: absolute;
    top: 5.6rem;
    right: 1.2rem;
  }
</style>