
import { Request, Response } from 'express';
import { add, getAll, getByAuthor} from '../../utils/file';

class TaskController {

  // get all tasks 

async getTasksList(req: Request, res: Response) {
    const tasks = await getAll();

    try {
        res.status(200).send(tasks);
        
    } catch (e: any){
        res.status(404).send(e.message);
    }
    
}



//  get task by author
async getTaskByAuthor(req: Request, res: Response )  { 
    
    try{
      const author = req.params.author;
      const tasks = await getByAuthor(author);
  
      if (tasks.length === 0) {
         
        res.status(404).send(JSON.stringify({error: `task with author: ${author} not found`}))
      } else{
        res.status(200).send(JSON.stringify(tasks));
      }
    } catch (e){
        console.error(e);
    }
    
}




  //add tasks
  async addTask(req: Request, res: Response) {
    const newTaskData: any = req.body;
    await add(newTaskData);
    res.status(201).send(
      JSON.stringify({
        success: true,
        message: newTaskData
      }));
  };


}
export default new TaskController();
