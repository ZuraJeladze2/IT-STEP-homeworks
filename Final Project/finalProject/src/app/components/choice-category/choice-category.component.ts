import { Component } from '@angular/core';
import { HTTPModuleService } from 'src/app/services/httpmodule.service';

@Component({
  selector: 'app-choice-category',
  templateUrl: './choice-category.component.html',
  styleUrls: ['./choice-category.component.scss']
})
export class ChoiceCategoryComponent {
  constructor(private http:HTTPModuleService){}
  categoriesArray:any = [];
  ngOnInit(){
    this.http.getAllCategories().subscribe(res => {
      this.categoriesArray = res;
      this.categoriesArray[0].icon = '../../../assets/categories/new.png'
      this.categoriesArray[1].icon = '../../../assets/categories/laptop.png'
      this.categoriesArray[2].icon = '../../../assets/categories/furniture.png'
      this.categoriesArray[3].icon = '../../../assets/categories/shoes.jpg'
      this.categoriesArray[4].icon = '../../../assets/categories/others.jpg'
      console.log(res);
      
    })
  }
  
}
