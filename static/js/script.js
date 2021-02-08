$(document).ready(function() {
    let today = new Date()
    let month = today.toLocaleString('default', { month: 'long' }).toLowerCase();
    $("body").addClass(`month-${month}`);
    $(`#${month}-select`).addClass("current");
    $("#light-select").hide();
    $(".food-icons").removeClass("food-icons-active");
    let searchParams = new URLSearchParams(window.location.search);
    let currentCategory = searchParams.get('category');
    $(`#${currentCategory}`).addClass("food-icons-active");


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
});