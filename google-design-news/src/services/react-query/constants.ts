export const defaultReactQuerySettings = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      staleTime: 90 * 10000, // 15 min
    },
  },
};
