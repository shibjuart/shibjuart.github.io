$(document).ready(function() {

    "use strict";

    $(".about").click(function() {
        toggleArea(".about", "О", 'Всевидящее око? Третий глаз? Масоны? Глаз символизирует сокрытую истину, призывает к мудрости и обращается к совести. Отвечает за духовное видение и познание. "Очи Господа находятся повсюду, созерцая и наблюдая за злом и добром". На тебя смотрят, что будешь делать?');
    });

//    $(".projects").click(function() {
//        toggleArea(".projects", "Projects", '1) Глаза - зеркало души </br> 2) Украсим город');
//    });

    function toggleArea(clazz, name, text) {
        $(clazz).toggleClass("closed");
        var isClosed = $(clazz).hasClass("closed");
        if (isClosed) {
            $(clazz).height(44);
            $(clazz).html(name + ' <svg width="20" height="20"><use xlink:href="#arrow"/></svg>');
        } else {
            $(clazz).height(294);
            $(clazz).html(text);
        }
    }
});