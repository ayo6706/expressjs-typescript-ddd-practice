import express from 'express';
import Routes from './routes';
import bodyParser from 'body-parser';

class App {
  express!: express.Application;

  constructor() {
    this.initialize();
  }

  initialize() {
    this.express = express();
    this.express.use(bodyParser.json({ limit: '15mb' }));
    this.express.use(bodyParser.urlencoded({ limit: '15mb', extended: true }));
    this.express.use(Routes);
  }
}

export default new App().express;
