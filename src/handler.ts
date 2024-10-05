// const serverless = require('serverless-http');
// const app = require('./src/app');

// module.exports.hello = serverless(app);

console.log("Handler file loaded correctly");

import serverless from 'serverless-http';
import app from './app.js'  // Ensure the file extension is provided for ES modules

export const hello = serverless(app);

