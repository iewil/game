const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://mongodb:27018/codenames', {useNewUrlParser: true});

const sessionSchema = new Schema({
  id: { 
    type: String, 
    unique: true,
  },
  map: {
  	type: String, 
  }
}, { timestamps: true });

const Session = mongoose.model('Session', sessionSchema);

module.exports = {
	Session: Session
}