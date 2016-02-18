import express from 'express';

export default function() {
    var app = express();

    require('./config/express').run(app);
    //require('./config/webpack').run(app);

    return app;
};
