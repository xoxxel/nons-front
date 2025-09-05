import { Container, Grid } from "@mui/material";
import Article from "./article";
import ArticleModel from "@/models/Article";

const Articles = ({ articles }: { articles: ArticleModel[] }) => {
  return (
    <Container>
      <Grid container spacing={2} sx={{ my: 8 }}>
        {articles.map((article) => (
          <Grid item xs={12} sm={6} md={4}>
            <Article article={article} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Articles;
