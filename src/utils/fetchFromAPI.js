import axios from 'axios';

const BASE_URL = 'https://youtube-v38.p.rapidapi.com/search/';

const options = {
  params: {
    q: 'despacito',
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
}