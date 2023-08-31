import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";

const HorizontalLayout = () => {
  return (
    <section className="flex gap-10">
      <aside className="w-3/12">
        <Sidebar />
      </aside>
      <div className="w-9/12">
        <Outlet />
      </div>
    </section>
  );
};

export default HorizontalLayout;
