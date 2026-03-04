'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Reading_statuses',[
          {
            id:1,
            book_id: 2,
            status: '40',
            date_started: new Date(),
            date_finished: new Date(),
            rating: 4,
            notes: 'Me esta gustando el libro',
            createdAt: new Date(),
            updatedAt: new Date()
          }
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Reading_statuses', null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
