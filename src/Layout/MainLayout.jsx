import React from "react";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <>
      <div className="flex h-screen w-screen overflow-hidden">
        <header>
            <Sidebar/>
        </header>
        <div className="flex flex-col flex-1 h-full overflow-auto  bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-800/90">
          <div className="flex-1">
            <main>
              <ToastContainer />
              <Outlet />
            </main>
          </div>
          <footer></footer>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
