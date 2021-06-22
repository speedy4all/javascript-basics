import React, { useCallback, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import SearchButton from "./search-button";
import {TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton} from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';

export default function SearchView({ search, setSearch }) {
  const searchRef = useRef(null);

  useEffect(() => {

  }, []);

  useEffect(() => {
    console.log("render SearchView");
  }, [search, setSearch]);

  const onClick = useCallback(() => setSearch(""), [setSearch]);

  return (
    <div>
        <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Search post</InputLabel>
            <OutlinedInput
                ref={searchRef}
                id="outlined-adornment-password"
                type="text"
                value={search}
                onChange={({ target: { value } }) => setSearch(value)}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={onClick}
                            onMouseDown={() => {}}
                            edge="end"
                        >
                            <ClearIcon />
                        </IconButton>
                    </InputAdornment>
                }
                labelWidth={70}
            />
        </FormControl>
    </div>
  );
}

SearchView.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
};
