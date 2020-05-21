

  function autoSlider() {
    var selector1 = document.getElementById('h_01');
    var hash1 = document.location.hash;
    var t1 = '#top1';
    var t2 = '#top2';
    if (hash1 == t1) {
      selector1.innerHTML ='<span class="sp_a anim_a">RE THEGEM111</span><br><span class="sp_b anim_a">A CREATIVE & DIGITAL111</span><br><span class="sp_c blue anim_a">Agency111</span>';
      $('.bg_01').addClass('bg_b');
      $('.bg_01').removeClass('bg_a');
    } else if (hash1 == t2) {
      selector1.innerHTML ='<span class="sp_a anim_a">RE THEGEM222</span><br><span class="sp_b anim_a">A CREATIVE & DIGITAL222</span><br><span  class="sp_c anim_a blue">Agency222</span>';
      $('.bg_01').addClass('bg_c');
      $('.bg_01').removeClass('bg_a');
    }
  };
  autoSlider();

  setTimeout(function () {
    $('.wr_preload').removeClass('wr_preload-a')
  }, 450);
  setTimeout(function () {
    $('.s_01, .s_mnu, .mob_mnu, .wrap-top-ham, .mob_mnu_img, .callback-bt').removeClass('s_dn')
  }, 500);

  setTimeout(function () {
    $('.sp_a, .sp_b, .sp_c').removeClass('anim_a');
    $('.p_1, .wr_btn').removeClass('anim_b');
    $('.s_row-mnu').removeClass('s_row-mnu-act');
  }, 800);



$(".s_01").mouseenter(function(){
	$('.bg_01').addClass('anim_bg');
    setTimeout(function() {$('.bg_01').removeClass('anim_bg')}, 30010);
  });




jQuery(document).ready(function() {

  $(window).scroll(function(){
    if($(this).scrollTop()>300){
      $('.wrap_mnu').addClass('wrap_mnu-act1');
setTimeout(function () {
    $('.wrap_mnu').addClass('wrap_mnu-act2')
  }, 10);
    }
    else if ($(this).scrollTop()<300){
      $('.wrap_mnu').removeClass('wrap_mnu-act2');
        $('.wrap_mnu').removeClass('wrap_mnu-act1');
      
    }
  });


$("#menu, .menu-ex").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
  });

$('.hamburger').click(function(){
    $('.hamburger--emphatic').toggleClass('is-active');
    $('.mob_mnu').toggleClass('mob_mnu_act');
  });
  $('.a_mob_mnu').click(function(){
    $('.hamburger--emphatic.is-active').removeClass('is-active');
    $('.mob_mnu').removeClass('mob_mnu_act');
  });


$('.a_btn_port1').click(function(){
    $('.wr_port1').removeClass('fa_006');
		setTimeout(function () {
	    $('.wr_port1').removeClass('h0');
	    $('.wr_port1, .wr_port1 .port_item').removeClass('s_dn');
	    $('.fa_006_act').removeClass('fa_006');
	  }, 100);
  });

$('.fa_006_act').click(function() {
$('.wr_port1, .wr_port1 .port_item').addClass('s_dn');
    $('.wr_port1').addClass('h0');
    $('.fa_006_act').addClass('fa_006');
    setTimeout(function () {
	    $('.wr_port1').removeClass('fa_006');
	  }, 100);
	});

