import React from "react";
import PropTypes from "prop-types";

const Comment = props => {
  const { username, text } = props.comment;
  return (
    <p>
      <span>{username}</span>
      {text}
    </p>
  );
};

Comment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string
};

export default Comment;
