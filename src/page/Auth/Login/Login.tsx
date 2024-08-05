import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import type { TypeLoginUser } from "@/models/model";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setToken, setUser } from "@/redux/userSlice/UserSlice";
import { useNavigate } from "react-router-dom";
import { Spinner } from "flowbite-react";
import type { RootState } from "@/redux/store";
import authApi from "@/services/authApi";
import { toast } from "react-toastify";
import CustomInput from "@/components/ui/CustomInput/CustomInput";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const userSchema = Yup.object().shape({
  password: Yup.string().required("Password is required"),
  username: Yup.string().required("Username is required"),
});



export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.user.loading);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeLoginUser>({
    resolver: yupResolver(userSchema)
  });

  const onSubmit: SubmitHandler<TypeLoginUser> = async (data) => {
    dispatch(setLoading(true));
    try {
      const response = await authApi.login(data);
      if (response.status === 200) {
        dispatch(setUser(response.data.data.user));
        dispatch(setToken(response.data.data.token));

        localStorage.setItem(
          "userToken",
          JSON.stringify(response.data.data.token)
        );
        localStorage.setItem(
          "userInfo",
          JSON.stringify(response.data.data.user)
        );

        dispatch(setLoading(false));

        toast.success("Đăng Nhập Thành công");
        navigate("/");
      } else {
        toast.error("Đăng Nhập Không thành công");
        dispatch(setLoading(false));
      }
    } catch (error) {
      console.log(error);
      toast.error("Đăng Nhập Không thành công");
      dispatch(setLoading(false));
    }
  };
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Flowbite
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <CustomInput
                    name="username"
                    labelName="User Name"
                    placeholder="User Name"
                    register={register}
                    error={errors.username}
                  />
                </div>
                <div>
                <CustomInput
                    name="password"
                    labelName="Password"
                    placeholder="******"
                    register={register}
                    type="password"
                    error={errors.password}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 d"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 ">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline">
                    Forgot password?
                  </a>
                </div>
                <Button type="submit" className="mx-auto w-full">
                  {loading ? <Spinner /> : "Login"}
                </Button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?
                  <Link
                    to="/register"
                    className="font-medium text-primary-600 hover:underline">
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
