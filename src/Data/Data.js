import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";

 export const navData = [
   {
     name: 'Products',
     path: '/products',
     icon: FaCartShopping,
   },
   {
     name: 'Profile',
     path: '/profile',
     icon: FaUser,
   },
   {
     name: 'Cart',
     path: '/cart',
     icon: MdShoppingCartCheckout,
   },
  {
    name: 'Logout',
    path: '/logout',
    icon: FaSignOutAlt,
  },
 ];
