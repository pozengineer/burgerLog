// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-devour").on("click", function (event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var newDevourState = {
            devour: newDevour
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed devour to", newDevour);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var userInput = $("#ca").val().trim()
        console.log(userInput);

        if(userInput !== '') {
            var newBurger = {
                burgerName: $("#ca").val().trim(),
                // devour: $("[name=devour]:checked").val().trim()
            };
             // Send the POST request.
             $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                function () {
                    console.log("created new burger");
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        }
        else {
            alert('No value entered!')
        }
    });

    $(".delBurger").on("click", function (event) {
        console.log("Delete button clicked");
        var id = $(this).data("id");
        console.log(id);

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted id ", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $("#addmovie").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newMovie = {
            movie: $("#addmovie [name=movie]").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/movies", {
            type: "POST",
            data: newMovie
        }).then(
            function () {
                console.log("added new movie");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $("#updatemovie").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var id = $("[name=id]").val().trim();

        var updatedMovie = {
            movie: $("#updatemovie [name=movie]").val().trim()
        };

        // Send the PUT request.
        $.ajax("/api/movies/" + id, {
            type: "PUT",
            data: updatedMovie
        }).then(
            function () {
                console.log("updated id ", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});  