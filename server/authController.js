const User = require('./models/User')
const Role = require('./models/Role')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {validationResult} = require('express-validator')
const {secret} = require("./config")

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"} )
}


class authController{
    async registration(req, res) {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(492).json({message: "Пароль пустой и должен быть больше 6 и меньше 16", errors})
        }
        const {name, username, password,} = req.body
        const canditate = await User.findOne( {username} )
        if(canditate){
            return res.status(490).json({message: "Такой пользователь уже есть"})
        }
        const hashPassword = bcrypt.hashSync(password, 7);
        const userRole = await Role.findOne({value: "USER"})
        const user = new User({name, username, password: hashPassword, role: [userRole.value]})
        await user.save()
        return res.json({message:"Пользователь успешно зарегистрирован"})
    }
     catch (e) {
        res.status(491).json( {message: 'Ошибка регистрации'})
        }
    }

    async login(req, res) {
    try {
        const {username, password} = req.body
        const user = await User.findOne({username})
        if(!user){
            return res.status(400).json( {message: 'Пользователь не найден'})
        }
        const validPassword = bcrypt.compareSync(password, user.password)
        if(!validPassword){
            return res.status(400).json( {message: 'Неверный пароль или логин'})
        }
        const token = generateAccessToken(user._id, user.role)
        const profile = {id:0, profileName: user.name, profileAvatar: user.avatar}
        const userRoleOut = user.role
        return res.json({token, profile , userRoleOut})
    }
     catch (e) {
        res.status(400).json( {message: 'Ошибка авторизации'})
        }
    }

    async users(req, res) {
    try {
        const users = await User.find()
        return res.json(users)
    }
     catch (e) {
        console.log(e)
        }
    }
}

module.exports = new authController()