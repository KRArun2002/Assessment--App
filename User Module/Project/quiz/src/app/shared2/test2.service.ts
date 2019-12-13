import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Test2 } from './test2.model';


@Injectable()
export class TestService {
  selectedTest: Test2;
  tests: Test2[];
  readonly baseURL = 'http://localhost:3000/db2/';


  constructor(private http: HttpClient) { }


  postTest(tst: Test2) {
    return this.http.post(this.baseURL, tst);
  }

  getTestList() {
    return this.http.get(this.baseURL);
  }

  putTest(tst: Test2) {
    return this.http.put(this.baseURL + `/${tst._id}`, tst);
  }

  deleteTest(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
