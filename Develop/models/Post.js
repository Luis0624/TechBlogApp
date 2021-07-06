const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Post extends Model {};

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "user",
                key: "id"
            }
        },
        blogContent: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: "Blog Text Placeholder."
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: "post"
    }
);

module.exports = Post;