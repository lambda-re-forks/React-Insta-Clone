import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Comment from "./Comment";
class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      comments: [],
      newComment: "",
      isLiked: false
    };
  }
  componentDidMount() {
    this.setState({ comments: this.props.comments, likes: this.props.likes });
  }
  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addNewComment = e => {
    e.preventDefault();
    const newComment = {
      username: "You",
      id: this.state.comments.length + 1,
      text: this.state.newComment
    };
    this.setState({
      comments: [...this.state.comments, newComment],
      newComment: ""
    });
  };
  addLike = e => {
    if (!this.state.isLiked) {
      this.setState(prevState => ({
        likes: prevState.likes + 1,
        isLiked: true
      }));
    } else {
      this.setState(prevState => ({
        likes: prevState.likes - 1,
        isLiked: false
      }));
    }
  };
  render() {
    // console.log(this.props);
    return (
      <>
        <div className="reactions">
          <button onClick={this.addLike}>
            <FontAwesomeIcon
              icon={this.state.isLiked ? ["fas", "heart"] : ["far", "heart"]}
            />
          </button>
          <button>
            <FontAwesomeIcon icon={["far", "comment"]} />
          </button>
          <p>{`${this.state.likes} likes`}</p>
        </div>
        {this.state.comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}
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
      </>
    );
  }
}

export default CommentSection;
