$(document).ready(function() {
    /* SITE WIDE JS */
    let today = new Date();
    let month = today.toLocaleString('default', { month: 'long' }).toLowerCase();
    let chosenTheme = localStorage.getItem("chosentheme") || "light-theme";
    let currentMonth = sessionStorage.getItem("selectedmonth") || month;
    let currentWeek = sessionStorage.getItem("selectedweek") || 1;
    let currentQuantity = sessionStorage.getItem("selectedquantity") || 'two';

    // Set session storage so that it is never undefined
    sessionStorage.setItem("selectedmonth", currentMonth);
    sessionStorage.setItem("selectedweek", currentWeek);
    sessionStorage.setItem("selectedquantity", currentQuantity);

    // Hide elements on page load
    $(".interval-year").hide();
    $("#payment-form").hide();

    // Change between dark/light theme across site
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

    // Change the current month view
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

    /* NAVIGATION JS */
    // Navigate to site pages with current parameters
    $("#nav-dashboard").click(function() {
    locationDashboard();
    });

    $(".seasons-anchor").click(function() {
    locationDashboard();
    });

    $(".recipes-anchor").click(function() {
    locationRecipes();
    });

    $(".plan-anchor").click(function() {
        locationPlans();
    });

    /* DASHBOARD JS */
    // Change the current food type on dashboard page
    $(".food-icons").click(function() {
    let selectedFood = $(this).attr("id");
    sessionStorage.setItem("selectedfood", selectedFood);
    changeFoodParams();
    $(".food-icons").removeClass("food-icons-active");
    $(this).addClass("food-icons-active");
    });

    /* PLAN JS */
    // Disable arrows on plan page
    if (currentWeek == 1) {
    $("#arrow-left").addClass("disabled");
    $("#arrow-left").removeClass("hvr-pop");
    }

    if (currentWeek == 4) {
    $("#arrow-right").addClass("disabled");
    $("#arrow-right").removeClass("hvr-pop");
    }
    
    // Change current week on plan page
    $("#arrow-left").click(function() {
        let currentWeek = parseInt(sessionStorage.getItem("selectedweek"));
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
        let currentWeek = parseInt(sessionStorage.getItem("selectedweek"));
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

    // Display current week on plan page
    $("#week-title").html(`Week ${currentWeek}`);
    let currentFood = sessionStorage.getItem("selectedfood") || "fruit";
    sessionStorage.setItem("selectedfood", currentFood);  
    
    // Change quantity on plan page
    $(".quantity-icons").click(function() {
        let selectedQuantity = $(this).attr("id").substr(0, $(this).attr("id").indexOf('-'));
        sessionStorage.setItem("selectedquantity", selectedQuantity);
        changeQuantityParams();
        $(".quantity-icons").removeClass("quantity-icons-active");
        $(this).addClass("quantity-icons-active");
    });

    // Remove ingredients list if empty
    $('li').filter(function(){
        return $.trim($(this).html()) == '';
    }).hide();

    $('li').filter(function(){
        return $.trim($(this).html()) == '';
    }).parents(".recipe-text").hide();


    /* MEMBERSHIP JS*/
    // Show/hide subscription options
    $("#subscription-btn").click(function(){
    $("#subscription-info").toggleClass("hidden");
    });

    // Highlight chosen interval type (monthly or annual)
    $(".interval-box").click(function() {
        $(".interval-box").removeClass("is-selected");
        $(this).addClass("is-selected");
        let selectedInterval = $(this).attr("id").substr(0, $(this).attr("id").indexOf('-'));
        $(".interval-type").hide();
        $(`.interval-${selectedInterval}`).show();
    });

    // Highlight chose subscription
    $(".subscription-box").click(function() {
        $(".subscription-box").removeClass("is-selected");
        $(this).addClass("is-selected");
        if ($(this).attr("id") == "free-plan") {
            $("#payment-form").hide();
        } else {
            $("#payment-form").show();
        }
    });

    /* MISC JS */
    // Change colour theme across site to reflect selected month
    $("body").addClass(`month-${currentMonth}`);
    $("body").addClass(`${chosenTheme}`);

    $(`#${currentMonth}-select`).addClass("current");

    $(`#${chosenTheme}-select`).hide();

    $(`#${currentQuantity}-select`).addClass("quantity-icons-active");

    $(`#${currentFood}`).addClass("food-icons-active");
    
});

// Navigation functions taken parameters from sessionStorage
function locationDashboard() {
    let queryMonth = sessionStorage.getItem("selectedmonth");
    let queryFood = sessionStorage.getItem("selectedfood");
    window.location = `/dashboard/?month=${queryMonth}&category=${queryFood}`;
}

function locationRecipes() {
    let queryMonth = sessionStorage.getItem("selectedmonth");
    window.location = `/recipes/?month=${queryMonth}`;
}

function locationPlans() {
    let queryMonth = sessionStorage.getItem("selectedmonth");
    let queryWeek = sessionStorage.getItem("selectedweek");
    let queryQuantity = sessionStorage.getItem("selectedquantity");
    window.location = `/plan/?month=${queryMonth}&week=${queryWeek}&quantity=${queryQuantity}`;
}

// Functions to change current parameters dependent on user selections
function changeMonthParams() {
    let queryMonth = sessionStorage.getItem("selectedmonth");
    let url = (new URL(document.location));
    let search_params  = url.searchParams;
    search_params.set('month', queryMonth);
    url.search = search_params.toString();
    let new_url = url.toString();
    window.location = new_url;
}

function changeFoodParams() {
    let queryFood = sessionStorage.getItem("selectedfood");
    let url = (new URL(document.location));
    let search_params  = url.searchParams;
    search_params.set('category', queryFood);
    url.search = search_params.toString();
    let new_url = url.toString();
    window.location = new_url;
}

function changeQuantityParams() {
    let queryQuantity = sessionStorage.getItem("selectedquantity");
    let url = (new URL(document.location));
    let search_params  = url.searchParams;
    search_params.set('quantity', queryQuantity);
    url.search = search_params.toString();
    let new_url = url.toString();
    window.location = new_url;
}

