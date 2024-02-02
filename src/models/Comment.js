const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Comment",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
