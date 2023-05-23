const imageArray = [
  'src/black.PNG',
  'src/blue.PNG',
  'src/gray.PNG',
  'src/red.PNG'
];
let generateImageList = (imgArray) => {
    let images = document.querySelector('.images');
    imgArray.forEach((item,index )=> {
        images.innerHTML += `<img id="${index}" src="${item}" alt="">`;
    });
}
let activeColor = () => {
    let colors = document.querySelectorAll('.colors div');
    let activeColor = null;
    let mainIMG = document.querySelector('.main-img');
  
    colors.forEach(color => {
      color.addEventListener('click', function() {
        let link = color.getAttribute('imgLink');
        if (activeColor !== null) {
            console.log(activeColor);
          activeColor.classList.remove('active');
        }
        
        color.classList.add('active');
        mainIMG.innerHTML = `<img src='${link}' />`;
        activeColor = color;

        document.querySelector(".text").innerText = this.getAttribute("color")
      })
    });
  }
  
let displayImage = () => {
    let mainIMG = document.querySelector('.main-img');
    let images = document.querySelectorAll('.images img')
    images.forEach((item) => {
        item.addEventListener('click', function (e) {
            mainIMG.innerHTML = `<img  src='${e.target.src}' />`;

            document.querySelector(".colors div.active").classList.remove("active")

            let colors = document.querySelectorAll('.colors div');
            colors[Number(this.getAttribute("id"))].classList.add("active")
        })
    }) 
}

let updateMain = () => {
    
}
activeColor();
generateImageList(imageArray);
displayImage();
