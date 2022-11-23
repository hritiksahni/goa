
// ---------------
// diffrent games slider
// -----------------------
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      560: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
  });











  const prev = document.querySelector('.slide-arrow-left')
  const next = document.querySelector('.slide-arrow-right')
  const images = document.querySelector('.slider').children
  const totalimages = images.length
  let index = 0

  prev.addEventListener('click', () => {
    nextImage('next');
  })
  
  next.addEventListener('click', () => {
    nextImage('prev');
  })
  
  function nextImage(direction) {
    if(direction == 'next') {
      index++;
      if(index == totalImages) {
        index = 0;
      }
    } else {
      if(index == 0) {
        index = totalImages - 1;
      } else {
        index--;
      }
    }
    
    for(let i = 0; i < images.length; i++) {
      images[i].classList.remove('slidermain');
    }
    images[index].classList.add('slidermain');
  }