const User = require("../models/user");

exports.findById = async(userId) => await User.findOne({
    where: {
        userId: userId
    }
})

exports.createUser = async ({name, password, phone, currentAddress, grade, role, latitude, longitude}) =>
    await User.create({
        name: name,
        password: password,
        phone: phone,
        currentAddress: currentAddress,
        grade: grade,
        role: role,
        latitude: latitude,
        longitude: longitude,
    })

exports.findByIdnPw = async ({userId, password}) => await User.findOne({
    where: {
        userId: userId,
        password: password
    }
})

