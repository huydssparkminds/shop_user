import HomePage from "@/page/HomePage";
import Shop from "@/page/Shop/Shop";

export const PublicRoute = [
  {
    name: "Home",
    path: "/",
    link: true,
    component: HomePage,
  },
  {
    name: "Shop",
    path: "/shop",
    link: true,
    component: Shop,
  },
];


export const NavRouter = [
  {
    title : 'Home',
    path: '/'
  },
  {
    title : 'Shop',
    path: '/shop'
  },
  {
    title : 'Product',
    path: '/product'
  },
  {
    title : 'Contact Us',
    path: '/contactus'
  }
]