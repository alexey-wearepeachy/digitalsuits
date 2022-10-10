$('.section_product-list_carousel').each(function () {
    const pagination = '.swiper-pagination_' + this.dataset.section;
    const swiper = new Swiper(this,{
        slidesPerView: 1,
        loop: true,
        spaceBetween: 10,
        pagination: {
            el: pagination,
            type: 'bullets', 
            clickable: true,
        },
        breakpoints: {
            480: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            }
        }
    });
   
})