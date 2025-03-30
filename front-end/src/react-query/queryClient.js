import { QueryClient } from "react-query";

const customQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      /*onError: (error) => errorHandler(error),*/
    },
    mutations: {
      /*  onError: (error) => errorHandler(error),*/
    },
  },
});
export default customQueryClient;
