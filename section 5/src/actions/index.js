import axios from 'axios';
const API_KEY = 'ddcefa3e48c7fcfefba28b445d9d61cf';
const API_ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city)
{
    const url = `${API_ROOT_URL}&q=${city},in`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}