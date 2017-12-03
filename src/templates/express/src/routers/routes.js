/**
 * Created by Vlad Pantea on 12/2/2017.
 */
'use strict';

const route = function(express,app,jsonParser,mainController){
    var mainRouter = express.Router();

    mainRouter.get('/getAll',jsonParser,mainController.getAll);
    mainRouter.get('/getById',jsonParser,mainController.getById);
    mainRouter.post('/createNew',jsonParser,mainController.createNew);
    mainRouter.put('/updateOne',jsonParser,mainController.updateOne);
    mainRouter.delete('/deleteOne',jsonParser,mainController.deleteOne);


    app.use('/api',mainRouter);
};

module.exports = route;