import React, { memo } from "react";

function SearchButton({ onClick }) {

  return <button onClick={onClick}>Clear</button>;
}

SearchButton.propTypes = {};

export default memo(SearchButton);
