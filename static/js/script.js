$(document).ready(function() {
    let today = new Date()
    let month = today.toLocaleString('default', { month: 'long' }).toLowerCase();
    let chosenTheme = localStorage.getItem("chosentheme") || "light-theme";
    let currentMonth = sessionStorage.getItem("selectedmonth") || month;
    let currentWeek = sessionStorage.getItem("selectedweek") || 1;
    let currentQuantity = sessionStorage.getItem("selectedquantity") || 'four';
    // Set session storage so that it is never undefined
    sessionStorage.setItem("selectedmonth", currentMonth);
    sessionStorage.setItem("selectedweek", currentWeek);
    sessionStorage.setItem("selectedquantity", currentQuantity);
    $(".interval-year").hide();
    $("#payment-form").hide();

    if (currentWeek == 1) {
    $("#arrow-left").addClass("disabled");
    $("#arrow-left").removeClass("hvr-pop");
}
    if (currentWeek == 4) {
    $("#arrow-right").addClass("disabled");
    $("#arrow-right").removeClass("hvr-pop");
}
    
    $("#week-title").html(`Week ${currentWeek}`);
    let currentFood = sessionStorage.getItem("selectedfood") || "fruit";
    sessionStorage.setItem("selectedfood", currentFood);

    $("body").addClass(`month-${currentMonth}`);
    $("body").addClass(`${chosenTheme}`);

    $(`#${currentMonth}-select`).addClass("current");

    $(`#${chosenTheme}-select`).hide();

    $(`#${currentQuantity}-select`).addClass("quantity-icons-active");

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
    if (currentWeek > 1) {
    $("#arrow-left").removeClass("disabled");
    $("#arrow-left").addClass("hvr-pop");
    currentWeek -= 1;
    sessionStorage.setItem("selectedweek", currentWeek);
}   else {
    $("#arrow-left").addClass("disabled");
    $("#arrow-left").removeClass("hvr-pop");
}
    locationPlans();
});

$("#arrow-right").click(function() {
    let currentWeek = parseInt(sessionStorage.getItem("selectedweek"))
    if (currentWeek < 4) {
    $("#arrow-right").removeClass("disabled");
    $("#arrow-right").addClass("hvr-pop");
    currentWeek += 1;
    sessionStorage.setItem("selectedweek", currentWeek);
}   else {
    $("#arrow-right").addClass("disabled");
    $("#arrow-right").removeClass("hvr-pop");
}
    locationPlans();
});

$(".quantity-icons").click(function() {
    let selectedQuantity = $(this).attr("id").substr(0, $(this).attr("id").indexOf('-'));
    sessionStorage.setItem("selectedquantity", selectedQuantity);
    changeQuantityParams();
    $(".quantity-icons").removeClass("quantity-icons-active");
    $(this).addClass("quantity-icons-active");
});

$('li').filter(function(){
    return $.trim($(this).html()) == '';
}).hide();

$('li').filter(function(){
    return $.trim($(this).html()) == '';
}).parents(".recipe-text").hide();

$(".subscription-box").click(function() {
    $(".subscription-box").removeClass("is-selected");
    $(this).addClass("is-selected");
    if ($(this).attr("id") == "free-plan") {
        $("#payment-form").hide();
    } else {
        $("#payment-form").show();
    }
});

$(".interval-box").click(function() {
    $(".interval-box").removeClass("is-selected");
    $(this).addClass("is-selected");
    let selectedInterval = $(this).attr("id").substr(0, $(this).attr("id").indexOf('-'));
    console.log(selectedInterval);
    $(".interval-type").hide();
    $(`.interval-${selectedInterval}`).show();
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
    let queryQuantity = sessionStorage.getItem("selectedquantity");
    window.location = `/plan/?month=${queryMonth}&week=${queryWeek}&quantity=${queryQuantity}`;
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

function changeQuantityParams() {
    let queryQuantity = sessionStorage.getItem("selectedquantity");
    let url = (new URL(document.location))
    let search_params  = url.searchParams;
    search_params.set('quantity', queryQuantity);
    url.search = search_params.toString();
    let new_url = url.toString();
    window.location = new_url;
}

