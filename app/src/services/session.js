const randomWords = require('random-words');
const randomstring = require("randomstring");
const fs = require("fs");

var sessionModel = require('../models/Session');

async function getSession(session_id) {
  return sessionModel.Session.find({
  	id: session_id
  }).exec(); // Just as a mongoose 
                                        // reminder, .exec() on find
                                        // returns a Promise instead
                                        // of the default callback.
}

async function checkSessionExist(session_id) {
	let session = await getSession(session_id)
	return (session.length > 0)
}

async function createSession() {
	try {
		var session_code = randomstring.generate({
			length: 6,
			charset: 'alphanumeric',
			capitalization: 'uppercase'
		});
		var session_map = generateMap();
		var session = new sessionModel.Session({
			'id': session_code,
			'map': session_map
		})
		let response = await session.save();
		return {
			'id': session_code,
			'map': session_map
		}
	} catch (err) {
		console.log(err)
    // if (err.name === 'MongoError' && err.code === 11000) {
    //   res.status(409).send(new MyError('Duplicate key', [err.message]));
    // }

    // res.status(500).send(err);
  }
}

function generateMap() {
	var red_start = Math.random() >= 0.5;
	var template_result_map = [
		{ 'tile_type': 'red', 'text': randomWord() },
		{ 'tile_type': 'red', 'text': randomWord() },
		{ 'tile_type': 'red', 'text': randomWord() },
		{ 'tile_type': 'red', 'text': randomWord() },
		{ 'tile_type': 'red', 'text': randomWord() },
		{ 'tile_type': 'red', 'text': randomWord() },
		{ 'tile_type': 'red', 'text': randomWord() },
		{ 'tile_type': 'red', 'text': randomWord() },
		{ 'tile_type': 'blue', 'text': randomWord() },
		{ 'tile_type': 'blue', 'text': randomWord() },
		{ 'tile_type': 'blue', 'text': randomWord() },
		{ 'tile_type': 'blue', 'text': randomWord() },
		{ 'tile_type': 'blue', 'text': randomWord() },
		{ 'tile_type': 'blue', 'text': randomWord() },
		{ 'tile_type': 'blue', 'text': randomWord() },
		{ 'tile_type': 'blue', 'text': randomWord() },
		{ 'tile_type': 'blue', 'text': randomWord() },
		{ 'tile_type': 'bomb', 'text': randomWord() },
		{ 'tile_type': 'neutral', 'text': randomWord() },
		{ 'tile_type': 'neutral', 'text': randomWord() },
		{ 'tile_type': 'neutral', 'text': randomWord() },
		{ 'tile_type': 'neutral', 'text': randomWord() },
		{ 'tile_type': 'neutral', 'text': randomWord() },
		{ 'tile_type': 'neutral', 'text': randomWord() },
		{ 'tile_type': 'neutral', 'text': randomWord() }
	]
	var temp = shuffle(template_result_map)
	var result_map = [], size = 5;
	while (temp.length > 0) {
		result_map.push(temp.splice(0, size));
	}
	return JSON.stringify(result_map)
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function randomWord() {
	var noun_list = fs.readFileSync( __dirname + '/nounlist.txt', 'utf8')
	var shuffled_list = shuffle(noun_list.split("\n"));
	return shuffled_list[0]
}

module.exports = {
	getSession: getSession,
	createSession: createSession
}