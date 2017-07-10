/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test_g', {
    id: {
      type: DataTypes.INTEGER(50),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'test_g'
  });
};
