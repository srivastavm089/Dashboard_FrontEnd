import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
const Nav = () => {
  const auth = localStorage.getItem("data");
  const {name} = auth || {};
   console.log(name)
  const navigate = useNavigate();
  const logout = () => {
    console.log("logout");
    localStorage.clear(); 
  };

  return (
    <div>
      <div
        className="nav-par"
        style={!auth ? { justifyContent: "flex-end" } : null}
      >
        {auth ? (
          <div>
            {" "}
            <NavLink to="/">Home Page</NavLink>
            <NavLink to="/add">Add Product</NavLink>
            <NavLink to="/update/">Update Product</NavLink>
      
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/login" onClick={logout}>
              Logout {auth.name}
            </NavLink>
          </div>
        ) : (
          <div>
            <div>
              <NavLink to="/login">Login</NavLink>{" "}
              <NavLink to="/signup">Sign Up</NavLink>
            </div>{" "}
          </div>
        )}
      </div>
    </div>
  );
};
export default Nav;
