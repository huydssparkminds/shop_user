export type TypeProduct = {
  _id: string;
  title: string;
  description: string;
  price: number;
  linkImg: string;
  category: TypeCategory;
};

export type TypeCategory = {
  name: string;
};

export type TypeUser = {
  username: string;
  password: string;
  email: string;
};
export type TypeInvoiceItem = {
  product_id: string;
  name: string;
  quantity: number;
  price: number;
  itemTotal: number;
};
export type TypeOrder = {
  user_id: string;
  invoice_date: string;
  customer_name: string;
  phone: string;
  total: number;
  status: string;
  addrress: string;
  invoice_items: TypeInvoiceItem[];
};

export type TypeLoginUser = {
  username: string;
  password: string;
};


export type TypeUserStore = {
  username: string;
  id: string;
  email: string;
};