let imageJSON = `[{
    "ImgLink": "https://onlymiata.com/wp-content/uploads/2022/04/rocket-bunny-miata.jpg"
  },  {
    "ImgLink": "https://www.motorbiscuit.com/wp-content/uploads/2022/04/1994-Mazda-Miata.jpg"
  }, {
    "ImgLink": "https://i.ytimg.com/vi/Z71tcJtgfN8/maxresdefault.jpg"
  }, {
    "ImgLink": "https://hips.hearstapps.com/hmg-prod/images/ls1-swapped-miata-bat-lead-1656530832.png"
  }, {
    "ImgLink": "https://www.outmotorsports.com/wp-content/uploads/2021/08/fall09_33.jpg?ezimgfmt=rs:372x279/rscb1/ngcb1/notWebP"
  }, {
    "ImgLink": "https://hagerty-media-prod.imgix.net/2021/03/green_miata_convertible-buyers-guide-lede-e1616512809873.jpg?auto=format%2Ccompress&fit=crop&ixlib=php-3.3.0&max-h=427&max-w=640"
  }]`;
  let imageArray = JSON.parse(imageJSON);
  
  let selectedIMG = document.querySelector('.selected-img > img');
  let imgsDiv = document.querySelector('.img-div');
  let imgList = document.querySelectorAll('.img-list img');
  let addBtn = document.querySelector('.add');
  let nextBtn = document.querySelector('.next');
  let previousBtn = document.querySelector('.previous');
  let i = 0;
  selectedIMG.setAttribute('src', imageArray[0].ImgLink);
  imageArray.forEach(item => {
  imgsDiv.innerHTML += `<img src="${item.ImgLink}">`
});

let next = () => {
  i++;
  if(i > imageArray.length - 1) {
    i=0;
  }
  console.log(i);
  selectedIMG.setAttribute('src', imageArray[i].ImgLink);
}
let previous = () => {
  i--;
  if(i < 0) {
    i=imageArray.length - 1;
  }
  console.log(i);
  selectedIMG.setAttribute('src', imageArray[i].ImgLink);
}
nextBtn.addEventListener('click', next);
previousBtn.addEventListener('click', previous);
  // addBtn.addEventListener('click', () => {
  //     imageArray.forEach(item => {
  //     imgsDiv.innerHTML += `<img src="${item.ImgLink}">`
  //   });
  //     document.querySelector('.add').style.display = 'none';
  //     document.querySelector('.previous').style.display = 'inline';
  //     document.querySelector('.next').style.display = 'inline';
  // });

// function fill (arr){
//         arr.forEach(item => {
//             imgsDiv.innerHTML += `<img src="${item.ImgLink}">`
//         });
//         document.querySelector('.add').style.display = 'none';
//         document.querySelector('.previous').style.display = 'inline';
//         document.querySelector('.next').style.display = 'inline';
//   }