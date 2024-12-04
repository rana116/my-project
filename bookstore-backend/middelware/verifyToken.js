const jwt = require('jsonwebtoken');

function verifyToken(req,res, next){
    const token = req.headers['authorization'];
    if (!token) return res.sendStatus(403);

    jwt.verify(token.split(" ")[1],process.env.JWT_SECRET,(err,user)=>{
        if(err) return res.sendStatus(403);
        req.userId = user.id;
        req.role = user.role; //to have the role stored for other checks
        next();
    });

}
module.exports = verifyToken;