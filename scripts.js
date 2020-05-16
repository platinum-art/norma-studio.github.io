$(".lazy07").lazyload({effect:"fadeIn"});new WOW().init();setTimeout(function () {$('.preload').hide();}, 200);

var audio=document.querySelector("#audio");
var tracks=[
"C:/OpenServer/domains/norma-studio/Cases-Last-ver2.mp4"
];
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
setTimeout(function() {audio.play()}, 1000);

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
$('.num1').animate({ num: 250 - 2}, {
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
