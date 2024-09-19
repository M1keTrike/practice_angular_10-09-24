import { Component, OnInit } from '@angular/core';
import { Ipost } from '../modelo/Ipost';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
  posts_list: Ipost[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getAll().subscribe((posts) => {
      this.posts_list = posts;
    });
  }
}
