import axios from "axios";

export const baseUrl = 'https://krayedar.herokuapp.com/'
// export const baseUrl = 'https://65c5-39-37-141-181.ngrok.io/';
export default axios.create({
    baseURL: baseUrl
})