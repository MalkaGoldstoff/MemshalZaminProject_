import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';

// import {TableModule} from 'primeng/table';
// import {ToastModule} from 'primeng/toast';

const APP_ROUTES: Routes = [
    // { path: 'appComponent/posts/:userId', component: },

  // { path: 'users', component: UsersComponent },
  // { path: 'posts', component: PostsComponent },
  // { path: 'posts/:userId', component: PostsComponent },
  // { path: 'comments', component: CommentsComponent },
  // { path: 'comments/:postId', component: CommentsComponent },
  // { path: '', redirectTo: 'App', pathMatch: 'full' },
  // { path: '**', component: AppComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    // ToastModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
