import axios from "axios";

export const baseUrl ='https://bayut.p.rapidapi.com'

export const fetchApi=async(url)=>{
    const {data} = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'ce392a73c5mshe631919e370edb7p172084jsn6b6a860cd2c2'
          }

    })
return data;
}

