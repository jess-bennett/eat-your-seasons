$(document).ready(function() {
    let today = new Date()
    let month = today.toLocaleString('default', { month: 'long' }).toLowerCase();
    let chosenTheme = localStorage.getItem("chosentheme") || "light-theme";
    let currentMonth = sessionStorage.getItem("selectedmonth") || month;
    // Set session storage so that it is never undefined
    sessionStorage.setItem("selectedmonth", currentMonth);
    let currentFood = sessionStorage.getItem("selectedfood") || "fruit";
    sessionStorage.setItem("selectedfood", currentFood);

    $("body").addClass(`month-${currentMonth}`);
    $("body").addClass(`${chosenTheme}`);

    $(`#${currentMonth}-select`).addClass("current");

    $(`#${chosenTheme}-select`).hide();

    $(`#${currentFood}`).addClass("food-icons-active");

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

    $("#nav-dashboard").click(function() {
    setDashboardParams();
});

    $("#cta-season").click(function() {
    setDashboardParams();
});

    $(".month-select").click(function() {
    let selectedMonth = $(this).attr("id").substr(0, $(this).attr("id").indexOf('-'));
    sessionStorage.setItem("selectedmonth", selectedMonth);
    setDashboardParams();
    $("body").addClass(`month-${selectedMonth}`);
    $("body[class*='month']").removeClass (function (index, css) {
    return (css.match (/(^|\s)month\S+/g) || []).join(' ');
    });
    $(".month-select").removeClass("current");
    $(this).addClass("current");
});

    $(".food-icons").click(function() {
    let selectedFood = $(this).attr("id");
    sessionStorage.setItem("selectedfood", selectedFood);
    setDashboardParams();
    $(".food-icons").removeClass("food-icons-active");
    $(this).addClass("food-icons-active");
});
    
});

function setDashboardParams() {
    let queryMonth = sessionStorage.getItem("selectedmonth");
    let queryFood = sessionStorage.getItem("selectedfood");
    window.location = `/dashboard/?month=${queryMonth}&category=${queryFood}`;
};
