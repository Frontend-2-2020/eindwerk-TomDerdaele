import React from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "../navigatie/navBar/NavBar";
import PostsPage from "../pages/postPage/PostsPage";
import PostDetailPage from "../pages/postDetailPage/PostDetailPage";
import ErrorPage from "../pages/errorPage/ErrorPage";


const PostsRoutes = () => {
  return (
    <div>
      <NavBar soort="posts"/>
      <Switch>
        <Route path="/posts/:id" component={PostDetailPage} />
        <Route path="/posts" exact component={PostsPage} />
        <Route component={ErrorPage}/>
      </Switch>
    </div>
  );
};

export default PostsRoutes;
