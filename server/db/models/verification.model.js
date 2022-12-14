module.exports = (sequelize, Sequelize) => {
    const verification = sequelize.define("verification", {
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        token: {
            type: Sequelize.STRING,
            allowNull: false
        },
        verify: {
            type: Sequelize.BOOLEAN,
            allowNull: false
        }
    });

    return verification;
};