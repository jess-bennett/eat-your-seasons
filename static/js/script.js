$(document).ready(function() {
    $("#light-select").hide();

    $("#dark-select").click(function() {
    $("body").removeClass("dark-theme");
    $("body").addClass("light-theme");
    $("#dark-select").hide();
    $("#light-select").show();
});

    $("#light-select").click(function() {
    $("body").removeClass("light-theme");
    $("body").addClass("dark-theme");
    $("#light-select").hide();
    $("#dark-select").show();
});
});

