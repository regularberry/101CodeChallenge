import axios from 'axios';

// This API key should normally be hidden
export default axios.create({
    baseURL: 'https://pixabay.com/api',
    params: {
        'key': '19593574-3662fa7648029ed9d18d4b8a7',
    }
});