import React from 'react'

const validate = (values) => {
   const errors = [];
   const {title, description} = values;
   if (!title){
      errors.title = 'vui long nhap tieu de';
   } else if (title.trim() && title.length < 5){
      errors.title = 'tieu de phai tu 5 ki tu';
   }
  return errors;
}

export default validate
