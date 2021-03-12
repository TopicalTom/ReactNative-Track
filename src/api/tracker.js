import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { NGROK_URL } from '@env';

const instance = axios.create({
    baseURL: 'http://13859f80e5a9.ngrok.io'
});

// Automatically adds the JWT Token to all API requests
instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;