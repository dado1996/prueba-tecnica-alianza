import axios from "axios";

export const getTrending = async (limit = 25) => { 
  return axios.get(
    `${import.meta.env.VITE_ENDPOINT}trending?api_key=${import.meta.env.VITE_API_KEY}&limit=${limit}`
  );
};

export const getSearch = async (word, limit = 25) => {
  return axios.get(
    `${import.meta.env.VITE_ENDPOINT}search?api_key=${import.meta.env.VITE_API_KEY}&q=${word}&limit=${limit}`
  );
}