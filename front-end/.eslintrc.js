module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".js"] }],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "import/prefer-default-export": "off",
    "no-return-assign": "off",
    "no-underscore-dangle": "off",
    "no-param-reassign": "off",
    "no-shadow": "off",
    "no-unused-vars": "off",
    "no-return-await": "off",
    "prefer-template": "off",
    "sort-imports": "off",
    "import/order": "off",
    "import/no-cycle": "off",
    "import/no-named-as-default": "off",
    "spaced-comment": "off",
    "prefer-destructuring": "off",
    "consistent-return": "off",
    "no-else-return": "off",

    // React-specific
    "react/prop-types": "off",
    "react/jsx-sort-props": "off",
    "react/jsx-curly-brace-presence": "off",
    "react/function-component-definition": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-no-useless-fragment": "off",
    "react/jsx-boolean-value": "off",

    // Accessibility (a11y)
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/label-has-associated-control": "off",
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["components", "./src/components"],
          ["pages", "./src/pages"],
        ],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
    react: {
      version: "detect",
    },
  },
};
