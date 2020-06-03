import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  deletePost,
  setEditPost,
  deleteComment,
  setEditComment,
} from "../../../../redux/actions/postActions";
import {
  DELETE_POST,
  SET_EDIT_POST,
  DELETE_COMMENT,
  SET_EDIT_COMMENT,
} from "../../../../redux/actions/actionTypes";
import "./DeleteChangeButton.css"

const DeleteChangeButton = (props) => {
  const { auth, buttonData, buttonText, clickFunctie, doorverwijsPath }= props;

  const history = useHistory();

  const functionHandler = () => {
    if (clickFunctie === DELETE_POST) {
      props.deletePost(buttonData.id, (path) => {
        history.push(path);
      }, doorverwijsPath);
    } else if (clickFunctie === SET_EDIT_POST) {
      props.setEditPost(buttonData);
      history.push("/posts/add");
    } else if (clickFunctie === DELETE_COMMENT) {
      props.deleteComment(buttonData.id);
    } else if (clickFunctie === SET_EDIT_COMMENT) {
      props.setEditComment(buttonData);
    }
  };

  return (
    <Fragment>
      {buttonData.user_id === auth.id ? (
        <button onClick={functionHandler} className="dinosaur delete-change-button">
          {buttonText}
        </button>
      ) : null}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth.currentUser,
});

DeleteChangeButton.propTypes = {
  buttonData: PropTypes.object.isRequired,
  buttonText: PropTypes.string.isRequired,
  clickFunctie: PropTypes.oneOf([
    DELETE_POST,
    SET_EDIT_POST,
    DELETE_COMMENT,
    SET_EDIT_COMMENT,
  ]).isRequired,
  doorverwijsPath: PropTypes.string,
};

export default connect(mapStateToProps, {
  deletePost,
  setEditPost,
  deleteComment,
  setEditComment,
})(DeleteChangeButton);
