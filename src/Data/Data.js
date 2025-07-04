
import { FaHome, FaUser, FaCog, FaChartBar, FaSignOutAlt } from 'react-icons/fa';
import { MdShoppingCartCheckout } from "react-icons/md";

import { FaCartShopping } from "react-icons/fa6";

export const navData = [
//   {
//     name: 'Analytics',
//     path: '/',
//     icon: FaChartBar,
//   },
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
    name: 'Signup',
    path: '/signup',
    icon: FaSignOutAlt,
  },
  {
    name: 'Cart',
    path: '/cart',
    icon: MdShoppingCartCheckout,
  }
];