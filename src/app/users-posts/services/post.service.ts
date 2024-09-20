import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ipost } from '../modelo/Ipost';
import { IUser } from '../../users/modelo/iuser';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private apiUrlUsers = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Ipost[]> {
    return this.http.get<Ipost[]>(this.apiUrl);
  }
}
