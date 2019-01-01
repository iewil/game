var express = require('express');
var router = express.Router();
var sessionController = require('../controllers/session');

/* GET game page. */
router.get('/', async function(req, res, next) {
	let session = await sessionController.createSession()
	// let test = await sessionController.getSession('3iop4c1tu34notinvo')
  res.render('game-leader', { 
  	title: 'CodeNames',
  	id: session.id,
  	map: JSON.parse(session.map),
  });
});

/* POST game page. */
router.post('/', async function(req, res, next) {
  var game_code = req.body.id
  let session = await sessionController.getSession(game_code)
  res.render('game-member', { 
  	title: 'CodeNames',
  	id: session.id,
  	map: JSON.parse(session.map),
  });
});


module.exports = router;

