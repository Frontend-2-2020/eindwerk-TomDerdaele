import React from "react";
import { Route } from "react-router-dom";

import NavBar from "../navigatie/navBar/NavBar";
import UserDetailPage from "../pages/userPage/UserDetailPage";

const UserRoutes = () => {
  return (
    <div>
      <NavBar soort="users" />
      <Route path="/users/:id" component={UserDetailPage} />
    </div>
  );
};

export default UserRoutes;
