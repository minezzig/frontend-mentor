import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
