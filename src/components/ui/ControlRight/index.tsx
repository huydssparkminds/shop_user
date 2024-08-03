import style from "./style.module.scss";
import iconSearch from "@/assets/img/iconSearch.png";
import iconshopping from "@/assets/img/iconShopping.png";
import iconUser from "@/assets/img/user-circle.png";
import { logout } from "@/redux/userSlice/UserSlice";
import { Dropdown } from "flowbite-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const ControlRight = () => {
  const { totalUniqueItems } = useCart();

  const isLoggin = useSelector((state: RootState) => state.user.isLoggin);
  const dispatch = useDispatch();

  const renderIcon = () => {
    if (isLoggin) {
      return (
        <Dropdown.Item onClick={() => dispatch(logout())} key="signout">
          <p>Sign out</p>
        </Dropdown.Item>
      );
    } else {
      return (
        <Dropdown.Item key="login">
          <Link to='/login'>Login</Link>
        </Dropdown.Item>
      );
    }
  };

  return (
    <>
      <Dropdown
        arrowIcon={false}
        label={
          <img
            className={`${style.btnIcon} ${style.hideOnMobile}`}
            src={iconUser}
            alt=""
          />
        }
        inline>
        <Dropdown.Item key="account">My Account</Dropdown.Item>
        <Dropdown.Divider />
        {renderIcon()}
      </Dropdown>
      <button className={`${style.btnIcon} ${style.hideOnMobile}`}>
        <img src={iconSearch} alt="" />
      </button>
      <Link to="/cart" className={`${style.btnShopping} ${style.hideOnMobile}`}>
        <div className={style.totalCart}>{totalUniqueItems}</div>
        <img src={iconshopping} alt="" />
      </Link>
    </>
  );
};

export default ControlRight;
