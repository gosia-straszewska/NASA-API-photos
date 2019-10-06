$(function(){
     
    function getBackground(){
        $.ajax({
            method: "GET",
            url: "https://api.nasa.gov/planetary/apod?api_key=Lf35GhHOZPywhZlRSByshoVe5t9z8byjzFuCEdMC"
        }).done(function(response){
            console.log(response);
            $(".title").css('background-image', `url(${response.hdurl})`);
            $(".title-img").append(`Title: ${response.title}`);
            $(".copyright").append(`Copyright: ${response.copyright}`);
            $(".explanation").append(`About photo: ${response.explanation}`);
        }).fail(function(error){
            console.log(error);
        })
    }

    getBackground()

});