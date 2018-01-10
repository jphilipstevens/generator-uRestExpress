/**
 * Created by Vlad Pantea on 12/2/2017.
 */
'use strict';

const route = function(express,bodyParser,mainController){
    let mainRouter = express.Router();
    let jsonParser = bodyParser.json();

    mainRouter.get('/getAll',jsonParser,mainController.getAll);
    mainRouter.get('/getById',jsonParser,mainController.getById);
    mainRouter.post('/createNew',jsonParser,mainController.createNew);
    mainRouter.put('/updateOne',jsonParser,mainController.updateOne);
    mainRouter.delete('/deleteOne',jsonParser,mainController.deleteOne);

    return {
        definedRoutes : mainRouter
    };
};

module.exports = route;