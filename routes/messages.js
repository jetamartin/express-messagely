const { json } = require("body-parser");
const { DB_URI } = require("../config");
const { ensureLoggedIn } = require("../middleware/auth");
const router = require("./auth");

/** GET /:id - get detail of message.
 *
 * => {message: {id,
 *               body,
 *               sent_at,
 *               read_at,
 *               from_user: {username, first_name, last_name, phone},
 *               to_user: {username, first_name, last_name, phone}}
 *
 * Make sure that the currently-logged-in users is either the to or from user.
 *
 **/
router.get('/:id', ensureCorrectUser,  async (req, res, next ) => {
 
  try {
    const message = Message.get(req.params.id)
  } catch (error) {
    return 
  }
  return res.json({message})
});




/** POST / - post message.
 *
 * {to_username, body} =>
 *   {message: {id, from_username, to_username, body, sent_at}}
 *
 **/

router.post('/', ensureLoggedIn, async (req, res, next ) => {
  try {
    const { from_username, to_username, body } = req.body; 
    const message = Message.create(from_username, to_username, body)
    return res.json({message})
  } catch (error) {
    reurn 
  }

})


/** POST/:id/read - mark message as read:
 *
 *  => {message: {id, read_at}}
 *
 * Make sure that the only the intended recipient can mark as read.
 *
 **/
router.post('/:id/read', ensureLoggedIn, async (req, res, next) => {
 const id = req.params.id;
 const read_at = 
})

module.exports = router; 