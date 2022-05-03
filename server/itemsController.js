const Items = require('./models/Items')
const Order = require('./models/Order')

class itemsController{
    async getItems(req, res){
        try{
            const getItem = await Items.find()
            return res.status(200).json( {getItem})
        }catch(e){
            return res.status(400).json( {message: 'Ошибка'})
        }
    }
    async createOrder(req, res){
        try{
            if(req.body.userAdress == ""){
                return res.status(400).json( {message: 'Введите адресс'})
            }
            const save = new Order(req.body)
            save.save()
            return res.status(200).json( {message: 'Готово'})
        }catch(e){
            return res.status(400).json( {message: 'Ошибка'})
        }
    }
}

module.exports = new itemsController()