exports.isLoggedIn = (req, res, next)=>{
    if(req.user){
        next();

    }else{
        return res.send(401).send('Access Denied');
    }
}