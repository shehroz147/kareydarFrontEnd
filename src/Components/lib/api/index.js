import axios from 'axios';
import { Platform } from 'react-native';
import auth from './auth';
const apiClient = axios.create({
    baseURL:
        Platform.OS === 'android'
            // ? 'http://192.168.1.5:4000/'
            // : 'http://0.0.0.0:4000/',
            ? 'https://krayedar.herokuapp.com/'
            : 'https://krayedar.herokuapp.com/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
    },
});

export function fetchUserData(params) {
    return new Promise((resolve, reject) => {
        apiClient
            .post('user/userData', {
                id: params.id
            })
            .then(res => {
                // console.log()
                resolve(res.data)
            })
            .catch(err => {
                reject(err);
            });
    });
}


export function fetchPost(url, params) {
    return new Promise((resolve, reject) => {
        console.log(url, params);
        apiClient
            .post(url, params)
            .then(res => {
                console.log('response data after post', res.data);
                resolve(res.data);
            })
            .catch(err => {
                console.log('error after post', err, url);
                reject(err);
            });
    });
}

export function onDefaultLogin(params) {
    console.log(params);
    return new Promise((resolve, reject) => {
        apiClient
            .post('user/login', {
                email: params.email,
                password: params.password,
            })
            .then(res => {
                // console.log('login res', res.data);
                resolve(res.data);
            })
            .catch(err => {
                console.log('login error', err);
                reject(err);
            });
    });
}

export function fetchUserDataById(params) {
    return new Promise((resolve, reject) => {
        apiClient
            .get('get_user_by_id/' + params.id, {
                headers: {
                    'auth-token': params.auth_token,
                },
            })
            .then(res => {
                // console.log('response data after post', res.data);
                resolve({ user: res.data, token: params.auth_token });
            })
            .catch(err => {
                console.log('error after post', err);
                reject(err);
            });
    });
}
