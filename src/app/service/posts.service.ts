import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Post } from '../dto/Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  // id$: Subject<number> = new Subject();
  id$: BehaviorSubject<number> = new BehaviorSubject(1);

  constructor(private _http:HttpClient) { }

  getPosts(){
    return this._http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
   }
  //  https://jsonplaceholder.typicode.com/users/1/posts
   getPostsByUser(id:number){
     return this._http.get<Post[]>("https://jsonplaceholder.typicode.com/users/"+id+"/posts");
    }
    update(id:number) {
      this.id$.next(id);
    }
}
