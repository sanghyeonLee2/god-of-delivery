module.exports = {
  env: {
    browser: true, // 브라우저 환경
    es2021: true, // 최신 ES 문법 지원
    node: true, // Node.js 환경 추가
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "airbnb", // Airbnb 스타일 가이드 적용
    "plugin:prettier/recommended", // Prettier와 ESLint 충돌 방지
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error", // Prettier 규칙 위반 시 ESLint 오류로 표시
    "react/react-in-jsx-scope": "off", // Next.js 사용 시 불필요한 오류 방지
    "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".js"] }], // JSX 파일 확장자 허용
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "react/prop-types": "off", // PropTypes 강제하지 않음 (TypeScript 사용 시)
    "sort-imports": [
      "error",
      { ignoreCase: true, ignoreDeclarationSort: false },
    ],
    "react/jsx-sort-props": [
      "error",
      { callbacksLast: true, shorthandFirst: true },
    ],
    "sort-keys": ["error", "asc", { caseSensitive: false, natural: true }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
