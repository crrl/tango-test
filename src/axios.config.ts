import axios from 'axios';



const instance = axios.create({
  baseURL: 'http://localhost:8081/api/'
});

//TODO: Add if token needed.
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// instance.interceptors.request.use(config => {
  // To make modifications before the request goes out.
// });

// instance.interceptors.response.use(res => {
    // To make modifications after we get the response.
// });



export default instance;
