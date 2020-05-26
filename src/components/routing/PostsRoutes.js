import React from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "../navigatie/navBar/NavBar";
import PostsPage from "../pages/postPage/PostsPage";
import PostDetailPage from "../pages/postDetailPage/PostDetailPage";
import CurrentUserNav from "../navigatie/currentUserNav/CurrentUserNav";
import ChangePostPage from "../pages/changePostPage/ChangePostPage";


const PostsRoutes = () => {
  return (
    <div>
      <NavBar soort="posts"/>
      <CurrentUserNav/>
      <Switch>
        <Route path="/posts/add" component={ChangePostPage} />
        <Route path="/posts/:id" component={PostDetailPage} />
        <Route path="/posts" exact component={PostsPage} />
      </Switch>
    </div>
  );
};

export default PostsRoutes;
