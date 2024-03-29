import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  DocumentReference,
} from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  postCollection: AngularFirestoreCollection<Post>;

  get timestamp(): any {
    return firebase.firestore.FieldValue.serverTimestamp();
  }

  constructor(private afs: AngularFirestore) {
    this.postCollection = afs.collection('posts', (ref) => {
      return ref.orderBy('published', 'desc');
    });
  }

  getPosts(): Observable<Post[]> {
    return this.postCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  getPostData(id: string): Observable<Post> {
    return this.afs.doc<Post>(`posts/${id}`).valueChanges();
  }

  getPost(id: string): AngularFirestoreDocument<Post> {
    return this.afs.doc<Post>(`posts/${id}`);
  }

  createPost(post: Post): Promise<DocumentReference<Post>> {
    return this.postCollection.add({
      ...post,
      published: this.timestamp,
    });
  }

  updatePost(id: string, post: Post): Promise<void> {
    return this.getPost(id).update(post);
  }

  delete(id: string): void {
    this.getPost(id).delete();
  }
}
