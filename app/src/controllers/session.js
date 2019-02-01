var sessionServices = require('../services/session.js');

/**
 * Get a session by session_id.
 * @param username a string value that represents user's username.
 * @returns A Promise, an exception or a value.
 */
async function getSession(session_id) {
  if (session_id === '') {
    throw new Error('Session_id can\'t be blank');
  }
  const session = await sessionServices.getSession(session_id);
  if (session.length > 0) {
  	return session[0]
  } else if (session.length == 0) {
  	throw Error("no session found")
  }
}

/**
 * Creates a new session.
 * @returns A Promise, an exception or a value.
 */
async function createSession() {
	return sessionServices.createSession()
}


module.exports = {
  getSession: getSession,
  createSession: createSession
};