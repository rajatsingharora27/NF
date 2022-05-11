import axios from 'axios';


// https://api.themoviedb.org/3/movie/550?api_key=b02145582b7b0be6c40a846c3acb041e


const instance =axios.create({
    baseURL:"https://api.themoviedb.org/3"
});

export default instance;