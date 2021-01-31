$(document).ready(function() {
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
});

