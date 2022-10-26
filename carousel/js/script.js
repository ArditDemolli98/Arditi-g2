rightArrow = document.querySelector(".right-arrow");
leftArrow = document.querySelector(".left-arrow");

sliderImages = document.querySelectorAll(".slider-image");
dots = document.querySelectorAll(".dot");

let counter = 0;

rightArrow.addEventListener('click', function () {
    sliderImages[counter].classList.remove("active");
    sliderImages[counter].classList.add("not-active");
    dots[counter].classList.remove('dot-active');

    counter++;
    if (counter > sliderImages.length - 1) counter = 0;

    sliderImages[counter].classList.remove("not-active");
    sliderImages[counter].classList.add("active");
    dots[counter].classList.add('dot-active');
})

leftArrow.addEventListener('click', function () {
    sliderImages[counter].classList.remove("active");
    sliderImages[counter].classList.add("not-active");
    dots[counter].classList.remove('dot-active');

    counter <= 0 ? counter = sliderImages.length - 1 : counter--;

    sliderImages[counter].classList.remove("not-active");
    sliderImages[counter].classList.add("active");
    dots[counter].classList.add('dot-active');
})

const removeActiveContent = function () {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].classList.remove('active');
        sliderImages[i].classList.add('not-active');

        dots[i].classList.remove('dot-active');
    }
}

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function () {
        counter = i;

        removeActiveContent();
        sliderImages[i].classList.add('active');
        sliderImages[i].classList.remove('not-active');

        dots[i].classList.add('dot-active');
    })
}
