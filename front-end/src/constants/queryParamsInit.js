const QUERY_PARAMS_INIT = {
  STORES: [
    { value: "page", defaultValue: 1 },
    {
      value: "keyword",
      defaultValue: null,
    },
    { value: "sorting", defaultValue: "basic" },
  ],
  ONLY_PAGE: [{ value: "page", defaultValue: 1 }],
};

export default QUERY_PARAMS_INIT;
