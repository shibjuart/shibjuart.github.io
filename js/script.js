$(document).ready(function() {

    "use strict";

    if ($(window).height() > $(window).width()) {
        $("body").addClass("mobile");
        $('button.instagram').html('shibjuart <svg width="30" height="30"><use xlink:href="#instagramSmall"/></svg>');
    }

//    $(".shibju-text").click(function() {
//        var value = 'shibjuart';
//        navigator.clipboard.writeText(value);
//        alert("Текст скопирован: " + value);
//    });
//Всевидящее око? Третий глаз? Масоны? Обо всем этом и не только в нашем <span class='inst-text'>instagram</span>. Ссылка внизу, но по понятным причинам она не работает, просто вбейте <span class='shibju-text'>shibjuart</span> в поиске (можно нажать на надпись и текст скопируется). И удачи :)


    $(".about").click(function() {
        toggleArea(".about", "О", 'Всевидящее око? Третий глаз? Масоны? Глаз символизирует сокрытую истину, призывает к мудрости и обращается к совести. Отвечает за духовное видение и познание. "Очи Господа находятся повсюду, созерцая и наблюдая за злом и добром". На тебя смотрят, что будешь делать?');
    });

    $(".projects").click(function() {
        toggleArea(".projects", "Проекты", '1) Глаза - зеркало души </br> 2) Добавим городу красок');
    });

    $(".artworks").click(function() {
        toggleArea(".artworks", "Работы", '<div><img class="work" src="images/world.jpg"></div><div class="work-name">Мир</br>Холст 33х33см (3₽)</div><div><img class="work" src="images/secular world.jpg"></div><div class="work-name">Светский мир</br>Холст 33х33см (5₽)</div><div><img class="work" src="images/inner world.jpg"></div><div class="work-name">Внутренний мир</br>Холст 33х33см (5₽)</div><div><img class="work" src="images/mult.png"></div><div class="work-name">Первая картина из серии "Мульт"</br>Холст 50х50см (10₽)</div><div><img class="work" src="images/mult2.png"></div><div class="work-name">Вторая картина из серии "Мульт"</br>Холст 50х70см (15₽)</div><div><video muted class="work" controls><source src="images/эв.mp4" type="video/mp4"></video></div><div class="work-name">Эмоции и разум</br>Холст 56х200см (30₽)</div>');
    });

    function toggleArea(clazz, name, text) {
        $(clazz).toggleClass("closed");
        var isClosed = $(clazz).hasClass("closed");
        if (isClosed) {
            $(clazz).height(44);
            $(clazz).html(name + ' <svg width="20" height="20"><use xlink:href="#arrow"/></svg>');
        } else {
            $(clazz).height('auto');
            $(clazz).html(text);
        }
    }
});