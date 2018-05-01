import IndexController from "../Controllers/IndexController";

module.exports = function (app) {

    const index = new IndexController(app);

    app.get('/index', function (req, res) {
        return index.viewIndex(req, res);
    });
}