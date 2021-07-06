const sequelize = require("../config/connection.js");
const { User } = require("../models");
const bcrypt= require("bcrypt");

const userData = [
    {
        email: "sqldev@email.com",
        username: "SQL_Dev",
        password: "password12345"
    },
    {
        email: "jsdev@email.com",
        username: "JS_Dev",
        password: "password12345"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;