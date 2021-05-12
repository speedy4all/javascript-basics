import React, { useCallback, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import SearchButton from "./search-button";

export default function SearchView({ search, setSearch }) {
  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  useEffect(() => {
    console.log("render SearchView");
  }, [search, setSearch]);

  const onClick = useCallback(() => setSearch(""), [setSearch]);

  return (
    <div>
      <label htmlFor="searchInput">Search post</label>
      <input
        ref={searchRef}
        id="searchInput"
        onChange={({ target: { value } }) => setSearch(value)}
        value={search}
      />
      <SearchButton onClick={onClick} />
    </div>
  );
}

SearchView.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};
