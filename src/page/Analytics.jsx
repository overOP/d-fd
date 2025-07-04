

// import React from "react";
// import CartDataStats from "../components/CartDataStats";
// import useDashboard from "../Hook/useDashboard";

// import { FaTicketAlt, FaRegUser } from "react-icons/fa";
// import { GiAutoRepair } from "react-icons/gi";
// import { FaComputer } from "react-icons/fa6";
// import { ClipLoader } from "react-spinners";

// const Analytics = () => {
//   const { dashboardList, isLoading, error } = useDashboard();

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center mt-[30%]">
//         <ClipLoader size={40} color="#008000" />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="text-center text-red-500 mt-[30%]">
//         Error: {error.message}
//       </div>
//     );
//   }

//   return (
//     <main className="flex items-center justify-center min-h-screen p-4">
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
//         <CartDataStats
//           title="Quotations List"
//           total={dashboardList.quoatitionsList}
//           rate={`${dashboardList.percentages}%`}
//           levelCheck={dashboardList.quoatitionsList > 0}
//         >
//           <FaTicketAlt size={20} className="text-green-600" />
//         </CartDataStats>

//         <CartDataStats
//           title="Repair List"
//           total={dashboardList.repairList}
//           rate={`${dashboardList.repairPercentage}%`}
//           levelCheck={dashboardList.repairList > 0}
//         >
//           <GiAutoRepair size={20} className="text-green-600" />
//         </CartDataStats>

//         <CartDataStats
//           title="User List"
//           total={dashboardList.userList}
//           rate={`${dashboardList.userPercentage}%`}
//           levelCheck={dashboardList.userList > 0}
//         >
//           <FaRegUser size={20} className="text-green-600" />
//         </CartDataStats>

//         <CartDataStats
//           title="Spare Parts List"
//           total={dashboardList.spareList}
//           rate={`${dashboardList.sparePercentage}%`}
//           levelCheck={dashboardList.spareList > 0}
//         >
//           <FaComputer size={20} className="text-green-600" />
//         </CartDataStats>
//       </div>
//     </main>
//   );
// };

// export default Analytics;
