import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import NavBar from "../navigatie/navBar/NavBar";
import PostsPage from "../pages/postPage/PostsPage";
import PostDetailPage from "../pages/postDetailPage/PostDetailPage";
import CurrentUserNav from "../navigatie/currentUserNav/CurrentUserNav";
import ChangePostPage from "../pages/changePostPage/ChangePostPage";
import { AnimatePresence } from "framer-motion";

const PostsRoutes = () => {
  const location = useLocation()
  // Afzonderlijke switch voor de verschillende navbar versies en soon to be animated routes.
  return (
    <div>
      <NavBar soort="posts" />
      <CurrentUserNav />
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path="/posts/add" component={ChangePostPage} />
          <Route path="/posts/:id" component={PostDetailPage} />
          <Route path="/posts" exact component={PostsPage} />
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default PostsRoutes;
