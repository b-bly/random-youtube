import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

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
}
