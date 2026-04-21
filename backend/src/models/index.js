// database configuration and model associations

const Sequelize = require('sequelize');
const path = require('path');

// Database configuration
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql', // Change according to your database dialect
});

// Import models
const User = require(path.join(__dirname, 'User'));
const Post = require(path.join(__dirname, 'Post'));

// Model associations
User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

module.exports = {
    sequelize,
    User,
    Post,
};