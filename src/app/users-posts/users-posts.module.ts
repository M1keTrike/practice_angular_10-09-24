import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { MatCardModule } from '@angular/material/card';
import { PostsDashboardComponent } from './posts-dashboard/posts-dashboard.component';

@NgModule({
  declarations: [PostComponent, PostsDashboardComponent],
  imports: [CommonModule, MatCardModule],
  exports: [PostsDashboardComponent],
})
export class UsersPostsModule {}
