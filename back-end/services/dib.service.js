const {Dib, Store} = require('../models')
const StoreService = require("./store.service");

exports.findUserDibList = async ({userId}) => {
    const storeListWithDib = await Dib.findAll({
        where:{
            userId
        },
        include: [{model:Store,
        attributes: [
        'storeId',
        'storeName',
        'storeCategory',
        'storeLogoImage',
        'operationHour',
        'rating',
        'reviewCnt',
        'minDeliveryPrice']}],
    })
    return(storeListWithDib)
}

exports.addDib = async ({userId}, {storeId}) => {
    await Dib.create({
        userId,
        storeId,
    })
    await StoreService.updateDibCnt(storeId, 1)
}

exports.deleteDib = async ({userId},{storeId}) => {
    const deleteCount= await Dib.destroy({
        where: {
            userId, storeId
        }
    })
    if(deleteCount===0){
        throw new Error("삭제할 데이터가 없습니다")
    }
    await StoreService.updateDibCnt(storeId, 0)
}

exports.isDibByUserId = async (userId, storeId) => {
    const isDip = await Dib.findOne({
        where:{userId, storeId}
    })
    return (isDip)
}