const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

router.post('/register', async (req, res) =>{
    const {username, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = new User({username, password: hashedPassword});
    try
    {await newUser.save();
    res.status(201).json({message: 'user registered!'});}
    catch(err){
        res.status(400).json({message: err.message});
    }
});

router.post('/login', async (req, res)=> {
    const{username, password} =req.body;
    try
    {const user = await User.findOne({username});
    if(!user || !(await bcrypt.compare(password, user.password))){
        return res.status(401).json({message: 'Invalid Credentials'});
    }
    const token = jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET);
    res.json({token});
    } catch(err){
        res.status(500).json({message: err.message});
    }

});