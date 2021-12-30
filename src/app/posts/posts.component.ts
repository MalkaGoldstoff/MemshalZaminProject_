import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { interval, takeWhile } from 'rxjs';
import { Post } from '../dto/Post';
import { PostsService } from '../service/posts.service';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input()
  id:number=1;
  posts: Post[] = [{ userId: 0, id: 0, title: "", body: "" }]
  constructor(private _changeDetector: ChangeDetectorRef, private route: ActivatedRoute, private _router:Router,private _service: PostsService, _userService:UsersService) { 
    _userService.id$.subscribe(data=>{
      // data => console.log(res)
      this.id =data;
    }
      
    )
    // const source = interval(30000).pipe(
    //   takeWhile((): void => { 
       
    //  }) 
    // );
  }
 
  change(): void {
    setTimeOut(()=>{
     this._service.getPostsByUser(this.id).subscribe(data => {
       this.status =true;
       this._changeDetector.detectChanges();
          for (let index = 0; index < data.length; index++) {
    
            this.posts[index] = { userId: 0, id: 0, title: "", body: "" };
            this.posts[index].userId = data[index].userId;
            this.posts[index].title = data[index].title;
            this.posts[index].body = data[index].body;
            this.posts[index].id = data[index].id;
    
          }
        })
    }, 30000);
  }
  userId:number=0;
  selectedpost:Post={ userId: 0, id: 0, title: "", body: "" };
  ngOnInit() {
    // const routeParams = this.route.snapshot.paramMap;
    // this.userId = Number(routeParams.get('userId'));

  }
  onRowSelect(event:any){
    this._service.update(event.data.id);
    // this._router.navigate(["/comments/"+event.data.id])
  }
}
