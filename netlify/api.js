exports.handler = async function (event, context) {
  const express = require('express')
  const app = express()
  const port = 3000
  
  var mailerRouter = require("./mailer");
  
  app.use('/mailer',mailerRouter)
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  return serverless(app)(event, context);
};


