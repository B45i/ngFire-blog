import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss'],
})
export class PostEditorComponent implements OnInit {
  isLoading = false;
  newId: string;
  get postId(): string {
    return this.newId || this.route.snapshot.paramMap.get('id');
  }

  get isNew(): boolean {
    return !this.postId;
  }

  form = this.fb.group({
    title: ['', Validators.required],
    content: [''],
  });

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private postService: PostsService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (!this.isNew) {
      this.postService.getPostData(this.postId).subscribe((p) => {
        this.form.patchValue(p);
      });
    }
  }

  onSave(): void {
    if (this.form.invalid) {
      return;
    }

    this.isLoading = true;
    const action: any = this.isNew
      ? this.postService.createPost(this.form.value as Post)
      : this.postService.updatePost(this.postId, this.form.value as Post);

    action.then((x) => {
      this.isLoading = false;

      if (this.isNew) {
        this.newId = x.id;
      }

      this.snackBar.open('Post Saved', '', {
        duration: 3000,
      });
    });
  }
}
