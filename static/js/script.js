$(document).ready(function() {
    let today = new Date()
    let month = today.toLocaleString('default', { month: 'long' }).toLowerCase();
    let currentMonth = sessionStorage.getItem("selectedmonth") || month;
    let chosenTheme = localStorage.getItem("chosentheme") || "light-theme";

    $("body").addClass(`month-${currentMonth}`);
    $("body").addClass(`${chosenTheme}`);
    $(`#${currentMonth}-select`).addClass("current");
    $(`#${chosenTheme}-select`).hide();
    $(".food-icons").removeClass("food-icons-active");
    let searchParams = new URLSearchParams(window.location.search);
    let currentCategory = searchParams.get('category');
    $(`#${currentCategory}`).addClass("food-icons-active");


    $("#dark-theme-select").click(function() {
    $("body").addClass("dark-theme");
    $("body").removeClass("light-theme");
    $("#dark-theme-select").hide();
    $("#light-theme-select").show();
    localStorage.setItem("chosentheme", "dark-theme");
});

    $("#light-theme-select").click(function() {
    $("body").addClass("light-theme");
    $("body").removeClass("dark-theme");
    $("#light-theme-select").hide();
    $("#dark-theme-select").show();
    localStorage.setItem("chosentheme", "light-theme");
});

    $(".month-select").click(function() {
    $("body[class*='month']").removeClass (function (index, css) {
    return (css.match (/(^|\s)month\S+/g) || []).join(' ');
    });
    $(".month-select").removeClass("current");
    $(this).addClass("current");
    let selectedMonth = $(this).attr("id").substr(0, $(this).attr("id").indexOf('-'));
    $("body").addClass(`month-${selectedMonth}`);
    sessionStorage.setItem("selectedmonth", selectedMonth);
});
});