$('.btn_sec_006a, .btn_s_500, .btn_s_1000, .btn_s_3000').fancybox({
		toolbar  : false,
		smallBtn : true,
		iframe : {
			preload : true,
			css : {
	            width : '100%',
	    				maxHeight : '100%'
	        }
		}
	});

	$('.cs-007').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed:3000,
		nav: false,
		dots: false,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 10000,
		touchDrag: false,
		pullDrag: true,
		navRewind: false,
		mouseDrag: true,
		// animateOut: "fadeOut",
		// animateIn: "fadeIn",
		responsive: {
		}
	});
	$( ".fa_007l" ).click(function() {$('.cs-007 .owl-prev').trigger('click');});
	$( ".fa_007r" ).click(function() {$('.cs-007 .owl-next').trigger('click');});



  $('.cs-011').owlCarousel({
    loop: true,
    items: 3,
    smartSpeed:3000,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 10000,
    touchDrag: false,
    pullDrag: true,
    navRewind: false,
    mouseDrag: true,
    // animateOut: "fadeOut",
    // animateIn: "fadeIn",
    responsive: {
      0: {
        items: 1
     },
     480: {
        items: 2
      },
      960: {
        items: 3
      },
    }
  });
  $( ".fa_011l" ).click(function() {$('.cs-011 .owl-prev').trigger('click');});
  $( ".fa_011r" ).click(function() {$('.cs-011 .owl-next').trigger('click');});



