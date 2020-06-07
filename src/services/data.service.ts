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
      const res = <Promise<T>>this.http.get(uri, {params}).toPromise();
      return res;
    } catch (e) {
      console.log(e.message);
      return e;
    }
  }

  async post<T>(uri: string, body?: any): Promise<T> {
    return <Promise<T>>this.http.post(uri, body).toPromise();
  }

  async patch<T>(uri: string, body?: any): Promise<T> {
    return <Promise<T>>this.http.patch(uri, body).toPromise();
  }

  async put<T>(uri: string, body?: any): Promise<T> {
    return <Promise<T>>this.http.put(uri, body).toPromise();
  }

  async delete<T>(uri: string, params?: any): Promise<T> {
    return <Promise<T>>this.http.delete(uri, {params}).toPromise();
  }

}
