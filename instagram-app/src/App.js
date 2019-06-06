import React from "react";
// FONTAWESONE
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faComment,
  faHeart,
  faUser,
  faCompass
} from "@fortawesome/free-regular-svg-icons";
import {
  faComment as solidfaComment,
  faHeart as solidfaHeart,
  faEllipsisH
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
// COMPONENTS
import Searchbar from "./components/Searchbar";
import PostContainer from "./components/PostContainer";
// STYLES and DATA
import "./SASS/index.scss";
import dummyData from "./dummy-data";

// We can now use these icons anywhere in app
library.add(
  faComment,
  faHeart,
  solidfaHeart,
  solidfaComment,
  faEllipsisH,
  faInstagram,
  faCompass,
  faUser
);

class App extends React.Component {
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
      <div className="App">
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
      </div>
    );
  }
}

export default App;
