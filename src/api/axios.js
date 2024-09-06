import axios from 'axios';
const BASE_URL = 'https://ensijuniorentreprise.com';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

export const BaseUrl = 'https://ensijuniorentreprise.com/api';

export const BaseUrlContact = 'https://ensijuniorentreprise.com';

