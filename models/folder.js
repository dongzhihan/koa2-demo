/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('folder', {
    folderId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    userid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    folderName: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'folder'
  });
};
