'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Autores', [
        {
          id:1,
          firstName: 'Agatha',
          lastName: 'Christie',
          nationality: 'hondureña',
          birthYear: 1896,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id:2,
          firstName: 'Miguel',
          lastName: 'Ardon',
          nationality: 'hondureña',
          birthYear: 1995,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ])
    },

  async down (queryInterface, Sequelize) {
    
      return queryInterface.bulkDelete('Autores', null, {});
  }
};
