import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const routes = {
  create: () => `/schools`,
  update: (id: string) => `/schools/${id}`,
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
  address: string;
  numberOfStudents: number;
  createdAt: string;
  updatedAt: string;
}

@Injectable()
export class SchoolService {
  constructor(private httpClient: HttpClient) {}

  listSchools(params?: QueryParams): Observable<Array<School>> {
    return this.httpClient
      .cache(true)
      .get(routes.list(params))
      .pipe(
        map((body: any) => body),
        catchError(() => of('Error, could not list schools.'))
      );
  }
}
