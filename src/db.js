require("dotenv").config();
const { Sequelize } = require("sequelize");
const CommentModel = require("./models/Comment");
const LikeModel = require("./models/Like");
const UserModel = require("./models/User");
const VideoModel = require("./models/Video");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

CommentModel(sequelize);
LikeModel(sequelize);
UserModel(sequelize);
VideoModel(sequelize);

const { Comment, Like, User, Video } = sequelize.models;

Comment.belongsTo(User);
Comment.belongsTo(Video);
Like.belongsTo(User);
Like.belongsTo(Video);
User.hasMany(Comment);
User.hasMany(Like);
User.hasMany(Video);
Video.belongsTo(User);
Video.hasMany(Comment);
Video.hasMany(Like);

module.exports = {
  Comment,
  Like,
  User,
  Video,
  conn: sequelize,
};
