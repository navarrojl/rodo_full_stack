'use strict';
import axios from 'axios';

export async function get(url, params) {
    let res = [];
    let request_params = { params : params };
    await axios
        .get(url, request_params)
        .then(response => (res = response.data))
        .catch(error => {
            if (error.response.message) {
                throw error.response.message;
            } else {
                throw error;
            }
        });
    return (Promise.resolve(res));   
}
