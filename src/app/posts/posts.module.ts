import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostComponent } from './post/post.component';
import { SharedModule } from '../shared/shared.module';
import { PostEditorComponent } from './post-editor/post-editor.component';


@NgModule({
  declarations: [PostsComponent, PostComponent, PostEditorComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule
  ]
})
export class PostsModule { }
