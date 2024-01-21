import { useCallback } from "react";

const useClickViewMore = () => {
  const clickViewMore = useCallback((url: string) => {
    window.open(url || "");
  }, []);

  return {
    clickViewMore,
  };
};

export default useClickViewMore;
