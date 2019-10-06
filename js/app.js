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

    function getMarsPhotos(){
        $.ajax({
            method: "GET",
            url: "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=Lf35GhHOZPywhZlRSByshoVe5t9z8byjzFuCEdMC"
        }).done(function(response){
            console.log(response.photos);
            (response.photos).forEach(function(response){
                $('.loadMore').append(
                    `<li><img src="${response.img_src}" class="item" /></li>`
                );
                var list = $(".item");
                console.log(list);
                var sizeList = $("li").length;
                console.log(sizeList);
                var x=6;
                $(".item").slice(0, 2).show() //shows 6 first photos from gallery
                $('#gallery li:lt('+x+')').show();
                $('#loadMore').click(function () {
                    x = (x+3 <= sizeList) ? x+3 : sizeList; // click - shows 3 more imgs
                    $('#gallery li:lt('+x+')').show();
                });

            })
        }).fail(function(error){
            console.log(error);
        });
    };

    getMarsPhotos();
});