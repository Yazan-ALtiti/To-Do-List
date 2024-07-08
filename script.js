$(document).ready(function () {
    if (localStorage.getItem("tasks")) {
        $("#list-container").html(localStorage.getItem("tasks"));
    }

    // Add Task
    $("button").click(function () {
        var inputValue = $("#input-box").val();
        if (inputValue === '') {
            alert("You must write something!");
        } else {
            $("#list-container").append("<li>" + inputValue + "<span class='close'>\u00D7</span></li>");
            localStorage.setItem("tasks", $("#list-container").html());

        }
        $("#input-box").val('');
    });

    // Mark Task as Done
    $("#list-container").on("click", "li", function () {
        $(this).toggleClass("checked");
        localStorage.setItem("tasks", $("#list-container").html());
    });

    // Delete Task
    $("#list-container").on("click", ".close", function (event) {
        event.stopPropagation();
        $(this).parent().remove();
        localStorage.setItem("tasks", $("#list-container").html());
    });
});

