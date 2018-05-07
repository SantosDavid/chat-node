import BaseController from "./BaseController";

export default class ChatController extends BaseController {

    login(req, res) {

        req.assert('apelido', 'Apelido é obrigatório').notEmpty();

        if (req.validationErrors()) {
            res.render('index', {errors: req.validationErrors()});
            return;
        }

        res.render('chat', {id: Math.random(), apelido: req.query.apelido});
    }
};