import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import newsRoutes from './app/modules/news/news.router';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', (req, res) => {
  res.send('Hello World');
});

// News Management Routes
app.use('/api/v1', newsRoutes);

// Export the app instead of starting the server
export default app;
