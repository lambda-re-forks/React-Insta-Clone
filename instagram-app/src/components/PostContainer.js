import React from "react";

const PostContainer = props => {
  const { username, imageUrl, id, comments, likes } = props;
  return (
    <article className="post">
      <header>
        <div className="post-user">
          <img src={imageUrl} alt={`${username} avatar`} />

          <p>{username}</p>
        </div>
      </header>
      <div className="post-image">
        <div className="post-image-bg">
          <img
            alt="Icon Living"
            src="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg"
          />
        </div>
      </div>
      <div className="post-caption">
        <strong>Chris</strong> Moving the community!
      </div>
    </article>
  );
};

export default PostContainer;
