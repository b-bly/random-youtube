import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends DataService {

  constructor(protected http: HttpClient) { 
    super(http);
  }

  async test() {
    return await this.get('/api');
  }

  getMovies<T>() {
    return this.get('api/movies');
  }

  getUser<T>() {
    return this.get('api/auth/user'); 
  }

  logout<T>() {
    return <Promise<T>>this.http.get('api/auth/user/logout').toPromise();
  }
}
