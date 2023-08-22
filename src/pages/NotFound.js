import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { routes } from "../constants";

export const NotFound = () => {
  const navigate = useNavigate();

  const coutAndNavigate = (a, b) => {
    console.log(a + b);
    navigate(routes.home);
  };

  return (
    <div>
      <h1>Your Page is Not Fond</h1>
      <Link to={routes.home}>Back to Home Page</Link>
      <button onClick={() => coutAndNavigate(123, 234)}>
        Count and navigate
      </button>
      <button onClick={() => navigate(1)}>Go back</button>
    </div>
  );
};
