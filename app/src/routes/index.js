var express = require('express');
var router = express.Router();
var sessionController = require('../controllers/session');

/* GET home page. */
router.get('/', async function(req, res, next) {
	
	// let session = await sessionController.createSession()
	// console.log(req.query.id)
	// let test = await sessionController.getSession('3iop4c1tu34notinvo')
  res.render('landing', { 
  	title: 'CodeNames',
  	// id: session.id,
  	// map: JSON.parse(session.map),
  });
});

module.exports = router;

