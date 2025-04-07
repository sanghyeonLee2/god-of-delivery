import { QueryClient } from "react-query";
import { errorHandler } from "@utils/errorHandler";

const customQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      cacheTime: 30 * 60 * 1000,
      refetchOnWindowFocus: false,
      retry: 1,
      onError: (error) => errorHandler(error),
    },
    mutations: {
      onError: (error) => errorHandler(error),
    },
  },
});
export default customQueryClient;
