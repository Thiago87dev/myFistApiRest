const bcryptjs = require('bcryptjs')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [{
      nome: 'Thiago',
      email: 'thiago@gmail.com',
      password_hash: await bcryptjs.hash('123456', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Thiago 2',
      email: 'thiago2@gmail.com',
      password_hash: await bcryptjs.hash('654321', 8),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      nome: 'Thiago 3',
      email: 'thiago3@gmail.com',
      password_hash: await bcryptjs.hash('2558741', 8),
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

};
