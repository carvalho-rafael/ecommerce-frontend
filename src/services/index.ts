import axios from  'axios';
import history from '../routes/history'

const api = axios.create({
    baseURL: 'http://localhost:3003'
});

api.interceptors.response.use(response => {
    return response;
 }, error => {
   if (error.response.status === 401) {
    console.log("não autorizado login")
    history.push('/login')
   }
   return error;
 });

export default api;
