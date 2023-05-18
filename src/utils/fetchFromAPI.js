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
}





        // const BASE_URL = 'https://youtube-v38.p.rapidapi.com/search/';
        
        // const options = {
        //   params: {
        //     q: 'despacito',
        //     hl: 'en',
        //     gl: 'US'
        //   },
        //   headers: {
        //     'X-RapidAPI-Key': '310540b092msh0f9d4016eae731ap1128b3jsnf1f45b86313f',
        //     'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
        //   }
        // };
        
        // export const fetchFromAPI = async (url) => {
        //     const { data } = await axios.get(`${BASE_URL}/${url}`, options);
        
        //     return data;
        // }