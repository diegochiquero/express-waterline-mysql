var express = require('express');
var router = express.Router();

/* GET home page. */
/* Note: This is our first use of the redirect() response method.
This redirects to the specified page, by default sending HTTP status code "302 Found".
You can change the status code returned if needed, and supply either absolute or relative paths.
*/
router.get('/', function(req, res, next) {
  res.redirect('/users');
});

/* GET home page. */
/*router.get('/', function (req, res, next) {
  res.render('index', { title: 'ORM WaterLine' });
});*/

module.exports = router;
