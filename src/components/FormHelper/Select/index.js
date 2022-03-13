import React from 'react'
import { InputLabel, Select, FormControl, FormHelperText  } from '@mui/material';
import PropTypes from 'prop-types'

const renderFromHelper = ({ touched, error }) => {
   if (!(touched && error)) {
      return
   } else {
      return <FormHelperText>{touched && error}</FormHelperText>
   }
}

const renderSelectField = ({
   input,
   label,
   meta: { touched, error },
   children,
   ...custom
}) => (
   <FormControl error={touched && error}>
      <InputLabel htmlFor="age-native-simple">Trạng Thái</InputLabel>
      <Select
         native
         {...input}
         {...custom}
         inputProps={{
            name: 'age',
            id: 'age-native-simple'
         }}
      >
         {children}
      </Select>
      {renderFromHelper({ touched, error })}
   </FormControl>
)

renderFromHelper.propTypes = {
   touched: PropTypes.bool,
   error: PropTypes.bool,
}

renderSelectField.propTypes = {
   label: PropTypes.string,
   input: PropTypes.object,
   meta: PropTypes.object,
   children: PropTypes.array,
}

export default renderSelectField;
