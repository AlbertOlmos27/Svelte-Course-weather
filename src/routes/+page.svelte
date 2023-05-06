<script>
import { getWeatherFrom } from '../services/weather';
import WeatherFooter from '../components/weatherFooter.svelte';
import WeatherIcon from '../components/weather-icons.svelte';

const weatherPromise = getWeatherFrom();
</script>

{#await weatherPromise then weather}
  <section>
    <h1>{weather.locationName}</h1>
    <h2>{weather.temperature}°</h2>
    <h3>☁{weather.conditionText}</h3>
    <WeatherIcon text={weather.conditionText} icon={weather.conditionIcon}/>
  </section>
  <WeatherFooter/>
{/await}

<style>
  section {
    padding: 1.6rem;
  }
  h1 {
    font-weight: 300;
    color: #333;
    text-transform: uppercase;
    padding: 1.6rem 0 0 0;
  }
  h2 {
    font-weight: 300;
    font-size: 12rem;
    color: #333;
    text-transform: uppercase;
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