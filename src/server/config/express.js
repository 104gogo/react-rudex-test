import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compress from 'compression';
import methodOverride from 'method-override';

export function run(app) {
    const env = process.env.NODE_ENV || 'development';

    app.locals.ENV = env;
    app.locals.ENV_DEVELOPMENT = env == 'development';
    
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(cookieParser());
    app.use(compress());
    app.use(express.static('public'));
    app.use(methodOverride());
};
