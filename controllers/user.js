
const User = require('../models/user')


exports.getDoctor = async (req,res) => {
    try{
        const data = await User.find({role:['Doctor']});
        
    
    }catch(e){
        return res.status(400).json({
            error: 'Server error'
          })
    }
}


exports.getUser = async (req,res) => {
    try{
        const data = await User.find({});
        return res.status(200).json(data)
    
    }catch(e){
        return res.status(400).json({
            error: 'Server error'
          })
    }
}