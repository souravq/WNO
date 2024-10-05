import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import newsRoutes from './app/modules/news/news.router.js';
import serverless from 'serverless-http';

const app = express();

// Configure CORS to allow all origins
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));  // Handle preflight requests

app.use(bodyParser.json());

// News Management Routes
app.use('/api/v1', newsRoutes);

// app.listen(5000, () => {
//   console.log('Server started on port 5000');
// });

// Export the app instead of starting the server
export default app;

// Export the app for serverless
//module.exports.handler = serverless(app);
