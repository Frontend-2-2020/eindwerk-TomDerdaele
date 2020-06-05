import { API } from "../../API";
import {
  GET_POSTS,
  GET_POSTDETAIL,
  WEG_POSTDETAIL,
  DELETE_POST,
  ADD_POST,
  EDIT_POST,
  SET_EDIT_POST,
  CLEAR_SET_EDIT_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  SET_EDIT_COMMENT,
  EDIT_COMMENT,
  ERROR,
} from "./actionTypes";

// ALLE POSTS OPHALEN
export const getPosts = (page) => {
  return function (dispatch) {
    API.get(
      page && page > 1
        ? `api/posts?page=${page}`
        : "api/posts"
    ).then((response) => {
      dispatch({
        type: GET_POSTS,
        payload: response.data,
      });
    })
    .catch(() => {
      dispatch({
        type: ERROR,
        payload: "Sorry mate, something went wrong!",
      });
    });
  };
};

// DELETE EIGEN POST
export const deletePost = (id, doorverwijzen, doorverwijsPath) => {
  return function (dispatch) {
    API.delete(`api/posts/${id}`).then((response) => {
      dispatch({
        type: DELETE_POST,
        payload: id,
      });
      doorverwijzen(doorverwijsPath);
    });
  };
};

// ADD POST
export const addPost = (values, user, doorverwijzen) => {
  return function (dispatch) {
    API.post("api/posts", values).then((response) => {
      dispatch({
        type: ADD_POST,
        payload: {...response.data, user},
      });
      doorverwijzen("/posts");
    });
  };
};

// SET EDIT HANDLER om post in de values van formik te duwen.
export const setEditPost = (postDetailInfo) => {
  return {
    type: SET_EDIT_POST,
    payload: postDetailInfo
  }
}
// SET EDIT OPKUISEN opkuis na edit of cancel van edit.
export const clearSetEdit = () => {
  return { type: CLEAR_SET_EDIT_POST };
};

// EDIT POST
export const editPost = (values, user, doorverwijzen) => {
  return function (dispatch) {
    API.put(`api/posts/${values.id}`, values).then((response) => {
      dispatch({
        type: EDIT_POST,
        payload: {...response.data, user},
      });
      doorverwijzen(`/posts/${values.id}`);
    });
  };
};

// POSTDETAIL OPHALEN
export const getPostDetail = (id) => {
  return function (dispatch) {
    API.get(`api/posts/${id}`).then((response) => {
      dispatch({
        type: GET_POSTDETAIL,
        payload: response.data,
      });
    })
    .catch(() => {
      dispatch({
        type: ERROR,
        payload: "This blable does not exist",
      });
    });
  };
};

// POSTDETAIL OPKUISEN om geen data verspringing te hebben.
export const clearPostDetail = () => {
  return { type: WEG_POSTDETAIL };
};

// ADD COMMENT
export const addComment = (blog_post_id, values, user) => {
  return function (dispatch) {
    API.post("api/comments", {
      blog_post_id: blog_post_id,
      body: values.body
    }).then((response) => {
      dispatch({
        type: ADD_COMMENT,
        payload: { ...response.data, user },
      });
    });
  };
};

// DELETE EIGEN COMMENT
export const deleteComment = (id) => {
  return function (dispatch) {
    API.delete(`api/comments/${id}`).then((response) => {
      dispatch({
        type: DELETE_COMMENT,
        payload: id,
      });
    });
  };
};

// SET EDIT COMMENT HANDLER om comment in de values van formik te duwen
export const setEditComment = (comment) => {
  return {
    type: SET_EDIT_COMMENT,
    payload: comment
  }
}

// EDIT COMMENT
export const editComment = (values, user) => {
  return function (dispatch) {
    API.put(`api/comments/${values.id}`, values).then((response) => {
      dispatch({
        type: EDIT_COMMENT,
        payload: {...response.data, user},
      });
    });
  };
};
