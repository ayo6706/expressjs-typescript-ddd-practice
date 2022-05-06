import { Router } from 'express';

import taskController from './task.controller';
import validate from '../middleware/validate'
import { createTaskSchema } from './task.schema'

const TaskRouter = Router();

TaskRouter.post('/', validate(createTaskSchema), taskController.addTask);
TaskRouter.get('/', taskController.getTasksList);
TaskRouter.get('/:author', taskController.getTaskByAuthor);

export default TaskRouter;
