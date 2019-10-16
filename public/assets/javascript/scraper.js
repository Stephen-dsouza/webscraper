$(document).ready(function () {


    //On click of sub=mit for burges to be devoured, the id is captured as an object and an ajax call is made .
    //This is passed to burger_controller.js
    $(".scrape").on("click", function (event) {
        var answer = {
            id: $(this).data("newdevour")
        };

        $.ajax("/scrape", {
                type: "POST",
                data: answer
            })
            //We get the reponse of the answers send reload the page
            .then(
                function (response) {
                    location.reload();
                }
            );


    });

});