import React from "react";
import "./SASS/index.scss";
import Searchbar from "./components/Searchbar";
import PostContainer from "./components/PostContainer";
import dummyData from "./dummy-data";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    this.setState({ data: dummyData });
  }
  render() {
    return (
      <div className="App">
        <header>
          <Searchbar />
        </header>
        <main>
          {this.state.data.map(data => (
            <PostContainer {...data} key={data.id} />
          ))}
        </main>
      </div>
    );
  }
}

export default App;
