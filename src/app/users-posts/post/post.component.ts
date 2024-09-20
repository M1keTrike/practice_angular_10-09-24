import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../users/services/user.service';
import { Ipost } from '../modelo/Ipost';
import { PostView } from '../modelo/PostView';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: Ipost | undefined;

  postView: PostView | undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    if (this.post) {
      this.userService.getUserById(this.post.userId).subscribe((user) => {
        if (this.post) {
          this.postView = {
            posted_by: user,
            body: this.post.body,
            title: this.post.title,
          };
        }
      });
    }
  }
}
