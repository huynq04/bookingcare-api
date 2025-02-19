const corsOptions = {
  origin: process.env.URL_CLIENT,
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

module.exports = { corsOptions };
