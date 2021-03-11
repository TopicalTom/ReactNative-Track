import axios from 'axios';
//import { NGROK_URL } from '@env';

export default axios.create({
    baseURL: 'http://1cfb414b7518.ngrok.io'
});