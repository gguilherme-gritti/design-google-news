import { TArticle } from "@/repositories/google-news/top-headlines";
import * as S from "../styles";
import CardContent from "@/components/CardContent/CardContent";
import moment from "moment";
import ButtonViewMore from "./ButtonViewMore";

const FeedNews = ({ articles }: { articles: TArticle[] }) => {
  return (
    <S.Container>
      {articles?.map((article) => (
        <CardContent
          key={article.title}
          heading={article.author}
          subtitle={moment(article.publishedAt).format("DD/MM/YYYY")}
          text={article.title}
          button={<ButtonViewMore url={article.url} />}
        />
      ))}
    </S.Container>
  );
};

export default FeedNews;
