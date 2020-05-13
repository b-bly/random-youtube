import { Router, Request, Response } from 'express';
import { getMovies } from '../database/controller';
export const router = Router();


router.get('/', async (req: Request, res: Response) => {
  const data = await getMovies();
  res.json(data);
});

// LESSON LEARNED
// if module.exports is used to return the router, there is a type error 
// at app.use in server.ts

// module.exports = <Router>router;