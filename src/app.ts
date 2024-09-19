import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import newsRoutes from './app/modules/news/news.router';

const app = express();


// Define the allowed origins
const allowedOrigins = [
  'https://staging.d33iveo2ig7ous.amplifyapp.com', 
  'https://staging.d1o23w9vuaoufu.amplifyapp.com'
];

const corsOptions = {
  origin: (origin:any, callback:any) => {
    if (allowedOrigins.includes(origin) || !origin) {
      // Allow the request if the origin is in the allowed list or it's a server-to-server request with no origin
      callback(null, true);
    } else {
      // Deny the request if the origin is not allowed
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // If you want to allow cookies or other credentials
};

app.use(cors(corsOptions));
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
