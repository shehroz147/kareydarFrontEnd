import axios from "axios";

// export const baseUrl = "https://5e2c-2400-adc5-1ba-9900-821-631f-aa7a-e964.in.ngrok.io/";
export const baseUrl = 'https://krayedar.herokuapp.com/'
// export const baseUrl = 'https://cc09-103-151-43-109.ngrok.io';
export default axios.create({
    baseURL: baseUrl,
});
