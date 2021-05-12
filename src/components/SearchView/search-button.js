import React, { memo } from "react";

function SearchButton({ onClick }) {
  console.log('render SearchButton');

  return <button onClick={onClick}>Clear</button>;
}

SearchButton.propTypes = {};

export default memo(SearchButton);