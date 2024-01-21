import { news } from "@/services/axios/service-axios";

export type TArticle = {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};

export const getTopHeadlines = async (): Promise<TArticle[]> => {
  const { data } = await news().get<{
    status: string;
    articles: TArticle[];
    totalResults: number;
  }>("/top-headlines?country=br");

  return data.articles;
};
