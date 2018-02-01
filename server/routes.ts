import * as express from 'express';

import ServeCtrl from './controllers/customer';
import Customer from './models/customer';
import Serve from './models/serve';


export default function setRoutes(app) {

    const router = express.Router();

    const ServeCtrl = new ServeCtrl();
    

}