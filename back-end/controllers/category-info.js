const express = require('express');
const Store = require('../models/store');

const router = express.Router();

router.get('/:type',async (req, res) => {
    console.log(req.params);
    try {
        let stores;
        if(req.params.type === "all"){
            stores = await Store.findAll({
                attributes:['storeId', 'name', 'category', 'storePictureUrl', 'minDeliveryPrice','deliveryTip','minDeliveryTime','maxDeliveryTime', 'rating','reviewCount'],
            })
        }
        else{
            stores = await Store.findAll({
                attributes:['storeId', 'name', 'category', 'storePictureUrl', 'minDeliveryPrice','deliveryTip','minDeliveryTime','maxDeliveryTime', 'rating','reviewCount'],
                where: {
                    category: req.params.type
                }
            })
        }
        if(stores == null){
            res.status(200).send({
                status: 200,
                data: stores
            });
        }
        else{
            res.status(401).send({
                status: 401,
                message: "Not Found"
            })
        }

    } catch (err) {
        res.status(500).send({
            status: 500,
            message: err.message
        })
    }
})


module.exports = router;