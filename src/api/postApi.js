import axiosClient from "./axiosClient";


const PostApi = {
    getAll : (params) => {
        const url = '/posts';
        return axiosClient.get(url, { params });
    },
    get : (id) => {
        const url = `/posts/${id}`;
        return axiosClient.get(url);
    },
    create : (params) => {
        const url = '/posts';
        return axiosClient.post(url, {params})
    }
}
export default PostApi;