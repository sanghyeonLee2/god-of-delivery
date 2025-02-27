const User = require("../models/user");

exports.findById = async ({userId}) => await User.findOne({
    where: {
        userId: userId
    }
})

exports.createUser = async ({userId, password, phone,address, currentAddress, latitude, longitude}) => {
    const newUser = await User.create({
        userId,
        password,
        phone,
        address,
        currentAddress,
        latitude,
        longitude,
    })
    return (newUser)
}


exports.findByIdnPw = async ({userId, password}) => {
    const user = await User.findOne({
        where: {
            userId,
            password
        }
    })
    return (user)
}

