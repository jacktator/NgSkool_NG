import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Credentials } from '@app/core';

const routes = {
  create: () => `/schools`,
  // update: (id: string) => `/schools/${id}`,
  list: (q?: QueryParams) => (q ? `/schools?state=${q.state}` : '/schools') // TODO: Enable list by context constraints
  // get: (id: string) => `/schools/${id}`,
};

export interface QueryParams {
  name: string;
  address: string;
  state: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface School {
  name: string;
  state: string;
  address: string;
  numberOfStudents: number;
  createdAt: string;
  updatedAt: string;
}

@Injectable()
export class SchoolService {
  constructor(private httpClient: HttpClient) {}

  createSchool(newSchool: School): Observable<School> {
    return this.httpClient
      .post(routes.create(), newSchool, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
      .pipe(
        map((savedSchool: any) => savedSchool),
        catchError(err => throwError('Error, could not create school.' + err))
      );
  }

  // updateSchool(school: School): Observable<School> {
  //  // TODO: Implementation
  // }

  listSchools(params?: QueryParams): Observable<Array<School>> {
    return this.httpClient
      .cache(true)
      .get(routes.list(params))
      .pipe(
        map((schoolList: any) => schoolList),
        catchError(err => throwError('Error, could not list schools.' + err))
      );
  }
}
