import axios from "axios";

// export const baseUrl = "https://law-back.herokuapp.com/";
export const baseUrl = 'https://krayedar.herokuapp.com/'// export const baseUrl = 'https://cc09-103-151-43-109.ngrok.io/';
export default axios.create({
    baseURL: baseUrl,
});
