/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('G_TEST', {
    id: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    name2: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    name3: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    name4: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    name5: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    name6: {
      type: DataTypes.INTEGER(255),
      allowNull: true
    },
    name7: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    name8: {
      type: DataTypes.CHAR(255),
      allowNull: true
    }
  }, {
    tableName: 'G_TEST'
  });
};
