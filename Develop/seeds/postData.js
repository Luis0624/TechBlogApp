const sequelize = require("../config/connection.js");
const { Post } = require("../models");

const postData = [
    {
        userId: 1,
        blogContent: "This is a blog about SQL."
    },
    {
        userId: 2,
        blogContent: "This is a blog about JS."
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;