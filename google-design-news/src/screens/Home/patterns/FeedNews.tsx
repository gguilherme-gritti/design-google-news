import { TArticle } from "@/repositories/google-news/top-headlines";
import * as S from "../styles";
import CardContent from "@/components/CardContent/CardContent";
import moment from "moment";

const FeedNews = ({ articles }: { articles: TArticle[] }) => {
  return (
    <S.Container>
      {articles?.map((article) => (
        <CardContent
          key={article.title}
          heading={article.author}
          subtitle={moment(article.publishedAt).format("DD/MM/YYYY")}
          text={article.title}
          buttonLabel="Ver mais"
        />
      ))}
    </S.Container>
  );
};

export default FeedNews;
