import { Router } from 'express';

import DefaultRouter from './domain/default.route';
import TaskRouter from './domain/task/task.routes';

const Routes = Router();

Routes.use('/', DefaultRouter).use('/tasks', TaskRouter);

export default Routes;
