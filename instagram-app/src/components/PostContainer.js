import React from "react";

const PostContainer = props => {
  const { username, imageUrl, id, comments, likes } = props;
  return (
    <article className="post">
      <header>
        <div className="post-user">
          <div className="post-user-avatar">
            <img
              src="https://www.laravelnigeria.com/img/chris.jpg"
              alt="Chris"
            />
          </div>
          <div className="post-user-nickname">
            <span>Chris</span>
          </div>
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
