import axios from 'axios';
//import { NGROK_URL } from '@env';

export default axios.create({
    baseURL: 'http://f7101f16a4de.ngrok.io'
});