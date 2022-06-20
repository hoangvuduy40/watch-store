import axiosClient from './api';

const getAllPro = () => {
    return axiosClient.get(`/product`);
};
const getDetailPro = (id) => {
    return axiosClient.get(`/product/${id}`);
};
const getAllBlog = () => {
    return axiosClient.get('/blog');
};
const addCart = (prodcut) => {
    return axiosClient.post('/cart', prodcut);
};

export { getAllPro, getAllBlog, getDetailPro, addCart };
