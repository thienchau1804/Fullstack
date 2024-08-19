import db from "../../models/index";

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.create({
                email: data.email,
                password: data.password,
                firstName: data.firstName || null,
                lastName: data.lastName || null,
                address: data.address || null,
                phoneNumber: data.phoneNumber || null,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId || null,
                positionId: data.positionId || null,
                image: data.image || null
            });
            resolve('Successful');
        } catch (e) {
            console.error('Error creating user:', e.message);
            reject(e);
        }
    });
}

module.exports = {
    createNewUser: createNewUser
}