const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
    const comments = Sequelize.define(
        "comment",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            userId: {
                type: DataTypes.INTEGER
            },
            photoId: {
                type: DataTypes.INTEGER
            },
            content: {
                type: DataTypes.STRING
            }
        }
    );
    return comments;
}