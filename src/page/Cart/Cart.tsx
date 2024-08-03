import Container from "@/components/block/container/Container";
import style from "./style.module.scss";
import Tabs from "./Tabs/Tabs";
import { BTN_SHIP, TABS } from "@/constant";
import { useMemo, useState } from "react";
import { formatPrice } from "@/utils/toPrice";
import clsx from "clsx";
import CartItem from "./CartItem/CartItem";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    // isEmpty,
    totalUniqueItems,
    items,
    // totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    // emptyCart
  } = useCart();

  const [selectShip, setSlectShip] = useState<number>(BTN_SHIP[0].cost);

  const total = useMemo(() => {
    return cartTotal + selectShip
  },[selectShip,cartTotal])

  return (
    <Container className={style.cartPage}>
      <h1 className={style.title}>Cart</h1>
      <Tabs tabs={TABS} />

      <div className={style.header}>
        <p>Shopping Cart</p>
        <p>#{totalUniqueItems}</p>
      </div>
      <div className={style.main}>
        <div className={style.cartProduct}>

          {items.map((item, index) => (
            <CartItem
              key={index}
              item={item}
              updateItemQuantity={updateItemQuantity}
              removeItem={removeItem}
            />
          ))}
        </div>

        <div className={style.cartSumary}>
          <h2>Cart Sumary</h2>
          <div className={style.shipp}>
            {BTN_SHIP &&
              BTN_SHIP.map((e, i) => (
                <button
                  key={i}
                  onClick={() => setSlectShip(e.cost)}
                  className={clsx(style.btnShipping, {
                    [style.btnShipSelect]: e.cost === selectShip,
                  })}>
                  <span>{e.name}</span>
                  <span>{formatPrice(e.cost)}</span>
                </button>
              ))}
          </div>
          <div className={style.subtotal}>
            <p>Subtotal</p>
            <p className="font-bold">${cartTotal.toFixed(2)}</p>
          </div>
          <div className={style.total}>
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <div className={style.btnCheckout}>
            <button>Check out</button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
