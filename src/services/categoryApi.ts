import axiosClient from "./axiosClient";

const categoryApi = {
    getAll(params: unknown){
        const url = '/category';
        return axiosClient.get(url , {params:params})
    },

    getById(id: string | number){
        const url = `/category/${id}`;
        return axiosClient.get(url)
    },

};
export default categoryApi;