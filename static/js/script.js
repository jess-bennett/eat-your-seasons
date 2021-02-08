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

    $("#cta-season").click(function() {
    // let url = "{% url 'dashboard' %}?month=february&category=fruit";
    // let queryMonth = sessionStorage.getItem("selectedmonth");
    // let queryFood = sessionStorage.getItem("selectedfood");
    // window.location = `/dashboard/?month=${queryMonth}&category=${queryFood}`;
    setDashboardParams();
    // document.location.href = url.replace('february', queryMonth.toString());
    // window.location="{% url 'dashboard' %}?month=february&category=fruit".replace('february', queryMonth);
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

    $(".food-icons").click(function() {
    $(".food-icons").removeClass("food-icons-active");
    $(this).addClass("food-icons-active");
    let selectedFood = $(this).attr("id");
    sessionStorage.setItem("selectedfood", selectedFood);
    console.log(selectedFood);
});
    
});

function setDashboardParams() {
    let queryMonth = sessionStorage.getItem("selectedmonth");
    let queryFood = sessionStorage.getItem("selectedfood");
    window.location = `/dashboard/?month=${queryMonth}&category=${queryFood}`;
};
