/** HOME CONTROLLER **/

module.exports = {
    index: { GET: _index },
};

function _index(req,res) {
    res.render('home/index', { 
	title: '0xBADC0DE'
    });
}
