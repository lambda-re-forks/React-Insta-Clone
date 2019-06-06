import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CommentForm = props => {
  return (
    <form onSubmit={this.addNewComment}>
      <input
        type="text"
        name="newComment"
        value={this.state.newComment}
        onChange={this.handleChanges}
        placeholder="Add a comment..."
      />
      <button>
        <FontAwesomeIcon icon={["fas", "ellipsis-h"]} />
      </button>
    </form>
  );
};

export default CommentForm;
