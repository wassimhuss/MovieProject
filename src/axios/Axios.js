import axios from 'axios';

const instance= axios.create({
    baseURL: `https://api.themoviedb.org/3`,
    responseType: "json",
   
  });
 
  

  export default instance;
