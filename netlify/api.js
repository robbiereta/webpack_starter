import express, { Router } from 'express';

export async function handler(event, context) {

  const app = express()
  const port = 3000
  
  var mailerRouter = require("./mailer");

  const router = Router();
  router.get('/hello', (req, res) => res.send('Hello World!'));
  app.use('/api/', router);
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  return serverless(app)(event, context);
};


