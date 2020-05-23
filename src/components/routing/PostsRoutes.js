import React from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "../navigatie/navBar/NavBar";
import PostsPage from "../pages/postPage/PostsPage";
import NotFound from "../pages/notFound/NotFound";
import PostDetailPage from "../pages/postDetailPage/PostDetailPage";


const PostsRoutes = () => {
  return (
    <div>
      <NavBar soort="posts"/>
      <Switch>
        <Route path="/posts/:id" component={PostDetailPage} />
        <Route path="/posts" exact component={PostsPage} />
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
};

export default PostsRoutes;
