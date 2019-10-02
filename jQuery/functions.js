$(function(){
    var showDescriptionSpeed = 700;
    var hoverPictureSpeed = 300;
    var elementInteractionSpeed = 400;

    $('#svg-picture').hover(function () {
        $('#svg-description').slideToggle(hoverPictureSpeed)
        $('#svg-picture').css({"box-shadow" : "2px 2px 10px", transition: 'box-shadow '+hoverPictureSpeed +'ms ease-in-out'})
    }, function () {
        $('#svg-description').slideToggle(hoverPictureSpeed)
        $('#svg-picture').css({"box-shadow" : "5px 5px 30px", transition: 'box-shadow '+hoverPictureSpeed +'ms ease-in-out'})
    });


    $('#canvas').hover(function () {
        $('#canvas-description').slideToggle(hoverPictureSpeed)
        $('#canvas').css({"box-shadow" : "2px 2px 10px", transition: 'box-shadow '+hoverPictureSpeed +'ms ease-in-out'})
    }, function () {
        $('#canvas-description').slideToggle(hoverPictureSpeed)
        $('#canvas').css({"box-shadow" : "5px 5px 30px", transition: 'box-shadow '+hoverPictureSpeed +'ms ease-in-out'})
    });

    $("#btn1").on('click', function(){
        var hide = "Hide documentation"
        var show = "Show documentation"
        if($('#documentation').is(':visible')){
            $('#btn1').html(show);
            $('#main').css({opacity:1,transition:'opacity '+showDescriptionSpeed +'ms ease-in-out'});
            $('#footer').css({
                transition : 'background-color '+ showDescriptionSpeed +'ms ease-in-out',
                transition : 'border-top '+showDescriptionSpeed+'ms ease-in-out',
                "background-color": "#f2f2f2",
                "border-top-color":'transparent'
            });
        }else{
            $('#btn1').html(hide);
            $('#main').css({opacity:0.2,transition:'opacity '+showDescriptionSpeed +'ms ease-in-out'});
            $('#footer').css({
                transition : 'background-color '+ showDescriptionSpeed +'ms ease-in-out',
                transition : 'border-top '+showDescriptionSpeed+'ms ease-in-out',
                "background-color": "#d9d9d9",
                "border-top":'2px #00a3cc solid'
            });
        }
        $('#documentation').slideToggle(showDescriptionSpeed);
    });

    $('#triangle').hover(function () {
        $('#triangle').css({"fill" : "#005266", transition: 'fill '+elementInteractionSpeed +'ms ease-in-out'})
    }, function () {
        $('#triangle').css({"fill" : "#b3f0ff", transition: 'fill '+elementInteractionSpeed +'ms ease-in-out'})
    });

    $('#rec2').hover(function () {
        $('#rec2').css({"fill" : "#005266", transition: 'fill '+elementInteractionSpeed +'ms ease-in-out'})
    }, function () {
        $('#rec2').css({"fill" : "transparent", transition: 'fill '+elementInteractionSpeed +'ms ease-in-out'})
    });

    $('#circ1').hover(function () {
        $('#circ1').attr('r', '30');
    }, function () {
        $('#circ1').attr('r', '20');
    });

    $('#hexagon').hover(function () {
        $('#hexagon').css({"stroke" : "#005266", transition: 'stroke '+elementInteractionSpeed +'ms ease-in-out'})
    }, function () {
        $('#hexagon').css({"stroke" : "#33d6ff", transition: 'stroke '+elementInteractionSpeed +'ms ease-in-out'})
    });

    $('#rec1').hover(function () {
        $('#rec1').css({"opacity" : "0.3", transition: 'opacity '+elementInteractionSpeed +'ms ease-in-out'})
    }, function () {
        $('#rec1').css({"opacity" : "1", transition: 'opacity '+elementInteractionSpeed +'ms ease-in-out'})
    });


});