import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../dto/Comment';
import { Post } from '../dto/Post';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private _http:HttpClient) { }

  getComments(){
   return this._http.get<Comment[]>("https://jsonplaceholder.typicode.com/comment");
  }
  getCommentsByPost(id:number){
    return this._http.get<Comment[]>("https://jsonplaceholder.typicode.com/posts/"+id+"/comments");
   }
   
}
