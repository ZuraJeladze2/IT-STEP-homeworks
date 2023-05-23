import { Component } from '@angular/core';

@Component({
  selector: 'app-cards-array',
  templateUrl: './cards-array.component.html',
  styleUrls: ['./cards-array.component.scss']
})

export class CardsArrayComponent {
  products = [
    {
      title: 'potato', 
      price: 10, 
      updatedPrice: 10, 
      images: [
        'https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Patates.jpg/1200px-Patates.jpg',
        'https://images.theconversation.com/files/401955/original/file-20210520-23-83r6ds.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
      ],
      mainImageSrc: 'https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP.jpg',
      mass: [100, 200, 500],
      sale: 25,
      gift: true
    },
    {
      title: 'tomato', 
      price: 5, 
      updatedPrice: 5, 
      images: [
        'https://post.healthline.com/wp-content/uploads/2020/09/AN313-Tomatoes-732x549-Thumb-732x549.jpg',
        'https://www.finedininglovers.com/sites/g/files/xknfdk626/files/styles/im_landscape_100/public/2022-05/tomatoes%C2%A9iStock.jpg.webp?itok=TSshpO47',
        'https://bonnieplants.com/cdn/shop/articles/BONNIE_tomatoes_iStock-481349128-1800px_9f8f5390-a418-4d91-a3d0-00ae0b7900cb.jpg?v=1642541980'
      ],
      mainImageSrc: 'https://post.healthline.com/wp-content/uploads/2020/09/AN313-Tomatoes-732x549-Thumb-732x549.jpg',
      mass: [100, 200, 500],
      sale: 50,
      gift: false
    },
    {
      title: 'strawberry', 
      price: 15, 
      updatedPrice: 15, 
      images: [
        'https://clv.h-cdn.co/assets/15/22/2048x2048/square-1432664914-strawberry-facts1.jpg',
        'https://cdn.britannica.com/22/75922-050-D3982BD0/flowers-fruits-garden-strawberry-plant-species.jpg',
        'https://www.allrecipes.com/thmb/1c99SWam7_FM6vUzpDDzIKffMR4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-strawberry-fruit-or-vegetable-f6dd901427714e46af2d706a57b9016f.jpg'
      ],
      mainImageSrc: 'https://clv.h-cdn.co/assets/15/22/2048x2048/square-1432664914-strawberry-facts1.jpg',
      mass: [100, 200, 500],
      sale: 15,
      gift: true
    }
  ];

  updatePrice(mass:number, element:any){
    element.updatedPrice = element.price*mass/100;
  }

  updateIMG(img: string, element:any){
    element.mainImageSrc = img;
  }
}

  
  


