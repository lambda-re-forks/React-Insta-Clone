import React from "react";
import Searchbar from "./Searchbar";
import PostContainer from "./PostContainer";
import dummyData from "../dummy-data";

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filtered: [],
      searchValue: ""
    };
  }
  componentDidMount() {
    this.setState({ data: dummyData });
  }
  search = e => {
    this.setState({ searchValue: e.target.value });
    const filtered = this.state.data.filter(el =>
      el.username.includes(e.target.value)
    );
    this.setState({ filtered });
  };
  render() {
    return (
      <>
        <header>
          <Searchbar
            search={this.search}
            searchValue={this.state.searchValue}
          />
        </header>
        <main>
          {this.state.filtered.length === 0
            ? this.state.data.map(data => (
                <PostContainer {...data} key={data.id} />
              ))
            : this.state.filtered.map(data => (
                <PostContainer {...data} key={data.id} />
              ))}
        </main>
      </>
    );
  }
}

export default PostsPage;
