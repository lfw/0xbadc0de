/** POST CONTROLLER **/
var fs = require('fs');
var env = { views: __dirname };

module.exports = {
    index: { GET: _index },
    view: { GET: _view },
    set: function (param, value) { env[param] = value; }
};

function _index(req, res) {
    res.render('post/index', { title:'Posts' });;
}

function _view(req, res) {
    var viewTarget = env['views'] + '/post/post_' + req.params.id + '.jshtml';
    if(fs.existsSync(viewTarget))
	res.render('post/post_'+ req.params.id +'.jshtml', {
	    title: 'Post ' + req.params.id
	});
    else
	res.send(404);
}
