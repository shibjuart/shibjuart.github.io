$(document).ready(function() {

    "use strict";

    if ($(window).height() > $(window).width()) {
        $("body").addClass("mobile");
        $('button.instagram').html('shibjuart <svg width="30" height="30"><use xlink:href="#instagramSmall"/></svg>');
    }

    $(".shibju-text").click(function() {
        var value = 'shibjuart';
        navigator.clipboard.writeText(value);
        alert("Текст скопирован: " + value);
    });

//    $(".about").click(function() {
//        toggleArea(".about", "О", 'Всевидящее око? Третий глаз? Масоны? Глаз символизирует сокрытую истину, призывает к мудрости и обращается к совести. Отвечает за духовное видение и познание. "Очи Господа находятся повсюду, созерцая и наблюдая за злом и добром". На тебя смотрят, что будешь делать?');
//    });
//
//    $(".projects").click(function() {
//        toggleArea(".projects", "Проекты", '1) Глаза - зеркало души </br> 2) Добавим городу красок');
//    });
//
//    $(".artworks").click(function() {
//        toggleArea(".artworks", "Работы", '<div><img class="work" src="images/mult.png"></div><div class="work-name">Mult</div><div><img class="work" src="images/Untitled-1.png"></div><div class="work-name">Emotions</div>');
//    });
//
//    function toggleArea(clazz, name, text) {
//        $(clazz).toggleClass("closed");
//        var isClosed = $(clazz).hasClass("closed");
//        if (isClosed) {
//            $(clazz).height(44);
//            $(clazz).html(name + ' <svg width="20" height="20"><use xlink:href="#arrow"/></svg>');
//        } else {
//            $(clazz).height('auto');
//            $(clazz).html(text);
//        }
//    }
});