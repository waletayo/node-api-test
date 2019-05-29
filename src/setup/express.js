import express from 'express';
import logger from 'morgan';
import bodyParser from "body-parser";
import cors from 'cors';
import config from 'config';

const app = express();

app.use(logger('dev'));
app.use('/uploads',express.static('uploads'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.set('port', config.get('app.port'));
app.use(bodyParser.urlencoded({extended: false}));

// development error handler
// will print stacktrace
export default app;
