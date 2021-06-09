const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var usermodel = new Schema({
  _id: Schema.Types.ObjectId,
  
  username:String,
  password:String,
  firstname:String,
  lastname:String,
  phonenumber:Number,
});

module.exports = {
  User:mongoose.model("User", usermodel , "User"),
  UserSchema:usermodel
}