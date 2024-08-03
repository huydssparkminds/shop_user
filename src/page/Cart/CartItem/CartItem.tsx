import { Button } from "flowbite-react";
import style from "./style.module.scss";
import { GoTrash } from "react-icons/go";
import { formatPrice } from "@/utils/toPrice";
// import { TypeCategory } from "@/models/model";

// type CartItemType = {
//   id: string;
//   title: string;
//   description: string;
//   price: number;
//   linkImg: string;
//   quantity: number;
//   category: TypeCategory;
// };

interface CartProps {
  item: any;
  updateItemQuantity: any;
  removeItem: any;
}

const CartItem = ({ item, updateItemQuantity, removeItem }: CartProps) => {
  return (
    <div className={style.item}>
      <div className={style.titleInfo}>
        <img alt="" src={item.linkImg} />
        <p>{item.title}</p>
      </div>
      <div className={style.quantity}>
        <Button.Group>
          <Button
            onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            color="gray">
            -
          </Button>
          <Button color="gray">{item.quantity}</Button>
          <Button
            onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            color="gray">
            +
          </Button>
        </Button.Group>
      </div>
      <div className={style.price}>{formatPrice(item.price)}</div>
      <div className={style.action}>
        <button onClick={() => removeItem(item.id)}>
          <GoTrash />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
