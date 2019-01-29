module.exports = {
    "parser": "babel-eslint",
    "extends": [
        "react-app",
        "airbnb"
    ],
    "rules": {
        "semi": [2, "never"],
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/iframe-has-title": "off" 
    }
};