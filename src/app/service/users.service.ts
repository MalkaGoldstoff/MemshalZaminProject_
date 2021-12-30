import { HttpClient } from '@angular/common/http';
import { Injectable, Output } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../dto/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  @Output()
  userId:number=0;

  id$: BehaviorSubject<number> = new BehaviorSubject(1);

  constructor(private _http:HttpClient) { }

  getUsers(){
   return this._http.get<User[]>("https://jsonplaceholder.typicode.com/users");
  }


  update(id:number) {
    this.id$.next(id);
  }


}
