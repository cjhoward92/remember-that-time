module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
    "flowtype"
  ],
  "env": {
    "browser": true,
    "node": true  
  },
  "rules": {
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "import/no-unresolved": "off"
  }
};