import { TypeOrderSucess } from "@/models/model";
import Checkout from "@/page/Cart/Checkout/Checkout";
import OrderDetail from "@/page/Cart/OrderDetail/OrderDetail";
import CartProducts from "@/page/Cart/progress1/Index";

export const URL_SOCKET = "wss://stream.binance.com:9443/ws/btcusdt@ticker";

//REGEX

export const REGEX_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const REGEX_PASSWORD =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

// CateGORY

export const Options_category = [
  { id: 1, name: "All" },
  { id: 2, name: "Sofa" },
  { id: 3, name: "Chair" },
  { id: 4, name: "Lamp" },
];

// export const PERPAGES = [8, 4, 12, 24];

export const PERPAGES = [
  {
    id: 1,
    name: 8,
  },
  {
    id: 2,
    name: 4,
  },
  
  {
    id: 3,
    name: 12,
  },
  
  {
    id: 4,
    name: 24,
  },
  

];

interface TabProps {
  setTabSelect: (tabId: number) => void;
  setTotal: (total: number) => void;
  total: number;
  setOrderSucess: (data: TypeOrderSucess) => void;
  orderSucess: TypeOrderSucess | null;
}
interface Tab {
  id: number;
  name: string;
  component: React.ComponentType<TabProps>;
}
export const TABS: Tab[] = [
  {
    id: 1,
    name: "Shopping Cart",
    component: CartProducts,
  },
  {
    id: 2,
    name: "Checkout details",
    component: Checkout,
  },
  {
    id: 3,
    name: "Order Complete",
    component: OrderDetail,
  },
];

export const BTN_SHIP = [
  {
    name: "Free shipping",
    cost: 0.0,
  },
  {
    name: "Express shipping",
    cost: 15.0,
  },
];
