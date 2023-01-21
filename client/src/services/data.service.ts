import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(protected http: HttpClient) {}

  async get<T>(uri: string, params?: any): Promise<T> {
    try {
      const res = this.http.get(uri, {params}).toPromise() as Promise<T>;
      return res;
    } catch (e) {
      console.log(e.message);
      return e;
    }
  }

  async post<T>(uri: string, body?: any): Promise<T> {
    return this.http.post(uri, body).toPromise() as Promise<T>;
  }

  async patch<T>(uri: string, body?: any): Promise<T> {
    return this.http.patch(uri, body).toPromise() as Promise<T>;
  }

  async put<T>(uri: string, body?: any): Promise<T> {
    return this.http.put(uri, body).toPromise() as Promise<T>;
  }

  async delete<T>(uri: string, params?: any): Promise<T> {
    return this.http.delete(uri, {params}).toPromise() as Promise<T>;
  }

}
