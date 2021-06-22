import React, { memo } from "react";
import { Button } from '@material-ui/core';

function SearchButton({ onClick }) {
  console.log('render SearchButton');

  return <Button color="primary" onClick={onClick}>Clear</Button>;
}

SearchButton.propTypes = {};

export default memo(SearchButton);