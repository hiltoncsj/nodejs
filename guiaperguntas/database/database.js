const Sequelize = require("sequelize");
const connection = new Sequelize("guiaperguntas","root","141205",{
    host: "localhost",
    dialect: "mysql"
});

module.exports = connection;