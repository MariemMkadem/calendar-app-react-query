import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

const client = axios.create({
    baseURL: API_URL,
  //  headers: { Authorisation: `Bearer ${API_TOKEN}` }
});

export default client;
