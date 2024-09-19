import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UsersPostsModule } from './users-posts/users-posts.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UsersModule,
    BrowserAnimationsModule,
    UsersPostsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
