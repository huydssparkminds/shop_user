import CustomInput from "@/components/ui/CustomInput/CustomInput";
import style from "./style.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "flowbite-react";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useCart } from "react-use-cart";
import orderApi from "@/services/orderApi";
import { TypeOrder, TypeOrderSucess } from "@/models/model";
import { TABS } from "@/constant";

const orderSchema = Yup.object().shape({
  fname: Yup.string().required("thiếu thông tin"),
  lname: Yup.string().required("thiếu thông tin"),
  phone: Yup.string().required("thiếu thông tin"),
  email: Yup.string().email("Chưa đúng định dạng").required("thiếu thông tin"),
  address: Yup.string().required("thiếu thông tin"),
  country: Yup.string().required("thiếu thông tin"),
});

interface Props {
  setTabSelect: (tabId: number) => void;
  total: number;
  setOrderSucess: (data: TypeOrderSucess) => void;
}

const Checkout = ({ setTabSelect, total, setOrderSucess }: Props) => {
  const user = useSelector((state: RootState) => state.user.user);
  const { items, emptyCart } = useCart();

  type TypeOrderData = {
    fname: string;
    lname: string;
    phone: string;
    email: string;
    address: string;
    country: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(orderSchema),
  });

  const onSubmit = async (data: TypeOrderData) => {
    try {
      const today = new Date();
      const formattedDate = today.toISOString().split("T")[0];

      const checkoutData: TypeOrder = {
        invoice_date: formattedDate,
        user_id: user?.id,
        customer_name: data.lname,
        phone: data.phone,
        total: total,
        status: "Loading...",
        addrress: data.address,
        invoice_items: items.map((item) => ({
          product_id: item._id,
          name: item.title,
          price: item.price,
          quantity: item.quantity ?? 0,
          itemTotal: item.itemTotal ?? 0,
        })),
      };
      emptyCart();
      const response = await orderApi.checkout(checkoutData);
      setOrderSucess(response.data);
      setTabSelect(TABS[2].id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
    <div className={style.formInfo}>
        <div className={style.contact}>
          <h1>Contact Infomation</h1>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 ">
              <div className="w-full">
                <CustomInput
                  labelName="First Name"
                  name="fname"
                  placeholder="First name"
                  register={register}
                />
                {errors.fname && (
                  <small className="text-red-500">{errors.fname.message}</small>
                )}
              </div>
              <div className="w-full">
                <CustomInput
                  labelName="Last Name"
                  name="lname"
                  placeholder="Last name"
                  register={register}
                />
                {errors.lname && (
                  <small className="text-red-500">{errors.lname.message}</small>
                )}
              </div>
            </div>
            <div>
              <CustomInput
                labelName="Phone Number"
                name="phone"
                placeholder="Phone Number"
                register={register}
              />
  
              {errors.phone && (
                <small className="text-red-500">{errors.phone.message}</small>
              )}
            </div>
            <div>
              <CustomInput
                labelName="Email Address"
                name="email"
                placeholder="Email Address"
                register={register}
              />
              {errors.email && (
                <small className="text-red-500">{errors.email.message}</small>
              )}
            </div>
          </div>
        </div>
  
        <div className={style.shipping}>
          <h1>Shipping Address</h1>
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <CustomInput
                labelName="Street Address"
                name="address"
                placeholder="Street Address"
                register={register}
              />
              {errors.address && (
                <small className="text-red-500">{errors.address.message}</small>
              )}
            </div>
            <div className="w-full">
              <CustomInput
                labelName="Country"
                name="country"
                placeholder="Country"
                register={register}
              />
              {errors.country && (
                <small className="text-red-500">{errors.country.message}</small>
              )}
            </div>
          </div>
        </div>
    </div>

      <div className={style.btnOrder}>
        <Button type="submit" color={"dark"}>
          Place Order
        </Button>
      </div>
    </form>
  );
};

export default Checkout;
