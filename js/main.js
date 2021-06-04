$(function(){
    $(".menu").on("click","a", function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});


    $('.blog-slider').slick({
        dots:true,
        arrows: false,
    });

    $('.menu a').on('click', function(){
        $('.menu').toggleClass('menu--active');
        $('body').toggleClass('body-scroll');
        document.getElementById("changeimage").classList.toggle("change");
    })

    $('.menu__btn').on('click', function(){
        $('.menu').toggleClass('menu--active');
        $('body').toggleClass('body-scroll');
    })

    var mixer = mixitup('.gallery__content');

    $(window).scroll(function(){
        if ($(document).scrollTop() > 20) {
            $('.header__inner').addClass('header__inner--bg');
        }
        else {
            $('.header__inner').removeClass('header__inner--bg');
        }
    });
    
});

function myFunction(x) {
    x.classList.toggle("change");
  };


function changeImage() {
    if (document.getElementById("changeimage").outerHTML == '<img id="changeimage" src="images/menu-btn.svg">') 
    {
        document.getElementById("changeimage").outerHTML = '<img id="changeimage" src="images/close-icon.svg">';
    }
    else 
    {
        document.getElementById("changeimage").outerHTML = '<img id="changeimage" src="images/menu-btn.svg">';
    }
}

