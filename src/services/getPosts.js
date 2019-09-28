import axios from 'axios';

const getPosts = () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        return response.data;
    })
    .catch(error => {
        return error;
    });
}

export default getPosts;