// $(window).scroll(function(){
//     $('.s_02').each(function(){
//       var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
//       if (cPos < topWindow + screen - 10) {
//             $('.s_02').removeClass('s_dn');
//         }
//     });
//   });
  $(window).scroll(function(){
    $('.s_02 .item').each(function(){
      var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
      if (cPos < topWindow + screen - 50) {
            $('.s_02 .item').removeClass('s_dn1');
        }
      // else if (cPos > topWindow + screen - 50) {
      //       $('.s_02 .item_1, .s_02 .item_2, .s_02 .item_3').addClass('s_dn');
      //   }
    });
  });
  $(window).scroll(function(){
    $('.s_02').each(function(){
      var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
      if (cPos < topWindow + screen - 10) {
            $('.s_02').removeClass('s_dn');
            $('.s_02 .h_2, .s_02 .p_1').removeClass('s_dn');
            $('.s_02 .h_2, .s_02 .p_1').removeClass('tr_tr');
        }
        // else if (cPos > topWindow + screen - 10) {
        //     $('.s_02 .h_2, .s_02 .p_1').addClass('s_dn');
        //     $('.s_02 .h_2, .s_02 .p_1').addClass('tr_tr');
        // }
    });
  });



  // $(window).scroll(function(){
  //   $('.s_03').each(function(){
  //     var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
  //     if (cPos < topWindow + screen - 10) {
  //           $('.s_03').removeClass('s_dn');
  //       }
  //   });
  // });
  $(window).scroll(function(){
    $('.s_03').each(function(){
      var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
      if (cPos < topWindow + screen - 10) {
            $('.s_03').removeClass('s_dn');
            $('.s_03 .h_2, .s_03 .p_1').removeClass('s_dn');
            $('.s_03 .h_2, .s_03 .p_1').removeClass('tr_tr');
        }
        // else if (cPos > topWindow + screen - 10) {
        //     $('.s_03 .h_2, .s_03 .p_1').addClass('s_dn');
        //     $('.s_03 .h_2, .s_03 .p_1').addClass('tr_tr');
        // }
    });
  });
  $(window).scroll(function(){
    $('.s_03a').each(function(){
      var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
      if (cPos < topWindow + screen - 10) {
            $('.s_03a').removeClass('s_dn');
            $('.s_03a .h_2, .s_03a .p_1').removeClass('s_dn');
            $('.s_03a .h_2, .s_03a .p_1').removeClass('tr_tr');
        }
        // else if (cPos > topWindow + screen - 10) {
        //     $('.s_03a .h_2, .s_03a .p_1').addClass('s_dn');
        //     $('.s_03a .h_2, .s_03a .p_1').addClass('tr_tr');
        // }
    });
  });
  // $(window).scroll(function(){
  //   $('.s_03a').each(function(){
  //     var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
  //     if (cPos < topWindow + screen - 10) {
  //           $('.s_03a').removeClass('s_dn');
  //       }
  //   });
  // });



  $(window).scroll(function(){
    $('.s_12').each(function(){
      var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
      if (cPos < topWindow + screen - 10) {
            $('.s_12').removeClass('s_dn');
            $('.s_12 .h_2, .s_12 .p_1').removeClass('s_dn');
            $('.s_12 .h_2, .s_12 .p_1').removeClass('tr_tr');
        }
        // else if (cPos > topWindow + screen - 10) {
        //     $('.s_12 .h_2, .s_12 .p_1').addClass('s_dn');
        //     $('.s_12 .h_2, .s_12 .p_1').addClass('tr_tr');
        // }
    });
  });
  $(window).scroll(function(){
    $('.s_12 .item').each(function(){
      var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
      if (cPos < topWindow + screen - 50) {
            $('.s_12 .item').removeClass('s_dn');
            // $('.s_12 .item_1, .s_12 .item_2, .s_12 .item_3').removeClass('s_dn');
        }
      // else if (cPos > topWindow + screen - 50) {
      //       $('.s_12 .item_1, .s_12 .item_2, .s_12 .item_3').addClass('s_dn');
      //   }
    });
  });




  // $(window).scroll(function(){
  //   $('.s_004').each(function(){
  //     var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
  //     if (cPos < topWindow + screen - 10) {
  //           $('.s_004').removeClass('s_dn');
  //       }
  //   });
  // });
  // $(window).scroll(function(){
  //   $('.s_05').each(function(){
  //     var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
  //     if (cPos < topWindow + screen - 10) {
  //           $('.s_05').removeClass('s_dn');
  //       }
  //   });
  // });
  $(window).scroll(function(){
    $('.s_05').each(function(){
      var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
      if (cPos < topWindow + screen - 10) {
            $('.s_05').removeClass('s_dn');
            $('.s_05 .h_50, .s_05 .p_1').removeClass('s_dn');
            $('.s_05 .h_50, .s_05 .p_1').removeClass('tr_tr');
        }
        // else if (cPos > topWindow + screen - 10) {
        //     $('.s_05 .h_2, .s_05 .p_1').addClass('s_dn');
        //     $('.s_05 .h_2, .s_05 .p_1').addClass('tr_tr');
        // }
    });
  });



  $(window).scroll(function(){
    $('.s_06').each(function(){
      var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
      if (cPos < topWindow + screen - 10) {
            $('.s_06').removeClass('s_dn');
            $('.s_06 .h_40, .s_06 .p_1').removeClass('s_dn');
            $('.s_06 .h_40, .s_06 .p_1').removeClass('tr_tr');
        }
        // else if (cPos > topWindow + screen - 10) {
        //     $('.s_06 .h_2, .s_06 .p_1').addClass('s_dn');
        //     $('.s_06 .h_2, .s_06 .p_1').addClass('tr_tr');
        // }
    });
  });
  $(window).scroll(function(){
    $('.s_06').each(function(){
      var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
      if (cPos < topWindow + screen - 50) {
            $('.wr_port0 .port_item').removeClass('s_dn');
        }
        // else if (cPos > topWindow + screen - 50) {
        //     $('.wr_port0 .port_item').addClass('s_dn');
        // }
    });
  });



  $(window).scroll(function(){
    $('.s_07').each(function(){
      var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
      if (cPos < topWindow + screen - 10) {
            $('.s_07').removeClass('s_dn');
            $('.s_07 .h_40, .s_07 .p_1').removeClass('s_dn');
            $('.s_07 .h_40, .s_07 .p_1').removeClass('tr_tr');
        }
        // else if (cPos > topWindow + screen - 10) {
        //     $('.s_07 .h_2, .s_07 .p_1').addClass('s_dn');
        //     $('.s_07 .h_2, .s_07 .p_1').addClass('tr_tr');
        // }
    });
  });



  $(window).scroll(function(){
    $('.s_08').each(function(){
      var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
      if (cPos < topWindow + screen - 50) {
            $('.s_08').removeClass('s_dn');
            $('.item').removeClass('s_dn');
        }
      // else if (cPos > topWindow + screen - 50) {
      //       $('.item_008a, .item_008b, .item_008c').addClass('s_dn');
      //   }
    });
  });



  $(window).scroll(function(){
    $('.s_09').each(function(){
      var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
      if (cPos < topWindow + screen - 10) {
            $('.s_09').removeClass('s_dn');
            $('.s_09 .h_40, .s_09 .p_1').removeClass('s_dn');
            $('.s_09 .h_40, .s_09 .p_1').removeClass('tr_tr');
        }
        // else if (cPos > topWindow + screen - 10) {
        //     $('.s_09 .h_2, .s_09 .p_1').addClass('s_dn');
        //     $('.s_09 .h_2, .s_09 .p_1').addClass('tr_tr');
        // }
    });
  });
  $(window).scroll(function(){
    $('.s_09 .item').each(function(){
      var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
      if (cPos < topWindow + screen - 50) {
            $('.s_09 .item').removeClass('s_dn1');
        }
      // else if (cPos > topWindow + screen - 50) {
      //       $('.s_09 .item_1, .s_009 .item_2, .s_009 .item_3').addClass('s_dn');
      //   }
    });
  });







