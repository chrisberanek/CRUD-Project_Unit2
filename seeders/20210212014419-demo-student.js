'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
    "Students",
    [
      {
      name:'Mary Lillypad',
      username: 'MissMary',
      password: 'littlefrog',
      sport: 'swimming',
      region: 'Northwest',
      ACT: 27,
      schoolId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
      name:'Killer Mike',
      username: 'baller',
      password: 'showmethe$',
      sport: 'football',
      region: 'Southeast',
      ACT: 21,
      schoolId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
      name:'Nicky Pushups',
      username: 'MatKing',
      password: 'pins4wins',
      sport: 'wrestling',
      region: 'Midwest',
      ACT: 20,
      schoolId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
      name:'Smasher Jones',
      username: 'overthefence',
      password: 'slugger',
      sport: 'baseball',
      region: 'South',
      ACT: 19,
      schoolId: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
      }
    ]
    )
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
