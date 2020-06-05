import React from "react";
import { Route } from "react-router-dom";
import NavBar from "../navigatie/navBar/NavBar";
import UserDetailPage from "../pages/userPage/UserDetailPage";

const UserRoutes = () => {
  // Afzonderlijke switch voor de verschillende navbar versies.
  return (
    <div>
      <NavBar soort="users" />
      <Route path="/users/:id" component={UserDetailPage} />
    </div>
  );
};

export default UserRoutes;
