$(document).ready(function () {


    //On click of sub=mit for burges to be devoured, the id is captured as an object and an ajax call is made .
    //This is passed to burger_controller.js
    $(".devour-button").on("click", function (event) {
        var answer = {
            id: $(this).data("newdevour")
        };

        $.ajax("/update", {
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

    $(".add-burger").on("click", function (event) {
        var answer = {
            burger_name: $("#burger").val().trim(),
        };


        $.ajax("/add", {
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
    $(".pdf").on("click", function (event) {
       
            var id= $(this).data("newdevour")
        
        var URL='/pdf/'+id;
        $.ajax(URL, {
                type: "GET",
            })
            //We get the reponse of the answers send reload the page
            // .then(
            //     function (response) {
            //         // console.log(response);

            //     }
            // );
    });
});