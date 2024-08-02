import axiosClient from "./axiosClient";

const sanphamApi = {
  getAll(params?: unknown) {
    const url = "/sanpham";
    return axiosClient.get(url, { params: params });
  },

  getById(id: string) {
    const url = `/sanpham/${id}`;
    return axiosClient.get(url);
  },

  checkout(data: unknown) {
    const url = `/sanpham/checkout`;
    return axiosClient.post(url, data);
  },

};
export default sanphamApi;
