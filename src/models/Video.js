const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Video",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      credits: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      publication_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      private: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
