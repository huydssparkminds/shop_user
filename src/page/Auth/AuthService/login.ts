import authApi from "@/services/authApi";
import axios from "axios";
import { toast } from "react-toastify";

interface LoginPayLoad {
  username: string;
  password: string;
}

const login = async (payload: LoginPayLoad) => {
  try {
    const response = await authApi.login(payload);
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || 'Đã xảy ra lỗi');
      }
    } else {
      toast.error('Đã xảy ra lỗi không xác định');
    }
    return false;
  }
};

export { login };
