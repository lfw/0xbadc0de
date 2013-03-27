/** CONTACT CONTROLLER **/

module.exports = {
    index: { GET: _index }
};

function _index(req, res) {
    res.render('contact/index.jshtml', { title: 'Contact Me' } );
}
