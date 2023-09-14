import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/Services/categories.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent implements OnInit{

  categoryArray : Category[] = [];

  constructor(private categoryService : CategoriesService){}

  
  ngOnInit(): void {
    this.categoryService.loadData().subscribe(dataArray => {
      this.categoryArray = dataArray.map(item => {
        const category = item.data as Category;
        category.id = item.id;
        return category;
      });
    });
  }


  

}
