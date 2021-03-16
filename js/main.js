$(document).ready(function() {
    
$(".nav__icon").on("click", function () {
    $(".header-wrapper").toggleClass("header-modal"),
        $(".header-logo__text").toggleClass("menu-hidden"),
        $(".header-menu__list").toggleClass("menu-visible"),
        $(".header-links").toggleClass("links-visible"),

        $(".header-inner").toggleClass("header-inner--block"),
        $(".header-menu__list-link").toggleClass("menu-list__link"),

        $(".nav__icon").toggleClass("open"),



        $(".header-menu__wrapper").toggleClass("header-menu__wrapper--active"),
        $("html").toggleClass("modal--overflow");
})


$(".open").on("click", function () {
    $(".header-wrapper").removeClass("header-modal")
    // $(".header-logo__text").removeClass("menu-hidden"),
    // $(".header-menu__list").removeClass("menu-visible"),
    // $(".header-links").removeClass("links-visible"),

    // $(".header-inner").removeClass("header-inner--block"),
    // $(".header-menu__list-link").removeClass("menu-list__link"),

    // $(".nav__icon").removeClass("open"),



    // $(".header-menu__wrapper").removeClass("header-menu__wrapper--active"), 
    // $("html").removeClass("modal--overflow");
    // return false;
})


//E-mail Ajax Send
$("form").submit(function () { //Change
    var th = $(this);
    $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
    }).done(function () {
        alert("Thank you!");
        setTimeout(function () {
            // Done Functions
            th.trigger("reset");
        }, 1000);
    });
    return false;
});

});