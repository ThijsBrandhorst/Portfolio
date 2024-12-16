// Navbar
const navbar=document.querySelector("nav");
let lastScrollY=window.scrollY;

window.addEventListener("scroll", () => {
  if (window.scrollY>lastScrollY) {
    navbar.classList.add("nav-hidden");
  } else {
    navbar.classList.remove("nav-hidden");
  }
  lastScrollY=window.scrollY;
});

// Carousel
const track=document.querySelector('.carousel-track');
const items=document.querySelectorAll('.carousel-item');
const prevButton=document.querySelector('.prev');
const nextButton=document.querySelector('.next');
const dots=document.querySelectorAll('.dot');

let currentIndex=0;
const totalItems=items.length;
let autoSlideInterval;

const moveToSlide=(index) => {
  items[currentIndex].classList.remove('active');
  dots[currentIndex].classList.remove('active');

  currentIndex=index;

  items[currentIndex].classList.add('active');
  dots[currentIndex].classList.add('active');

  track.style.transform=`translateX(-${currentIndex*100}%)`;
};

const startAutoSlide=() => {
  autoSlideInterval=setInterval(() => {
    const nextIndex=(currentIndex+1)%totalItems;
    moveToSlide(nextIndex);
  }, 3000);
};

nextButton.addEventListener('click', () => {
  const nextIndex=(currentIndex+1)%totalItems;
  moveToSlide(nextIndex);
  clearInterval(autoSlideInterval);
  startAutoSlide();
});

prevButton.addEventListener('click', () => {
  const prevIndex=(currentIndex-1+totalItems)%totalItems;
  moveToSlide(prevIndex);
  clearInterval(autoSlideInterval);
  startAutoSlide();
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    moveToSlide(index);
    clearInterval(autoSlideInterval);
    startAutoSlide();
  });
});

startAutoSlide();
