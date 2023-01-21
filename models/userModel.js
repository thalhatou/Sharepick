const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
    const users = Sequelize.define(
        "user",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            
            email: {
                type: DataTypes.STRING
            },
            password: {
                type: DataTypes.STRING
            },
            username: {
                type: DataTypes.STRING
            },
            

        }
    );
    return users;
}