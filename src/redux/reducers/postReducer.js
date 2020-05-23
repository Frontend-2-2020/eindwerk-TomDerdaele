import {
  GET_POSTS,
  GET_POSTDETAIL,
  WEG_POSTDETAIL,
  DELETE_POST,
  ADD_POST,
  SET_EDIT_POST,
  CLEAR_SET_EDIT_POST,
  EDIT_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  SET_EDIT_COMMENT,
  EDIT_COMMENT,
} from "../actions/actionTypes";

const initialState = {
  allposts: [],
  postDetail: null,
  postDetailComments: null,
  setPostForEdit: null,
  setCommentForEdit: null,
};

const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //POSTS
    case GET_POSTS:
      return {
        ...state,
        allposts: payload,
      };
    case DELETE_POST:
      return {
        ...state,
        allposts: state.allposts.filter((post) => post.id !== payload),
      };
    case ADD_POST:
      return {
        ...state,
        allposts: [payload, ...state.allposts],
      };
    case SET_EDIT_POST:
      return {
        ...state,
        setPostForEdit: payload,
      };
    case EDIT_POST:
      return {
        ...state,
        allposts: state.allposts.map((post) =>
          post.id === payload.id ? payload : post
        ),
        setPostForEdit: null
      };
    case CLEAR_SET_EDIT_POST:
      return {
        ...state,
        setPostForEdit: null,
      };

    //POSTDETAIL
    case GET_POSTDETAIL:
      return {
        ...state,
        postDetail: payload,
        postDetailComments: payload.comments,
      };
    case WEG_POSTDETAIL:
      return {
        ...state,
        postDetail: null,
        postDetailComments: null,
      };

    // COMMENTS
    case ADD_COMMENT:
      return {
        ...state,
        postDetailComments: [payload, ...state.postDetailComments],
      };
    case DELETE_COMMENT:
      return {
        ...state,
        postDetailComments: state.postDetailComments.filter(
          (comment) => comment.id !== payload
        ),
      };
    case SET_EDIT_COMMENT:
      return {
        ...state,
        setCommentForEdit: payload,
      };
    case EDIT_COMMENT:
      return {
        ...state,
        postDetailComments: state.postDetailComments.map((comment) =>
          comment.id === payload.id ? payload : comment
        ),
        setCommentForEdit: null,
      };

    // NIETS OM TE WIJZIGEN
    default:
      return state;
  }
};

export default postReducer;
