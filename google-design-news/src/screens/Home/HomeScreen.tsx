"use client";

import Header from "@/components/Header/Header";
import Presentation from "@/template/Presentation/Presentation";
import FeedNews from "./patterns/FeedNews";
import { useQuery } from "@tanstack/react-query";
import { getTopHeadlines } from "@/repositories/google-news/top-headlines";

const HomeScreen = () => {
  const { data: articles } = useQuery(["top-headlines-br"], () =>
    getTopHeadlines()
  );

  return (
    <>
      <Header />
      <Presentation />
      <FeedNews articles={articles || []} />
    </>
  );
};

export default HomeScreen;
