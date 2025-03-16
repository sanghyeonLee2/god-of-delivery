const MenuService = require('../services/menu.service');

exports.getMenuDetail = async (req, res) => {
    try{
        const menuData = await MenuService.findById(req.params)
        res.status(200).send(menuData);
    }
    catch(err){
        res.status(500).send({
            status: 500,
            message: err.message
        })
    }
}