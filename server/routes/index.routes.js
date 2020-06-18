import express from 'express';

const indexRoute = express.Router();

//base url
indexRoute.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to TWITEE API (Version 1)',
  });
});

export default indexRoute;
