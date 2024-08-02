import style from "./styles.module.scss";
import logo from "@/assets/img/Logo.png";
import iconSearch from "@/assets/img/iconSearch.png";
import iconshopping from "@/assets/img/iconShopping.png";
import { FaBars } from "react-icons/fa6";
import iconUser from "@/assets/img/user-circle.png";
import Container from "@/components/block/container/Container";
import { NavRouter } from "@/router/route";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "react-use-cart";

const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const location = useLocation();
  const { totalUniqueItems } = useCart();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={clsx(style.header, { [style.scrolled]: scrolled })}>
      <Container className={style.content}>
        <div className={style.logo}>
          <Link to="/">
            <img src={logo} className={style.imgLogo} alt="" />
            <span>Cyrus</span>
          </Link>
        </div>

        <nav>
          <ul>
            {NavRouter.map((e, i) => (
              <li key={i}>
                <Link
                  className={clsx({
                    [style.linkActive]: location.pathname === e.path,
                  })}
                  to={e.path}>
                  {e.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={style.controlRight}>
          <button className={`${style.btnIcon} ${style.hideOnMobile}`}>
            <img src={iconUser} alt="" />
          </button>
          <button className={`${style.btnIcon} ${style.hideOnMobile}`}>
            <img src={iconSearch} alt="" />
          </button>
          <Link to='/cart' className={`${style.btnShopping} ${style.hideOnMobile}`}>
            <div className={style.totalCart}>{totalUniqueItems}</div>
            <img src={iconshopping} alt="" />
          </Link>

          <button className={style.btnBar}>
            <FaBars />
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
