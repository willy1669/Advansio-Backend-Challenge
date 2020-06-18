'use strict';
module.exports = (sequelize, DataTypes) => {
  const Replies = sequelize.define('Replies', {
    body: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    commentId: DataTypes.INTEGER
  }, {});
  Replies.associate = function(models) {
    // associations can be defined here
    Replies.belongsTo(models.Comment, {
      foreignKey: "commentId",
      onDelete: "CASCADE",
    });
  };
  return Replies;
};