// packages
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import compression from 'compression';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import { Client } from 'pg';

// local imports
import routes from './routes/index.js';
import middlewares from './middlewares/index.js';

// variables
dotenv.config();
const baseUrl = '/api/v1';

// removes whitespace from payload
const { trimmerMiddleware } = middlewares;

// initialize express server
const app = express();

// Middlewares
app.use(express.json());
app.use(trimmerMiddleware);
app.use(cors());
app.use(compression()); // Compress all routes
app.use(helmet()); // Security middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Routes with base URl
app.use(`${baseUrl}`, routes);

app.get('/', (req, res) => {
  res.status(200).json({
    error: 'Welcome to TWITEE',
  });
});

// catch invalid routes
app.all('*', (req, res) => {
  res.status(404).json({
    error: 'This route does not exist yet!',
  });
});


const client = new Client({
  connectionString: 'postgres://vsuoyazvrvaaby:5b0ca9fee634c02dfb6145c537145d46ef90a01f56eb5d9a3797ada1c9f88c50@ec2-52-70-15-120.compute-1.amazonaws.com:5432/d6vdi121acnsqb',
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});



export default app;
