const User = require("../models/user");

exports.findById = async ({userId}) => await User.findOne({
    where: {
        userId: userId
    }
})

exports.createUser = async ({userId, userPw, role, address, latitude, longitude}) => {
    const newUser = await User.create({
        userId,
        userPw,
        role,
        address,
        latitude,
        longitude,
    })
    return (newUser)
}


exports.findByIdnPw = async ({userId, userPw}) => {
    const user = await User.findOne({
        where: {
            userId,
            userPw
        }
    })
    return (user)
}

exports.updateUserAddress = async ({userId, body}) => {
    const [isUpdated] = await User.update(
        {
            latitude: body.lat,
            longitude: body.lng,
            address : body.address
        },{
            where: {userId}
        }
    )
    return isUpdated
}
