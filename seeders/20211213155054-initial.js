module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});

    */

    const features = [
      { name: 'navbar', created_at: new Date(), updated_at: new Date() },
      { name: 'hero section', created_at: new Date(), updated_at: new Date() },
      { name: 'footer', created_at: new Date(), updated_at: new Date() },
    ];

    await queryInterface.bulkInsert('features', features);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('features', null, {});
  },
};
