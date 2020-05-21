import React from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "../navigatie/navBar/NavBar";
import PostsPage from "../pages/postsPage/PostsPage";
import NotFound from "../pages/notFound/NotFound";


const PostsRoutes = () => {
  return (
    <div>
      <NavBar soort="general" kleur={"#26284A"}/>
      <Switch>
        <Route path="/posts" exact component={PostsPage} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
};

export default PostsRoutes;