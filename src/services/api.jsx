import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://62a082eca9866630f810e915.mockapi.io/',
    headers: {
        'content-type': 'application/json',
    },
});

// axiosClient.interceptors.request.use(async (config) => {
//     config.headers = {
//         Authorization: `token`,
//     };
//     return config;
// });

export default axiosClient;
