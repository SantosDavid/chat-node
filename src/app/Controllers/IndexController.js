import BaseController from "./BaseController";

export default (class IndexController extends BaseController {

    viewIndex(req, res) {
        res.render('index');
    }
});