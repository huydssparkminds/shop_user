export const SESSTION_USER = "user";
export const STORE_USER = sessionStorage.getItem("user");

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

export const PERPAGES = [8, 4 ,12, 24]

export const TABS = [
  {
    id: 1,
    name: 'Shopping Cart'
  },
  {
    id: 2,
    name: 'Checkout details'
  },
  {
    id: 3,
    name: 'Order Complete'
  },
]

export const BTN_SHIP = [
  {
    name: "Free shipping",
    cost: 0.00,
  },
  {
    name: "Express shipping",
    cost: 15.00,
  }
]