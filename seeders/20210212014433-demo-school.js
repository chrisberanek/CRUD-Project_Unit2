'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Schools",
      [
        {
          name:'University of Washington',
          sport1: 'swimming',
          sport2: 'football',
          sport3: 'baseball',
          region: 'Northwest',
          minACT: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
          },
          {
          name:'Minnesota State University',
          sport1: 'wrestling',
          sport2: 'football',
          sport3: 'softball',
          region: 'Midwest',
          minACT: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
          },
          {
          name:'Georgia Tech',
          sport1: 'football',
          sport2: 'swimming',
          sport3: 'baseball',
          region: 'Southeast',
          minACT: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
          },
          {
          name:'Central Arkansas',
          sport1: 'baseball',
          sport2: 'softball',
          sport3: 'wrestling',
          region: 'South',
          minACT: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
          },
      ],
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
