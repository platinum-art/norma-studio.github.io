$(".lazy07").lazyload({effect:"fadeIn"});new WOW().init();setTimeout(function () {$('.preload').hide();}, 200);

$('[data-remodal-target="modal4"]').click(function(){$(".remodal-wrapper").addClass("remodal-wrapper_act");});
$('[data-remodal-target="modal5"]').click(function(){$(".remodal-wrapper").addClass("remodal-wrapper_act");});
$('[data-remodal-target="modal6"]').click(function(){$(".remodal-wrapper").addClass("remodal-wrapper_act");});
$('[data-remodal-target="modal7"]').click(function(){$(".remodal-wrapper").addClass("remodal-wrapper_act");});
$('.remodal-close').click(function(){$(".remodal-wrapper").removeClass("remodal-wrapper_act");});

var _href7 = window.location.hash, canonical7 = $('link[rel="canonical"]').attr("href"), canonicalLink1 = 'https://norma-studio.github.io/', cl11 = '#ex1', cl12 = '#ex2', cl16 = '#ex6', cl10 = 'index.html';

if((canonical7+cl10+cl11) == (canonicalLink1+cl10+_href7)){$(".mnu span:eq(0) a").addClass("a_mnu_act");}
else if(canonical7+cl10+cl12 == canonicalLink1+cl10+_href7){$(".mnu span:eq(5) a").addClass("a_mnu_act");}
else if((canonical7+cl10+cl16) == (canonicalLink1+cl10+_href7)){$(".mnu span:eq(6) a").addClass("a_mnu_act");}
else if(canonical7 == canonicalLink1){$(".mnu span:eq(0) a").addClass("a_mnu_act");}

$(".img_play").click(function(){
var audio=document.querySelector("#audio");
var tracks=["https://eveprest.ru/v/Cases-Last-ver1.mp4"];
var index=0;var status=0;
audio.onended=function(){
    index++;
    if(index>=tracks.length){index=0};
    audio.src=tracks[index];
    audio.play();
    status=0;
}
audio.src=tracks[index];
audio.volume=0;
$(".video").addClass("video_act");audio.play();});
$(".video").click(function(){$(this).removeClass("video_act");audio.stop();});

$(".s_08 .item").click(function(){
var eee = $(this).text();

// alert(eee);
$(".form66 input[name=id66]").attr("value", eee);
});

$(".burger").click(function(){
$(".burger").toggleClass("opened");
$(".wr_mnu").toggleClass("wr_mnu_act");
$(".body").toggleClass("body_100vh");
});
$(".mnu a").click(function(){
$(".burger").removeClass("opened");
$(".wr_mnu").removeClass("wr_mnu_act");
$(".body").removeClass("body_100vh");
});
$(window).scroll(function(){if($(this).scrollTop()>1000){$('.wr_btn2').removeClass('dn');}else if ($(this).scrollTop()<1000){$('.wr_btn2').addClass('dn');}});
$(window).scroll(function(){if($(this).scrollTop()>2000){$('.wr_btn3').removeClass('dn');}else if ($(this).scrollTop()<2000){$('.wr_btn3').addClass('dn');}});
$(window).scroll(function(){if($(this).scrollTop()>1000){$('.wr_burger').removeClass('dn');}else if ($(this).scrollTop()<1000){$('.wr_burger').addClass('dn');}});
$(".t654__icon-close").click(function(){$(".wr_btn3").addClass("dn2");});
$(".menu-ex").on("click","a", function (event) {event.preventDefault();var id  = $(this).attr('href'),top = $(id).offset().top;$('body,html').animate({scrollTop: top}, 1500);});

  $(window).scroll(function(){
    $('.s_05').each(function(){
      var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
      if (cPos < topWindow + screen /2) {
            $('.wr_black').addClass('wr_black_act');
$('.num1').animate({ num: 1250 - 2}, {
    duration: 3000,
    step: function (num){
        this.innerHTML = '> '+(num + 2).toFixed(0)
    }
});
$('.num').removeClass('num1');
        }
    });
  });
$(window).scroll(function(){$('.wr_txt61').each(function(){var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();if (cPos < topWindow + screen /2) {
$('.wr_txt61').addClass('wr_txt_act');
}});});
$(window).scroll(function(){$('.wr_txt62').each(function(){var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();if (cPos < topWindow + screen /2) {
$('.wr_txt62').addClass('wr_txt_act');
}});});
$(window).scroll(function(){$('.wr_txt63').each(function(){var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();if (cPos < topWindow + screen /2) {
$('.wr_txt63').addClass('wr_txt_act');
}});});
$(window).scroll(function(){$('.wr_txt64').each(function(){var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();if (cPos < topWindow + screen /2) {
$('.wr_txt64').addClass('wr_txt_act');
}});});
$(window).scroll(function(){$('.wr_txt6a1').each(function(){var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();if (cPos < topWindow + screen /2) {
$('.wr_txt6a1').addClass('wr_txt_act');
}});});
$(window).scroll(function(){$('.wr_txt6a2').each(function(){var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();if (cPos < topWindow + screen /2) {
$('.wr_txt6a2').addClass('wr_txt_act');
}});});
$(window).scroll(function(){$('.wr_txt6a3').each(function(){var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();if (cPos < topWindow + screen /2) {
$('.wr_txt6a3').addClass('wr_txt_act');
}});});
$(window).scroll(function(){$('.wr_txt6a1').each(function(){var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();if (cPos < topWindow + screen /2) {
$('.wr_txt6a1').addClass('wr_txt6a1_act');
}});});
$(window).scroll(function(){$('.wr_txt61').each(function(){var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();if (cPos < topWindow + screen /2) {
$('.wr_txt61').addClass('wr_txt61_act');
}});});

