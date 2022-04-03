// Creear un archivo axios para las peticiones
import axios from 'axios';
import config from '../../config';

const movieDB = axios.create({
    baseURL: config.BASE_URL_MOVIE,
    params: {
        api_key: config.APY_KEY_MOVIE,
        language: 'es-ES'
    }
});

export default movieDB;