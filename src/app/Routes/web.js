import IndexController from "../Controllers/IndexController";
import ChatController from "../Controllers/ChatController";

module.exports = function (app) {

    const index = new IndexController(app);

    app.get('/index', function (req, res) {
        return index.viewIndex(req, res);
    });

    const chatController = new ChatController(app);

    app.get('/login', function (req, res) {
        return chatController.login(req, res);
    });
}