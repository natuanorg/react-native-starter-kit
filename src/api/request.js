import axios from 'axios';
/**
 * Create an Axios Client with defaults
 * @type {AxiosInstance}
 */
const client = axios.create({
    baseURL: 'https://api.myjson.com',
    headers: {
        'Accept': 'application/json',
        'Cache-Control': 'no-cache',
    },
});

//Set Timeout
client.defaults.timeout = 10000;

// client.interceptors.response.use(function (response) {
//     return response;
// }, function (error) {
//     return Promise.reject(error);
// });

/**
 * Request wrapper with default success/error actions
 * @param url
 * @param method
 * @param data
 * @returns {Promise<*>}
 */
const request = async ({url, method = 'get', data}) => {
    console.log(`\nurl: ${url} \nmethod: ${method} \ndata: ${JSON.stringify(data)}`);
    try {
        // let token = getToken();
        // let headers = _.isEmpty(token) ? {} : {Authorization: `Bearer ${token}`};
        const response = await client({url, method, data}); //, headers
        return response.data;
    } catch (error) {
        let errorCode;
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            // console.error(error.response.data);
            // console.error(error.response.status);
            // console.error(error.response.headers);
            const statusCode = error.response.status;
            errorCode = `HTTP/${statusCode}`;
            switch (statusCode) {
                case 401:
                    store.dispatch(logoutUser());
                    break;
                default:
                    break;
            }
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            // console.error(error.request);
            errorCode = `LOCAL1`;
        } else {
            // Something happened in setting up the request that triggered an Error
            // console.error('Error', error.message || 'error');
            errorCode = `LOCAL2`;
        }
        return {errorCode, data: null, message: error.message || 'error'};
    }
};

export default request;
