/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('note', {
    noteid: {
      type: DataTypes.INTEGER(255).UNSIGNED.ZEROFILL,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    text: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'note'
  });
};
