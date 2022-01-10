module.exports = {
   // "parser": "@babel/eslint-parser",
    "env": {
      "browser": true,
      "es2021": true,
      "node": true
   },
   "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "prettier",
      // "standard"
   ],
   "parserOptions": {
      "ecmaVersion": "latest",
      "sourceType": "module",
      "ecmaFeatures": {
         "jsx": true
      }
   },
   "plugins": [
      "react",
      "prettier",
   ],
   "globals": {
      "arguments": true,
   },
   "rules": {
      // "prettier/prettier": ["error"],
      "react/jsx-max-props-per-line": 1
   }
};
