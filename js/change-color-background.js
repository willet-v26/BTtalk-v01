$(document).ready(function(){
    $("button.button-change-color").click(function(){
        $("body").toggleClass("body-change");
        $(".panel-default > .panel-heading + .panel-collapse > .panel-body, .btn-default").toggleClass("all-change");
        $(".icon-Bartek-icon, .icon-Hania-icon, .icon-Natalia-icon, .icon-Ola-icon").toggleClass("face-change");
        $(".content").toggleClass("timeline-content-change");
    });
});
