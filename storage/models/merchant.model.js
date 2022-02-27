const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('merchant',
        {
            merchantId: {
                allowNull: false,
                unique: true,
                primaryKey: true,
                type: DataTypes.STRING
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            name: {
                type: DataTypes.STRING,
                unique: false,
                allowNull: false
            },
            address: {
                type: DataTypes.STRING,
                allowNull: false
            },
            join_date: {
                type: DataTypes.DATE,
                allowNull: false
            },
            phone_number: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            underscored: true
        });
};
