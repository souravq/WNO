import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import newsRoutes from './app/modules/news/news.router';

const app = express();


// Configure CORS
const corsOptions = {
  origin: [
      'https://staging.d33iveo2ig7ous.amplifyapp.com',
      'https://staging.d1o23w9vuaoufu.amplifyapp.com'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

app.options('*', cors(corsOptions));  // Handle preflight requests

app.use(bodyParser.json());

// app.use('/', (req, res) => {
//   res.send('Hello World');
// });

// News Management Routes
app.use('/api/v1', newsRoutes);

app.listen(5000, () => {
  console.log('Server started on port 5000');
});

// Export the app instead of starting the server
export default app;
