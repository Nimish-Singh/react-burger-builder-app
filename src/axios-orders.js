import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-67cc7.firebaseio.com'
});

export default instance;