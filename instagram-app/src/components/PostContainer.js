import React from "react";
import PropTypes from "prop-types";

import CommentSection from "./CommentSection";

const PostContainer = props => {
  // console.log(props);
  const { username, imageUrl, id, comments, likes, thumbnailUrl } = props;
  return (
    <article className="post">
<<<<<<< HEAD
      <header>
        <div className="post-user">
          <img src={imageUrl} alt={`${username} avatar`} />

          <p>{username}</p>
        </div>
=======
      <header className="post-user">
        <img src={thumbnailUrl} alt={`${username} avatar`} />
        <p>{username}</p>
>>>>>>> 50b1689280982528154931cff331daaa095a596c
      </header>
      <section className="post-content">
        <img alt="Post Content" src={imageUrl} />

        <div className="comments">
          <CommentSection comments={comments} likes={likes} />
        </div>
      </section>
    </article>
  );
};

PostContainer.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired
};

export default PostContainer;
