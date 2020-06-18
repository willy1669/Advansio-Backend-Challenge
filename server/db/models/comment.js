'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    twit: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    
    Comment.hasMany(models.Replies, {
      foreignKey: "commentId",
      onDelete: "CASCADE",
    });
  };
  return Comment;
};