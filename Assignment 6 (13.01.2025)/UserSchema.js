const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String, 
    required: true 
},
  bio: { 
    type: String 
},
  username: { 
    type: String, 
    required: true, 
    unique: true 
},
  password: { 
    type: String, 
    required: true 
},
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    lowercase: true, 
    trim: true,
    match: [/\S+@\S+\.\S+/, 'is invalid'] 
},
  contactNo: { 
    type: String, 
    trim: true, 
    validate: {
      validator: function(v) {
        return /\d{10}/.test(v); 
      },
      message: props => `${props.value} is not a valid phone number!`
    } 
},
  dob: { 
    type: Date 
},
  followersCount: { 
    type: Number, 
    default: 0 
},
  followingCount: { 
    type: Number, 
    default: 0 
},
  savedBlogs: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Blog' 
}],
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});
userSchema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);
