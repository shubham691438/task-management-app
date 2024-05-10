const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
});

// static register method
UserSchema.statics.register = async function(name, email, password) {
    // validation
    if (!name) {
        throw Error('Name is Required');
    }
    if (!email) {
        throw Error('Email is required');
    }
    if (!validator.isEmail(email)) {
        throw Error('Invalid email address');
    }
    // if (!password || !validator.isStrongPassword(password)) {
    //     throw Error('A strong password is required');
    // }

    const hashedPassword = await bcrypt.hash(password, 10);

    return this.create({
        name,
        email,
        password: hashedPassword,
    });
};
  
  // static login method
  UserSchema.statics.login = async function(email, password) {
  
    if (!email) {
      throw Error('Email is required')
    }

    if (!password) {
        throw Error('Password is required')
      }
  
    const user = await this.findOne({ email })
    if (!user) {
      throw Error('email not registered')
    }
  
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      throw Error('Incorrect password')
    }
  
    return user
  }

  

module.exports=mongoose.model('User',UserSchema)