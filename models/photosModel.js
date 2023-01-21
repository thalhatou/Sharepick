const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
    const photos = Sequelize.define(
        "photo",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            userID: {
                type: DataTypes.INTEGER
            },
            title: {
                type: DataTypes.STRING
            },
            slug: {
                type: DataTypes.STRING
            },
            description: {
                type: DataTypes.STRING
            },
            medialocation: {
                type: DataTypes.STRING
            }

        }
    );
    return photos;
}