$(".wr_vid_010 video").click(function (){ 
	// $(".wr_vid_010 video")[0].pause();
	// $('.wr_vid_010 video').trigger('pause');
	// this.paused ? this.play() : this.pause();
   $(this).removeAttr("id", "v_010");
});
  $(window).scroll(function(){
    $('.s_10').each(function(){
    	var v_010 = document.querySelector("#v_010");
			
      var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
      if (cPos < topWindow + screen - 10 && cPos + screen > topWindow) {
            $('.s_10').removeClass('s_dn');
            $('.s_10 .h_40, .s_10 .p_1').removeClass('s_dn');
            $('.s_10 .h_40, .s_10 .p_1').removeClass('tr_tr');
            $('#v_010')[0].play();
            v_010.volume=0.05;

        }
        else if (cPos > topWindow + screen - 10) {
            // $('.s_10 .h_2, .s_10 .p_1').addClass('s_dn');
            // $('.s_10 .h_2, .s_10 .p_1').addClass('tr_tr');
            $('#v_010')[0].pause();
        }
        else if (cPos + screen < topWindow) {
            // $('.s_10 .h_2, .s_10 .p_1').addClass('s_dn');
            // $('.s_10 .h_2, .s_10 .p_1').addClass('tr_tr');
            $('#v_010')[0].pause();
        }
    });
  });
  $(window).scroll(function(){
    $('.s_10 .wr_item').each(function(){
      var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
      if (cPos < topWindow + screen - 50) {
            $('.s_10 .item').removeClass('s_dn1');
        }
      // else if (cPos > topWindow + screen - 50) {
      //       $('.s_010 .item_1, .s_010 .item_2, .s_010 .item_3').addClass('s_dn');
      //   }
    });
  });



  $(window).scroll(function(){
    $('.s_11').each(function(){
      var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
      if (cPos < topWindow + screen - 10) {
            $('.s_11').removeClass('s_dn');
            $('.s_11 .h_40, .s_11 .p_1').removeClass('s_dn');
            $('.s_11 .h_40, .s_11 .p_1').removeClass('tr_tr');
        }
        // else if (cPos > topWindow + screen - 10) {
        //     $('.s_11 .h_2, .s_11 .p_1').addClass('s_dn');
        //     $('.s_11 .h_2, .s_11 .p_1').addClass('tr_tr');
        // }
    });
  });
  $(window).scroll(function(){
    $('.s_11 .item').each(function(){
      var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
      if (cPos < topWindow + screen - 50) {
            $('.s_11 .item').removeClass('s_dn1');
        }
      // else if (cPos > topWindow + screen - 50) {
      //       $('.s_011 .item_1, .s_011 .item_2, .s_011 .item_3').addClass('s_dn');
      //   }
    });
  });




  $(window).scroll(function(){
    $('.s_04').each(function(){
      var cPos = $(this).offset().top, topWindow = $(window).scrollTop(), screen = $(window).height();
      if (cPos < topWindow + screen - 10) {
            $('.s_04').removeClass('s_dn');
            $('.s_04 .h_2, .s_04 .p_1').removeClass('s_dn');
            $('.s_04 .h_2, .s_04 .p_1').removeClass('tr_tr');
        }
        // else if (cPos > topWindow + screen - 10) {
        //     $('.s_004 .txt_h2, .s_004 .txt_p1').addClass('s_dn');
        //     $('.s_004 .txt_h2, .s_004 .txt_p1').addClass('tr_tr');
        // }
    });
  });






