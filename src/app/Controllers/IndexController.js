export default (class IndexController {

    constructor (app) {
        this.app = app;        
    } 

    viewIndex (req, res) {
        res.render('index');
    }
});