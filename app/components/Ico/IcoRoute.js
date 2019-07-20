'use strict';

var icoController = require('./IcoController');
var router = express.Router();

module.exports = (function() {
  router.get('/', function(req, res, next) {
    icoController.index(req, res);
  });

  router.get('/etherPrice', icoController.etherPrice);

  router.get('/getEther', icoController.getEther);

  return router;
})();
