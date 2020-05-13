import { database as Database } from './database';
import { Movies } from './models/movies';

export async function getMovies() {
  const data = await Database.query('SELECT * from movies');
  const movies: Movies[] = data.rows;
  return movies;
}