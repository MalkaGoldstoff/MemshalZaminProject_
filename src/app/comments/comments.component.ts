import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../dto/Comment';
import { CommentsService } from '../service/comments.service';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  id:number=1;
  postId:number=1;

  comments:Comment[]=[{ postId: 0, id:0,name:"", email:"",body:""}]
  constructor( private _service:CommentsService, private _route: ActivatedRoute, _postService:PostsService) {
    _postService.id$.subscribe(data=>{
      // data => console.log(res)
      this.postId =data;
    })
  }
   
  ngOnInit() {
    // const routeParams = this._route.snapshot.paramMap;
    // this.postId = Number(routeParams.get('postId'));
    this._service.getCommentsByPost(this.postId).subscribe(data=>{
      for (let index = 0; index < data.length; index++) {
        this.comments[index] = { postId: 0, id:0,name:"", email:"",body:""};
        this.comments[index].postId = data[index].postId;
        this.comments[index].body = data[index].body;
        this.comments[index].email = data[index].email;

        // this.comments[index].username = data[index].username;
      }
    })
  }

}
