import React from 'react';
import PostsSlider from './postSlider/PostsSlider';
import "./PostsPage.css"

const PostsPage = () => {
  return (
    <section className="posts-page-container">
      <PostsSlider/>
    </section>
  );
};

export default PostsPage;