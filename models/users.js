var Waterline = require('waterline');

module.exports = Waterline.Collection.extend({
  identity:'users',
  connection:'mysql',

  attributes: {
    name: 'string',
    surname: 'string'
  }
});

/*var user = Waterline.Collection.extend({
  identity:'user',
  connection:'mysql',

  attributes: {
    name: 'string',
    surname: 'string'
  }
});

module.exports = user;*/
