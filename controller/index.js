/** Expose all controllers to the app so routing can take place. **/

var homeController = require('./homeController');
var postController = require('./postController');
var contactController = require('./contactController');

module.exports = { 
    home: homeController, 
    post: postController,
    contact: contactController,
};

