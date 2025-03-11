    let swiper = new Swiper(".slider", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });  
    let swiper2 = new Swiper(".slider2", {
        loop: true,
        navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
        },
        
        pagination: {
                el: ".swiper-pagination",
                clickable: true,
        },
    });