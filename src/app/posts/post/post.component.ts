import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  get postId(): string {
    return this.route.snapshot.paramMap.get('id');
  }

  post: Post;
  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) {}

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    this.postService.getPostData(this.postId).subscribe((p) => {
      this.post = p;
    });
  }
}
