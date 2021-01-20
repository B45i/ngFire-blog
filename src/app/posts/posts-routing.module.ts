import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostEditorComponent } from './post-editor/post-editor.component';
import { PostComponent } from './post/post.component';

import { PostsComponent } from './posts.component';

const routes: Routes = [
  { path: 'edit/:id', component: PostEditorComponent },
  { path: 'edit', component: PostEditorComponent },
  { path: ':id', component: PostComponent },
  { path: '', component: PostsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
