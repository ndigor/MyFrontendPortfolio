// Объявление функции для загрузки библиотеки
$(window).on('load', function(){
// Подключение библиотеки, которая включает видеообложку в хэдер
    // Vide.js - video background
    $('#header').vide('./video/coverr', {
        bgColor: '#2e4133'
    })

});