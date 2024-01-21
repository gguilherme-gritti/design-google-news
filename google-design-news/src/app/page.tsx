import { getTopHeadlines } from "@/repositories/google-news/top-headlines";
import HomeScreen from "@/screens/Home/HomeScreen";
import getQueryClient from "@/services/react-query/service-query-client";
import { dehydrate } from "@tanstack/query-core";
import { Hydrate } from "@tanstack/react-query";

export default async function Home() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(["top-headlines-br"], () =>
    getTopHeadlines()
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <HomeScreen />
    </Hydrate>
  );
}
