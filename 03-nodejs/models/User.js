const mongoose   = require('mongoose');
var mongoose_csv = require('mongoose-csv');

const UserSchema = new mongoose.Schema({
  name  : {type: String},
  email : {type: String},
});

UserSchema.plugin(mongoose_csv);

const User = mongoose.model('User', UserSchema);

module.exports = {model: User, schema: UserSchema};
