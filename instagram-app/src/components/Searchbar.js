import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = props => {
  return (
    <div>
      <FontAwesomeIcon icon={["fab", "instagram"]} className="fa-5x" />
      <form>
        <input
          type="text"
          name="search"
          placeholder="Search"
          value={props.searchValue}
          onChange={props.search}
        />
      </form>
      <div className="icons">
        <FontAwesomeIcon icon={["far", "compass"]} />
        <FontAwesomeIcon icon={["far", "heart"]} />
        <FontAwesomeIcon icon={["far", "user"]} />
      </div>
    </div>
  );
};

export default SearchBar;
