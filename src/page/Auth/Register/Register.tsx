import CustomInput from "@/components/ui/CustomInput/CustomInput";
import { REGEX_PASSWORD } from "@/constant";
import { RootState } from "@/redux/store";
import authApi from "@/services/authApi";
import {  useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button, Spinner } from "flowbite-react";

const userSchema = Yup.object().shape({
  email: Yup.string().email("Must be a valid email").required(),

  password: Yup.string().matches(
    REGEX_PASSWORD,
    "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number"
  ).required(),

  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match") // Loại bỏ null
    .required("Confirm password is required"),

  username: Yup.string()
    .min(8, "Username must be at least 8 characters long")
    .max(42, "Username must be less than 42 characters")
    .required("Username is required"),
});

  interface RegisterUser {
    password: string;
    email: string;
    confirmpassword: string;
    username: string;
  }


const Register = () => {

  const Navigate = useNavigate();
 
  const loading = useSelector((state: RootState) => state.user.loading);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema)
  });

  const onSubmit = async (data: RegisterUser) => {
    try {
        const response = await authApi.register(data)
        if(response.status === 200) {
          toast.success("tạo người dùng thành công")
          Navigate("/login")
        }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error.response?.data.data);
        toast.error(error.response?.data.data);
      } else {
        console.error(error);
      }
    }
 
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Register
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
                    name="email"
                    labelName="Your Email"
                    placeholder="Your Email"
                    register={register}
                    error={errors.email}
                  />
                </div>
                <div>
                  <CustomInput
                    name="password"
                    labelName="Password"
                    placeholder="*****"
                    type="password"
                    register={register}
                    error={errors.password}
                  />
                </div>
                <div>
                  <CustomInput
                    name="confirmpassword"
                    labelName="Confirm Password"
                    placeholder="******"
                    type="password"
                    register={register}
                    error={errors.confirmpassword}
                  />
                </div>

                <Button type="submit" className="mx-auto w-full">
                  {loading ? <Spinner /> : "Sign Up"}
                </Button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  You have account !
                  <Link
                    to="/login"
                    className="font-medium text-primary-600 hover:underline">
                    Sign in
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

export default Register;
