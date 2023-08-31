import { Outlet } from "react-router-dom";
import HeaderBar from "../header/HeaderBar";

const MainLayout = () => {
  return (
    <>
      <header>
        <HeaderBar />
      </header>
      <main className="m-4">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
