import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styleSearchBox from './styleSearchBox';

function SearchBox(props) {
const classes = styleSearchBox();
const { handleChange } = props;
  return (
     <Box
        component="form"
        sx={{
           '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
     >
        <TextField
           id="standard-search"
           label="Search field"
           type="search"
           variant="standard"
           onChange={handleChange}
        />
     </Box>
  );
}

SearchBox.propTypes = {
   handleChange: PropTypes.func,
};

export default SearchBox;
