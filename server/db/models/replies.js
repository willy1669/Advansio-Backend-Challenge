'use strict';
export const Replies = (sequelize, DataTypes) => {
  const Replies = sequelize.define('Replies', {
    body: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER
  }, {});
  Replies.associate = function(models) {
    // associations can be defined here
    Reactions.belongsTo(models.Commennt, {
      foreignKey: "commentId",
      onDelete: "CASCADE",
    });
  };
  return Replies;
};