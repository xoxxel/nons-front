import Articles from "@/components/articles";
import ArticleModel from "@/models/Article";
import axios from "axios";

const getData = async () => {
  let articles: { results: ArticleModel[] } = { results: [] };
  await axios
    .get("https://shop-f-v1.rubysa.ir/blog/")
    .then((res) => {
      articles = res.data;
    })
    .catch((err) => console.log(err));

  return articles;
};

const ArticlesPage = async () => {
  const articles = await getData();
  return <Articles articles={articles?.results} />;
};

export default ArticlesPage;
