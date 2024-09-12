import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import newsRoutes from "../src/app/modules/news/news.router";

const app = express();

app.use(cors());
app.use(bodyParser.json());

// News Management Routes
app.use('/api/v1', newsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

