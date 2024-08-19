'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [
            {
                email: 'mschau1232@gmail.com',
                password: '123456',
                firstName: 'John',
                lastName: 'Doe',
                address: 'Da Nang',
                gender: 1,
                roleId: '123456',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },
    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    },
};
