import express, { Router } from 'express';
import cors from "cors";
import bodyParser from "body-parser";
import compression from "compression";

export default function expressApp(functionName) {

  const app = express()
  const port = 3000
  
  var mailerRouter = require("./mailer");

  const router = Router();
  router.use(cors());
  router.use(compression());
  router.use(bodyParser.json());
  router.use(bodyParser.urlencoded({ extended: true }));
const routerBasePath=process.env.NODE_ENV === 'dev'? `/${functionName}` : `/.netlify/functions/${functionName}/`;
  app.use(routerBasePath,router);
  
  router.use('/mailer',mailerRouter);
  router.get('/hello', (req, res) => res.send('Hello World!'));
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  return app;
};


