import { Request, Response } from 'express';

class StatusController {
  async show(req: Request, res: Response) {
    res.status(200);
    res.json({
      status: 'online',
      date: new Date(),
      environment: process.env.NODE_ENV,
    });
  }
}

export default new StatusController();
