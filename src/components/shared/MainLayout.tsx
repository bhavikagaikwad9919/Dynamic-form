import { Outlet } from "react-router-dom";
import HeaderNavBar from "../../pages/HeaderNav";

const MainLayout = () => {
  return (
    <div>
        <HeaderNavBar />
        <Outlet />
    </div>
  );
};

export default MainLayout;
