$(document).ready(function() {
    $("#summer-box").hide();
    $("#autumn-box").hide();
    $("#winter-box").hide();
    let today = new Date()
    let month = today.toLocaleString('default', { month: 'long' }).toLowerCase();
    $("body").addClass(`month-${month}`);
    $(`#${month}-select`).addClass("current");
    $("#light-select").hide();

    $("#dark-select").click(function() {
    $("body").addClass("dark-theme");
    $("body").removeClass("light-theme");
    $("#dark-select").hide();
    $("#light-select").show();
});

    $("#light-select").click(function() {
    $("body").addClass("light-theme");
    $("body").removeClass("dark-theme");
    $("#light-select").hide();
    $("#dark-select").show();
});

    $(".month-select").click(function() {
    $("body[class*='month']").removeClass (function (index, css) {
    return (css.match (/(^|\s)month\S+/g) || []).join(' ');
    });
    $(".month-select").removeClass("current");
    $(this).addClass("current");
    let selectMonth = $(this).attr("id").substr(0, $(this).attr("id").indexOf('-'));
    $("body").addClass(`month-${selectMonth}`);
});

$(".food-icons").click(function() {
    $(".food-icons").removeClass("food-icons-active");
    $(this).addClass("food-icons-active");
});

$(".info-box").click(function() {
    $(".info-box").removeClass("info-active");
    $(this).addClass("info-active");
    $(".info-text").hide();
    let selectBox = $(this).attr("id");
    $(`#${selectBox}-box`).show();
});
});