var input = document.querySelector("#phone77");
    window.intlTelInput(input, {
      initialCountry: "ru",
});
$(document).ready(function() {
  $('.button77').click(function() {
    var val = $('#phone77').val();
    if(val != '') {
      if(/[^[0-9+-]/.test(val)){
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if(pattern.test(val)){
          $('.valid').text('');
        } else {
          $('.valid').text('Не верно введен e-mail');
        }
      } else {
        var pattern2 = /^\d[\d\(\)\ -+-]{4,14}\d$/;
        if(val.length >= 10 && val.length <= 14 && pattern2.test(val)) {
          $('.valid').text('');
          $('.modal_form44').addClass('modal_form_act');
          $('.modal_sub').addClass('modal_sub_act');
                $.post('https://eveprest.ru/submit/norma-studio.php',{
                    name:$('[name="name77"]').val(),
                    phone:$('[name="phone77"]').val(),
                    email:$('[name="email77"]').val(),
                    message:$('[name="message77"]').val(),
                    id:$('[name="id77"]').val()
                })} else {
          $('.valid').text('Не верно введен номер телефона');
        }}} else {
      $('.valid').text('Введите Ваш телефон');
    }
  });
});
var _href3 = window.location.hostname;var body3 = $('body');var site3 = 'norma-studio.github.io';if (_href3 != site3) {$(body3).remove();}
document.ondragstart = noselect;document.onselectstart = noselect;document.oncontextmenu = noselect;function noselect() {return false;}
var input = document.querySelector("#phone66");
    window.intlTelInput(input, {
      initialCountry: "ru",
});
$(document).ready(function() {
  $('.button66').click(function() {
    var val = $('#phone66').val();
    if(val != '') {
      if(/[^[0-9+-]/.test(val)){
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if(pattern.test(val)){
          $('.valid').text('');
        } else {
          $('.valid').text('Не верно введен e-mail');
        }
      } else {
        var pattern2 = /^\d[\d\(\)\ -+-]{4,14}\d$/;
        if(val.length >= 10 && val.length <= 14 && pattern2.test(val)) {
          $('.valid').text('');
          $('.modal_form44').addClass('modal_form_act');
          $('.modal_sub').addClass('modal_sub_act');
                $.post('https://eveprest.ru/submit/norma-studio.php',{
                    name:$('[name="name66"]').val(),
                    phone:$('[name="phone66"]').val(),
                    email:$('[name="email66"]').val(),
                    message:$('[name="message66"]').val(),
                    id:$('[name="id66"]').val()
                })} else {
          $('.valid').text('Не верно введен номер телефона');
        }}} else {
      $('.valid').text('Введите Ваш телефон');
    }
  });
});

var input = document.querySelector("#phone55");
    window.intlTelInput(input, {
      initialCountry: "ru",
});
$(document).ready(function() {
  $('.button55').click(function() {
    var val = $('#phone55').val();
    if(val != '') {
      if(/[^[0-9+-]/.test(val)){
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if(pattern.test(val)){
          $('.valid').text('');
        } else {
          $('.valid').text('Не верно введен e-mail');
        }
      } else {
        var pattern2 = /^\d[\d\(\)\ -+-]{4,14}\d$/;
        if(val.length >= 10 && val.length <= 14 && pattern2.test(val)) {
          $('.valid').text('');
          $('.modal_form44').addClass('modal_form_act');
          $('.modal_sub').addClass('modal_sub_act');
                $.post('https://eveprest.ru/submit/norma-studio.php',{
                    name:$('[name="name55"]').val(),
                    phone:$('[name="phone55"]').val(),
                    email:$('[name="email55"]').val(),
                    message:$('[name="message55"]').val(),
                    id:$('[name="id55"]').val()
                })} else {
          $('.valid').text('Не верно введен номер телефона');
        }}} else {
      $('.valid').text('Введите Ваш телефон');
    }
  });
});

var input = document.querySelector("#phone44");
    window.intlTelInput(input, {
      initialCountry: "ru",
});
$(document).ready(function() {
  $('.button44').click(function() {
    var val = $('#phone44').val();
    if(val != '') {
      if(/[^[0-9+-]/.test(val)){
        var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if(pattern.test(val)){
          $('.valid').text('');
        } else {
          $('.valid').text('Не верно введен e-mail');
        }
      } else {
        var pattern2 = /^\d[\d\(\)\ -+-]{4,14}\d$/;
        if(val.length >= 10 && val.length <= 14 && pattern2.test(val)) {
          $('.valid').text('');
          $('.modal_form44').addClass('modal_form_act');
          $('.modal_sub').addClass('modal_sub_act');
                $.post('https://eveprest.ru/submit/norma-studio.php',{
                    name:$('[name="name44"]').val(),
                    phone:$('[name="phone44"]').val(),
                    email:$('[name="email44"]').val(),
                    message:$('[name="message44"]').val(),
                    id:$('[name="id44"]').val()
                })} else {
          $('.valid').text('Не верно введен номер телефона');
        }}} else {
      $('.valid').text('Введите Ваш телефон');
    }
  });
});
