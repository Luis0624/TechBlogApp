const User = require("./User.js");
const Post = require("./Post.js");
const Comment = require("./Comment.js");

// User - Post/Comment relations
User.hasMany(Post, {
    foreignKey: "userId",
    as: "post_creator"
});

User.hasMany(Comment, {
    foreignKey: "userId",
    as: "comment_creator"
});

Post.belongsTo(User, {
    foreignKey: "userId",
    as: "post_creator"
});

Comment.belongsTo(User, {
    foreignKey: "userId",
    as: "comment_creator"
});

// Post to comment relations
Post.hasMany(Comment, {
    foreignKey: "postId",
    as: "post_comments"
});

Comment.belongsTo(Post, {
    foreignKey: "postId",
    as: "post_comments"
});

module.exports = { User, Post, Comment };