// Плавный скролл
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substring(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// Burger
// const burger = document.getElementById("burger");
// const nav = document.getElementById("nav");
// const links = Array.from(document.querySelectorAll("burger__menu-link"));

// burger.addEventListener("click", () => {
//   nav.classList.toggle("active");
//   burger.classList.toggle("burger--active");
// document.body.classList.toggle("stop-scroll");
// });

const swiper1 = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  // freemode: true,

  // createElements: true,
  // cssMode: true,
  // allowTouchMove: true,
  // grabCursor: true,
  // centeredSlides: true,
  // centerInsufficientSlides: true,

  //   navigation: {
  // 	nextEl: '.swiper-button-next',
  // 	prevEl: '.swiper-button-prev'
  // },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  // on: {
  //   init() {
  //     this.el.addEventListener('mouseenter', () => {
  //       this.autoplay.stop();
  //     });

  //     this.el.addEventListener('mouseleave', () => {
  //       this.autoplay.start();
  //     });
  //   }
  // },
  // breakpoints: {
  // when window width is >= 300px
  // 	300: {
  //     slidesPerView: 1,
  //     spaceBetween: 12

  //   },
  //   340: {
  //     slidesPerView: 2,
  //     spaceBetween: 16,
  //     slidesPerGroup: 1,
  //     centeredSlides: false,
  //     centerInsufficientSlides: true
  //   },


  // 	360: {
  //     slidesPerView: 2,
  //     spaceBetween: 16,
  //     slidesPerGroup: 1,
  //     centeredSlides: true,
  //     centerInsufficientSlides: true
  //   },
  //   400: {
  //     slidesPerView: 2,
  //     spaceBetween: 32,
  //     slidesPerGroup: 1,
  //     centeredSlides: false,
  // centerInsufficientSlides: false
  //   },

  // when window width is >= 480px
  //   767: {
  //     slidesPerView: 3,
  //     spaceBetween: 60,
  //     centeredSlides: true,
  // centerInsufficientSlides: true
  //   },
  // when window width is >= 640px
  //   958: {
  //     slidesPerView: 3,
  //     spaceBetween: 100
  //   },
  // 	1600: {
  //     slidesPerView: 4,
  //     spaceBetween: 140,
  //     centeredSlides: true,
  // centerInsufficientSlides: true
  //   }
  // },
  
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,      
    
    },
  
  mousewhell: true,
  keyboard: true,

 

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },


});
const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 5,
  
  spaceBetween: 10,
  // freemode: true,

  // createElements: true,
  // cssMode: true,
  // allowTouchMove: true,
  // grabCursor: true,
  // centeredSlides: true,
  // centerInsufficientSlides: true,

    navigation: {
  	nextEl: '.swiper-button-next2',
  	prevEl: '.swiper-button-prev2'
  },
  
  
  // breakpoints: {
  // when window width is >= 300px
  // 	300: {
  //     slidesPerView: 1,
  //     spaceBetween: 12

  //   },
  //   340: {
  //     slidesPerView: 2,
  //     spaceBetween: 16,
  //     slidesPerGroup: 1,
  //     centeredSlides: false,
  //     centerInsufficientSlides: true
  //   },


  // 	360: {
  //     slidesPerView: 2,
  //     spaceBetween: 16,
  //     slidesPerGroup: 1,
  //     centeredSlides: true,
  //     centerInsufficientSlides: true
  //   },
  //   400: {
  //     slidesPerView: 2,
  //     spaceBetween: 32,
  //     slidesPerGroup: 1,
  //     centeredSlides: false,
  // centerInsufficientSlides: false
  //   },

  // when window width is >= 480px
  //   767: {
  //     slidesPerView: 3,
  //     spaceBetween: 60,
  //     centeredSlides: true,
  // centerInsufficientSlides: true
  //   },
  // when window width is >= 640px
  //   958: {
  //     slidesPerView: 3,
  //     spaceBetween: 100
  //   },
  // 	1600: {
  //     slidesPerView: 4,
  //     spaceBetween: 140,
  //     centeredSlides: true,
  // centerInsufficientSlides: true
  //   }
  // },
 
  mousewhell: true,
  keyboard: true,

});


const swiper3 = new Swiper(".swiper3", {
  slidesPerView: 5,
  grid: {
    rows: 2,
  },
  spaceBetween: 30,  
  loop: false,
 
  navigation: {
  	nextEl: '.swiper-button-next3',
  	prevEl: '.swiper-button-prev3'
  },

  mousewhell: true,
  keyboard: true,
  
});

//dcgksnbt rfhnjxrb gj yfdtltyb.

const sliderCard = Array.from(document.querySelectorAll('.swiper3__slide'))

sliderCard.forEach(el => {
  el.addEventListener('mouseover', (e) => {
    let card = e.currentTarget.children[1]
    card.classList.add('active')
    
  })
  
})
sliderCard.forEach(el => {
  el.addEventListener('mouseleave', (e) => {
    let card = e.currentTarget.children[1]
    card.classList.remove('active')
    
  })
})






