$(document).ready(function () {
    let searchToggler  = $('.fa-search')
    let searchBar  = $('.searhWrapForm')

    searchToggler.on('click', function(){
        searchBar.fadeIn(1000);
    })


    // SetBg ....

    $('.ImgBox').each(function(){
        let bg = $(this).data('setbg');

        $(this).css({
          "background-image": "url(" + bg + ")",
          "background-position": "center center",
          "background-size": "cover",
          "background-repeat": "no-repeat",
          
        });
    })


    //  zoombg

    $(window).scroll(function(){
        let sPos = $(this).scrollTop();
        let zoombg = $(".zoombg");

        // console.log(sPos)
        zoombg.css({
            'background-size': 100+sPos+'%',
        })

        
    })

});