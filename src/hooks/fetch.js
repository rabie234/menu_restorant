import axios from "axios";

const urlApi = 'http://127.0.0.1:8000/api';

export const fetchApi =

axios.create({
   
    baseURL:urlApi,
   
   
})

