module.exports = {
   "parser": "babel-eslint",
    "env": {
      "browser": true,
      "es2021": true,
      "node": true
   },
   "extends": [
      "eslint:recommended",
      // "plugin:react/recommended",
      // "prettier",
      // "standard"
   ],
   "parserOptions": {
      "ecmaVersion": 2020,
      "sourceType": "module",
      "ecmaFeatures": {
         "jsx": true
      }
   },
   "plugins": [
      // "react",
      // "prettier",
   ],
   "globals": {
      "arguments": true,
   },
   "rules": {
      // "prettier/prettier": ["error"],
      // "react/jsx-max-props-per-line": 1,
      // "react/jsx-uses-vars": 2,
      "no-unused-vars": 0
   }
};
