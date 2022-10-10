$('.section_reviews_carousel').each(function () {
    const pagination = '.swiper-pagination_' + this.dataset.section;
    const buttonPrev = '.swiper-button-prev_' + this.dataset.section;
    const buttonNext = '.swiper-button-next_' + this.dataset.section;
    const swiper = new Swiper(this,{
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: pagination,
            type: 'bullets', 
            clickable: true,
        },
        navigation: {
            nextEl: buttonNext,
            prevEl: buttonPrev,
          },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 60,
            }
        }
    });
})