import axios from 'axios';

const BASE_URL = 'https://youtube-v38.p.rapidapi.com/search/';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
    }
  };

export const response = async (q) => {
    const newOption = {
        ...options,
        params: {
            hl: 'en',
            q: q
        }
    }
    const { data } = await axios.request(`${BASE_URL}`, newOption);

    return data;
};


const options2 = {
    method: 'GET',
    url: 'https://youtube-v38.p.rapidapi.com/channel/videos/',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
    }
  };

  export const channelVideos = async (id) => {
    const newOption = {
        ...options2,
        params: {
            id,
            hl: 'en',
            gl: 'US'
        },
    }
    const { data } = await axios.request(newOption);

    return data;
};

const options3 = {
    method: 'GET',
    url: 'https://youtube-v38.p.rapidapi.com/channel/details/',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
    }
  };

  export const channelDetails = async (id) => {
    const newOption = {
        ...options3,
        params: {
            id,
            hl: 'en',
            gl: 'US'
        },
    }
    const { data } = await axios.request(newOption);

    return data;
};
  
const options4 = {
    method: 'GET',
    url: 'https://youtube-v38.p.rapidapi.com/video/details/',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
    }
  };

  export const videoDetails = async (id) => {
    const newOption = {
        ...options4,
        params: {
            id,
            hl: 'en',
            gl: 'US'
        },
    }
    const { data } = await axios.request(newOption);

    return data;
};

const options5 = {
    method: 'GET',
    url: 'https://youtube-v38.p.rapidapi.com/video/related-contents/',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
    }
  };

  export const relatedVideos = async (id) => {
    const newOption = {
        ...options5,
        params: {
            id,
            hl: 'en',
            gl: 'US'
        },
    }
    const { data } = await axios.request(newOption);

    return data;
};