var mongoose = require('mongoose');
var bcrypt = require('bcryptjs'),
    SALT_WORK_FACTOR = 10;

var UserSchema = new mongoose.Schema({
  name: { type: String, required: true, index: { unique: true } },
  email: { type: String, required: true,  index: { unique: true }},
  password:  { type: String, required: true },
  clients: [{type: mongoose.Schema.ObjectId, ref: 'Client'}]
});

UserSchema.pre('save', function(next){
  var user = this;

  if(!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
    if(err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash){
      if(err) return next(err);

      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if(err) return cb(err);
    cb(null, isMatch);
  });
}

module.exports = mongoose.model('User', UserSchema);
