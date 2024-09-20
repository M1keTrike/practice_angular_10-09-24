import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { Ipost } from '../modelo/Ipost';

@Component({
  selector: 'app-posts-dashboard',
  templateUrl: './posts-dashboard.component.html',
  styleUrl: './posts-dashboard.component.css'
})
export class PostsDashboardComponent {
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
