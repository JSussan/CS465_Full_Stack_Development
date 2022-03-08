/* GET homepage */
const index = (req, res) => {
    pageTitle = 'Travlr Getaways' + ' - Home';
    res.render('travel', {title: pageTitle});
};
module.exports = {
    index
};