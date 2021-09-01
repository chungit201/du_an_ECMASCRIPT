import User from '../models/user'
import jwt from 'jsonwebtoken';
// const nodemailer = require("nodemailer");


// import sgMail from '@sendgrid/mail';
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// const expressJwt = require('express-jwt'); v

export const signup = (req, res) => {
    const user = new User(req.body);
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                error: 'Khong them duoc email'
            })
        }
        user.salt= undefined;
        user.hashed_password= undefined;
        res.json(user);
    })
};
exports.signin = (req, res) => {

    const { email, password } = req.body;
    User.findOne({ email }, (error, user) => {
        if (error || !user) {
            return res.status(400).json({
                error: 'Người dùng không tồn tại'
            })
        }
    
        if (!user.authenticate(password)) {
            return res.status(401).json({
                error: 'Email và mật khẩu không khớp'
            })
        }
        // Tự động tạo ra một mã cùng với user và mã secret
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        // persist the token as 't' in cookie with  
        res.cookie('t', token, { expire: new Date() + 9999 });
        // return response with user and token to frontend client
        const { _id, name, email, role } = user;
        return res.json(
            {
                token,
                user: { _id, email, name, role }
            }
        )
    })
};
export const signout = (req, res) => {
    res.clearCookie('t');
    res.json({
        message: 'Signout Success'
    })
}
