import React from "react";
import { NavLink } from "react-router-dom";

import { routes } from "../constants";

export const Navigation = () => {
  return (
    <div>
      <NavLink to={routes.home}>Home Page</NavLink>
      <NavLink to={routes.books}>Books Page</NavLink>
    </div>
  );
};
