import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Navigation } from "./components/Navigation";

import "./App.css";

export const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <Navigation />
      <div className="outlet">
        <Outlet />
      </div>
      <Navigation />
    </div>
  );
};
