import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { RiCustomerService2Fill, RiBook2Fill } from "react-icons/ri";
import { BiSolidCalendarPlus, BiSolidComponent } from "react-icons/bi";
import { TbReportAnalytics } from "react-icons/tb";
import { BsKanbanFill } from "react-icons/bs";

export const navData = [
  { name: "Products", path: "/products", icon: FaCartShopping },
  { name: "Cart", path: "/cart", icon: MdShoppingCartCheckout },
  { name: "Profile", path: "/profile", icon: FaUser },

  // customer
  { name: "Support", path: "/support", icon: RiCustomerService2Fill },
  { name: "Schedule", path: "/schedule", icon: BiSolidCalendarPlus },
  { name: "Knowledge Base", path: "/kb", icon: RiBook2Fill },

  // staff
  { name: "Spares", path: "/spares", icon: BiSolidComponent },
  { name: "Jobs", path: "/jobs", icon: BsKanbanFill },
  { name: "Dashboard", path: "/dashboard", icon: TbReportAnalytics },

  { name: "Logout", path: "/logout", icon: FaSignOutAlt },
];
