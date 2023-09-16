import {Component, Inject, OnInit} from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../common/explore-container/explore-container.component';
import {ApiService} from "../api-service.service";
import {Post} from "../common/post.model";
import {HttpClientModule} from "@angular/common/http";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, HttpClientModule, NgForOf],
  providers: [ApiService]
})
export class Tab1Page implements OnInit {

  posts: Post[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPosts().subscribe(posts =>{
      this.posts = posts;
    })
  }
}
