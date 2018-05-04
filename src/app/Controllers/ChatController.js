import BaseController from "./BaseController";

export default class ChatController extends BaseController {

    login(req, res) {

        req.assert('apelido', 'Apelido é obrigatório').notEmpty();

        if (req.validationErrors()) {
            res.redirect(402, '/index');
        }

        res.render('chat', {id: Math.random(), apelido: req.query.apelido});
    }
};