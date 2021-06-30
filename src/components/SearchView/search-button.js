import React, { memo } from "react";

function SearchButton({ onClick }) {
  return <button onClick={onClick} data-testid="clear-button">Clear</button>;
}

SearchButton.propTypes = {};

export default memo(SearchButton);
