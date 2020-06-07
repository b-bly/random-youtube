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

  async getMovies<T>() {
    try {
      let params: any = {};
      const jwt = window.localStorage.getItem("jwt");
      if (jwt) {
        params = {
          headers: new HttpHeaders()
        };
        params.headers.append('Content-Type', 'application/json; charset=utf-8');
        params.headers.append(`Authorization`, `Bearer ${jwt}`);
      }
      const res = <Promise<T>>this.http.get('api/movies', {params}).toPromise();
      return res;

      
      // return await this.get('/api/movies');
    } catch (e) {
      if (e.status == 401) {
        return {
          status: 401
        }
      } else {
        throw e;
      }
    }
  }
}
