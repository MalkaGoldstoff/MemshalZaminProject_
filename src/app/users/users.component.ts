import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { User } from '../dto/User';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  selecteduser:User = { id:0, name:"",username:"", email:"",address:"",phone:0,website:"", company:""};
  users: User[] =[ { id:0, name:"",username:"", email:"",address:"",phone:0,website:"", company:""}];
  constructor(private _service: UsersService, private _router: Router) { }
  obj: any;
  ngOnInit() {  

    this._service.getUsers().subscribe(data=>{
      for (let index = 0; index < data.length; index++) {
        this.users[index] = { id:0, name:"",username:"", email:"",address:"",phone:0,website:"", company:""};
        this.users[index].id = data[index].id;
        this.users[index].username = data[index].username;
      }
    })
  }
 

  
  onRowSelect(event:any){
    const id = event.data.id;
    // this._service.userId=id;
    this._service.update(id);
    // this._router.navigate(["appComponent/posts/"+id]);
  }
}
