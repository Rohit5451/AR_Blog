import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/Services/posts.service';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit{


  postsArray : any[] = [];
  categoryObj :any ='';

  constructor(private route : ActivatedRoute,
              private postService : PostsService
    ){}


  ngOnInit(): void {
    this.route.params.subscribe(val =>{
      this.categoryObj = val;
      
      this.postService.loadCategoryPosts(val['id']).subscribe((post: any[]) =>{
        this.postsArray = post;
      })
    })
  }

}
