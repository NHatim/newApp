module.exports = (sequelize, Sequelize) => {
    const Equipment = sequelize.define("equipment", {
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      is_used: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Equipment;
  };