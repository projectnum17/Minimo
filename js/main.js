//Создание слайдера
new Swiper ('.image-slider', {

    //Бесконечность
    loop: true,

    //Изменение курсора
    grabCursor: true,

    //Автопрокрутка
    autoplay: {
        delay: 2500,
    },

    //Скорость
    speed: 800
});