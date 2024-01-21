"use client";

import Button from "@/components/Button/Button";
import useClickViewMore from "../hooks/use-click-view-more";

const ButtonViewMore = ({ url }: { url: string }) => {
  const { clickViewMore } = useClickViewMore();

  return (
    <Button variant="primary" onClick={() => clickViewMore(url)}>
      Ver mais
    </Button>
  );
};

export default ButtonViewMore;
