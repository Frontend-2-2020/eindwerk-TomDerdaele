import React from "react";
import "./PostDetailPage.css";
import testdetaildata from "./testDetail";

const PostDetailPage = () => {
  const post = testdetaildata;

  return (
    <div className="postdetail-page-container">
      <div className="grid-container">
        <div className="grid-container__titel">
          <h1>{post.title}</h1>
        </div>
        <div className="grid-container__name">
          <p>
            {post.user.first_name} {post.user.last_name}
          </p>
          <p>{post.user.created_at}</p>
        </div>
        <div className="grid-container__body">
          <p>{post.body}</p>
        </div>
        <div className="grid-container__commenttitel">
          <h2>COMMENTS</h2>
        </div>
        <div className="grid-container__comment">
          <input type="text" />
          <div>
            <p>{post.comments[0].body}</p>
            <p>
              {post.comments[0].user.first_name}{" "}
              {post.comments[0].user.last_name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailPage;
