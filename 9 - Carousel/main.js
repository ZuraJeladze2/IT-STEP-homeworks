let imgArray = [
    'https://a-static.besthdwallpaper.com/car-going-deep-inside-desert-wallpaper-1024x576-96185_44.jpg',
    'https://i.pinimg.com/originals/22/e1/85/22e185ea07628c79a4f586d99c8fd454.png',
    'https://a-static.besthdwallpaper.com/sky-night-scenery-wallpaper-2800x1050-81389_88.jpg',
    'https://a-static.besthdwallpaper.com/atlast-dragon-valley-wallpaper-2048x1152-67573_49.jpg',
    'https://a-static.besthdwallpaper.com/fantasy-art-wallpaper-2304x768-78864_103.jpg',
    'https://a-static.besthdwallpaper.com/night-beautiful-landscape-wallpaper-2048x576-81138_71.jpg'
];

let currentSlide = 0;

let displaySlide = (array) => {
  let container = document.querySelector('.container');
  container.innerHTML += array.map((element, index) => generateHTML(element, index)).join('')
}
let generateHTML = (image, index) => {
  let activeClass = index === 0 ? 'active' : '';
  return `
      <div class="wrapper ${activeClass}">
        <img src="${image}" class="show-slide"/>
        <div class="btn-center">
          <div class="btn-wrapper">
            <button class="start" onclick="previous()">&#8592</button>
            <button class="end" onclick="next()">&#8594</button>
          </div>
        </div>
       </div>  `;
} 
  
let next = () => {
    let slides = document.querySelectorAll('.wrapper');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
};

let previous = () => {
    let slides = document.querySelectorAll('.wrapper');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
};

let autoNext = () => {
  setInterval(next, 5000)
}

displaySlide(imgArray);
autoNext();
