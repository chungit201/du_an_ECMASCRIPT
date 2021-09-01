import User from '../models/user'

export const listUser =(req,res)=>{
    User.find((err,data)=>{
        if(err){
            return res.status(400).json({
                error: 'Loi server'
            })
        }
        res.json(data);
    })
}