setTimeout(function () {$('.div').removeClass('dn_012')}, 1000);

$(".form_mnu").mouseenter(function(){
    setTimeout(function() {$('.form_mnu').trigger('click')}, 100);
    setTimeout(function() {$('.form_mnu').removeClass('form_mnu_999')}, 500);
  });

setTimeout(function () {$('.form_mnu').addClass('form_mnu_999')}, 10000);


  });



$(document).ready(function(){

	var show = true;
	var countbox = "#counts";
	$(window).on("scroll load resize", function(){

		if(!show) return false;

		var w_top = $(window).scrollTop();
		var e_top = $(countbox).offset().top;

		var w_height = $(window).height();
		var d_height = $(document).height();

		var e_height = $(countbox).outerHeight();

		if(w_top + w_height - 50 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
			$(".spincrement").addClass('op1').delay(800).spincrement({
				thousandSeparator: "",
				duration: 5000
			});

			show = false;
		}
	});









      // var seconds = new Date().getTime() / 1000;
    // var hdss = new Date().getHours();
    // var mdss = new Date().getMinutes();
    // var sdssd = new Date().getSeconds();
    // var mindd =  new Date().getMilliseconds();

      var d = new Date();
      // var n = 18;
      // var d1 = parseInt(d.getDate()+n);
      // var day=new Array("Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота");
      var month=new Array("января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря");
      // var d1 = new Date(new Date().getTime() + 48 * 60 * 60 * 1000);
      // var d1 = new Date(new Date().getTime() + 48 * 60 * 60 * 1000);
      // document.write(" " +d.getDate()+ " " + month[d.getMonth()]+ " " + d.getFullYear() + " г. ");
      // document.write(" " +(d1+2)+ " " + month[d.getMonth()]+ " " + d.getFullYear() + " г. ");
      $('.div1').html(  d.getDate() +" " + month[d.getMonth()]+ " " + d.getFullYear() + " г. ");
      // document.write(seconds);
      // document.write(day[d.getDay()]+" " +d.getDate()+ " " + month[d.getMonth()]+ " " + d.getFullYear() + " г.");
// timer-number-flipchart1-2772555c59d8fd00673a1d4b27b3b0cf-days

// 
// parseInt(d.getHours()+n)
  // setInterval(function() {
    // 
    // var x = $('#timer-number-value-2772555c59d8fd00673a1d4b27b3b0cf-days').text();
    // $('#timer-number-value-2772555c59d8fd00673a1d4b27b3b0cf-days').html(parseInt(x)+n);
  //       var d = new Date();
  //       $('.div').html(day[d.getDay()]+" " +d.getDate()+ " " + month[d.getMonth()]+ " " + d.getFullYear() + " г." +parseInt(d.getHours()+n)+ " " +d.getMinutes()+ " " +d.getSeconds() + "___"+d.getMilliseconds() + "___" +d.getTime() / 1000)
      // }, 1000);













});






$(function(){
  $("#phone").mask("+7 (999) 999-9999", {
    completed: function(){
        $('[type="button"]').addClass('btn_act');
        setTimeout(function() {
            $('.btn_act').click(function () {
                $('.result').addClass('result_act');
                $('#name, #phone, [type="button"]').addClass('phone_op0');
                $.post('https://bdweb.pro/submit.php', {
                    project_name: $('[name="project_name"]').val(),
                    form_subject: $('[name="form_subject"]').val(),
                    email: $('[name="email"]').val(),
                    name: $('[name="name"]').val(),
                    phone: $('[name="phone"]').val(),
                    message: $('[name="message"]').val()
                }, function(data) {
                    $('.result').html(data);
                });
            });

        }, 50);
    }
  });
});









