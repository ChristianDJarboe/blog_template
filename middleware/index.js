
const jwt = require('jsonwebtoken')

const logger = (req, res, next) => {
  console.log(`${req.path} ${new Date().toISOString()}`)
  next()
}

const authenticate = (req, res, next) => {
  console.log("header")
  console.log();
  var token = req.headers.token
  console.log(token);
  if(token !=undefined){
    for(let i=0;i<token.length;i++){
      if(token.charAt(i)=='='){
        token = token.substring(i+1);
        //console.log(token);
  
      }
    }
    try {
      const decoded = jwt.verify(token, process.env.BCRYPT_SECRET)
      //console.log(decoded);
      req.user = decoded
      next()
    } catch(err) {
      res.sendStatus(401)
    }
  }else{
    console.log("forbidden");
    res.sendStatus(403)
  }
  
}

module.exports = {
  logger,
  authenticate
}
