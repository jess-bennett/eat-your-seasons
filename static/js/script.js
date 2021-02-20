$(document).ready(function() {
    let today = new Date()
    let month = today.toLocaleString('default', { month: 'long' }).toLowerCase();
    let chosenTheme = localStorage.getItem("chosentheme") || "light-theme";
    let currentMonth = sessionStorage.getItem("selectedmonth") || month;
    let currentWeek = sessionStorage.getItem("selectedweek") || 1;
    // Set session storage so that it is never undefined
    sessionStorage.setItem("selectedmonth", currentMonth);
    sessionStorage.setItem("selectedweek", currentWeek);
    console.log(currentWeek);
    
    $("#week-title").html(`Week ${currentWeek}`);
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
    locationDashboard();
});

    $(".seasons-anchor").click(function() {
    locationDashboard();
});

    $(".month-select").click(function() {
    let selectedMonth = $(this).attr("id").substr(0, $(this).attr("id").indexOf('-'));
    sessionStorage.setItem("selectedmonth", selectedMonth);
    changeMonthParams();
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
    changeFoodParams();
    $(".food-icons").removeClass("food-icons-active");
    $(this).addClass("food-icons-active");
});

    $(".recipes-anchor").click(function() {
    locationRecipes();
});

$(".plan-anchor").click(function() {
    locationPlans();
});

$("#arrow-left").click(function() {
    let currentWeek = parseInt(sessionStorage.getItem("selectedweek"))
    console.log(currentWeek);
    if (currentWeek > 1) {
    currentWeek -= 1;
    sessionStorage.setItem("selectedweek", currentWeek);
}
    locationPlans();
});

$("#arrow-right").click(function() {
    let currentWeek = parseInt(sessionStorage.getItem("selectedweek"))
    console.log(currentWeek);
    if (currentWeek < 4) {
    currentWeek += 1;
    sessionStorage.setItem("selectedweek", currentWeek);
}
    locationPlans();
});


    
});

function locationDashboard() {
    let queryMonth = sessionStorage.getItem("selectedmonth");
    let queryFood = sessionStorage.getItem("selectedfood");
    window.location = `/dashboard/?month=${queryMonth}&category=${queryFood}`;
};

function locationRecipes() {
    let queryMonth = sessionStorage.getItem("selectedmonth");
    window.location = `/recipes/?month=${queryMonth}`;
};

function locationPlans() {
    let queryMonth = sessionStorage.getItem("selectedmonth");
    let queryWeek = sessionStorage.getItem("selectedweek");
    window.location = `/plan/?month=${queryMonth}&week=${queryWeek}`;
};

function changeMonthParams() {
    let queryMonth = sessionStorage.getItem("selectedmonth");
    let url = (new URL(document.location))
    let search_params  = url.searchParams;
    search_params.set('month', queryMonth);
    url.search = search_params.toString();
    let new_url = url.toString();
    window.location = new_url;
}

function changeFoodParams() {
    let queryFood = sessionStorage.getItem("selectedfood");
    let url = (new URL(document.location))
    let search_params  = url.searchParams;
    search_params.set('category', queryFood);
    url.search = search_params.toString();
    let new_url = url.toString();
    window.location = new_url;
}

