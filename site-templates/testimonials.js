var _href2 = window.location.hash.slice(1);
var btn1 = {
"003" : [{"id":"003"}],
"004" : [{"id":"004"}],
"005" : [{"id":"005"}],
"006" : [{"id":"006"}],
"007" : [{"id":"007"}],
"008" : [{"id":"008"}],
"009" : [{"id":"009"}],
};
var articles101 = {
// "202101":[{"id":"202101", "btn":"002", "name":"BeTheme Classic", "theme":"l1 l2 l3 l4 l5 l6 l7 l8 l9", "url":"http://be.beantownthemes.com/html/index.html"}],
};



setTimeout(function () {
// $.each(articles101,function(key,data) {$.each(data, function(index,value) {
// $('.wr_templetes').append(`<a id="id${value['id']}" href="demo/betheme.html#${value['id']}" target="_blank" class="templetes templetes${value['btn']} ${value['theme']}" title="Посмотреть дизайн сайта ${value['name']}">
// <img class="lazy77" src="betheme/${value['id']}-min.webp" data-src="betheme/${value['id']}.webp" width="50" height="50" alt="Разработка сайтов от Norma Studio" title="Посмотреть дизайн сайта ${value['name']}">
// <span class="span1 btn_id22" title="Посмотреть дизайн сайта ID #${value['id']}">ID #${value['id']}</span>
// <span class="span2" title="Посмотреть дизайн сайта ${value['name']}">${value['name']}</span>
// <span class="span3 btn_svg22" data-remodal-target="modal5" value=" ID #${value['id']}" title="Заказать дизайн сайта ID #${value['id']}">
// <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300.005 300.005" style="enable-background:new 0 0 300.005 300.005;" xml:space="preserve"><g><g><g><circle cx="97.035" cy="229.666" r="6.406"/><circle cx="202.179" cy="229.666" r="6.406"/><path d="M150,0C67.159,0,0.002,67.162,0.002,150S67.159,300.005,150,300.005S300.003,232.841,300.003,150S232.841,0,150,0z M202.179,251.634c-12.112,0-21.965-9.856-21.965-21.971c0-2.225,0.34-4.378,0.957-6.404h-63.126 c0.62,2.026,0.957,4.176,0.957,6.404c0,12.115-9.853,21.971-21.968,21.971s-21.968-9.856-21.968-21.971 c0-10.821,7.872-19.815,18.187-21.615L68.862,85.201l-18.819,0.124L49.94,69.763l31.64-0.21l7.656,37.883l94.413,11.319 c-0.052,0.796-0.122,1.585-0.122,2.394c0,21.413,16.763,38.941,37.851,40.261l-8.318,31.692H106.354l2.651,14.594h93.171 c12.112,0,21.971,9.853,21.971,21.965C224.147,241.778,214.291,251.634,202.179,251.634z M223.921,151.167 c-16.555,0-30.019-13.466-30.019-30.016s13.464-30.016,30.019-30.016c16.55,0,30.013,13.466,30.013,30.016 S240.468,151.167,223.921,151.167z"/><polygon points="231.702,103.906 216.14,103.906 216.14,113.803 206.24,113.803 206.24,129.365 216.14,129.365 216.14,139.257 231.702,139.257 231.702,129.365 241.594,129.365 241.594,113.803 231.702,113.803 			"/></g></g></g></svg>
// </span>
// </a>`
// );});});
$('.templetes').hide();$('.templetes002').show();
$(".lazy77").lazyload({effect:"fadeIn"});$('.preload').hide();
$(".btn_svg22").click(function(){var eee22 = $(this).attr("value");$(".form55 input[name=id55]").attr("value", eee22);});
}, 500);
// ===
$.each(btn1,function(key,data) {$.each(data, function(index,value) {
$('.wr_btn1').append(`<a class="btn btn_dn btn${value['id']}" title="Разработка сайтов от Norma Studio">Показать еще</a>`
);});});


$('.btn002').click(function(){$('.btn002').remove();$('.btn003').removeClass('btn_dn');$('.templetes003').show();});
$('.btn003').click(function(){$('.btn003').remove();$('.btn004').removeClass('btn_dn');$('.templetes004').show();});
$('.btn004').click(function(){$('.btn004').remove();$('.btn005').removeClass('btn_dn');$('.templetes005').show();});
$('.btn005').click(function(){$('.btn005').remove();$('.templetes006').show();});

var mnu77a = {
"000" : [{"id":"0", "href":"p100", "name":"Все"}],
"001" : [{"id":"1", "href":"p101", "name":"Универсальные"}],
"002" : [{"id":"2", "href":"p102", "name":"Бизнес и услуги"}],
"003" : [{"id":"3", "href":"p103", "name":"Товарные лендинги"}],
"004" : [{"id":"4", "href":"p104", "name":"Лендинги услуги"}],
"005" : [{"id":"5", "href":"p105", "name":"Лендинг"}],
"006" : [{"id":"6", "href":"p106", "name":"Визитка"}],
"007" : [{"id":"7", "href":"p107", "name":"Корпоративный"}],
"008" : [{"id":"8", "href":"p108", "name":"Одностраничник"}],
"009" : [{"id":"9", "href":"p109", "name":"Каталог"}],
};
var mnu77b = {
// "010" : [{"id1":"10", "href":"p110", "name1":"2 Все"}],
"011" : [{"id1":"11", "href":"p111", "name1":"2 Универсальные"}],
"012" : [{"id1":"12", "href":"p112", "name1":"2 Бизнес и услуги"}],
"013" : [{"id1":"13", "href":"p113", "name1":"2 Товарные лендинги"}],
"014" : [{"id1":"14", "href":"p114", "name1":"2 Лендинги услуги"}],
"015" : [{"id1":"15", "href":"p115", "name1":"2 Лендинг"}],
"016" : [{"id1":"16", "href":"p116", "name1":"2 Визитка"}],
"017" : [{"id1":"17", "href":"p117", "name1":"2 Корпоративный"}],
"018" : [{"id1":"18", "href":"p118", "name1":"2 Одностраничник"}],
"019" : [{"id1":"19", "href":"p119", "name1":"2 Каталог"}],
};

$('.wr_mnu77mob').append('<ul class="wr_qb_mob"><li><a class="qb qb77b qb77b_mob">Выберите категорию</a><ul class="wr_qb2 wr_qb2mob"></ul></li></ul>');
$.each(mnu77a,function(key,data) {$.each(data, function(index,value) {
$('.wr_mnu77').append(`<a href="#${value['href']}" class="q_rem q q${value['id']}">${value['name']}</a>`);
$('.wr_qb2mob').append(`<li><a href="#${value['href']}" class="q_rem q_rem_mob qb qb77c q${value['id']}">${value['name']}</a></li>`);
});});
$('.wr_mnu77').append('<ul class="wr_qb"><li><a class="qb qb77b qb77b_des">еще</a><ul class="wr_qb2 wr_qb2des"></ul></li></ul>');
$.each(mnu77b,function(key,data) {$.each(data, function(index,value) {
$('.wr_qb2des').append(`<li><a href="#${value['href']}" class="q_rem qb qb77c q${value['id1']}">${value['name1']}</a></li>`);
$('.wr_qb2mob').append(`<li><a href="#${value['href']}" class="q_rem q_rem_mob qb qb77c q${value['id1']}">${value['name1']}</a></li>`);
});});
$('.qb77b_des').click(function(){$('.wr_qb2').toggleClass('wr_qb2_act');});
$('.q_rem').click(function(){$('.wr_qb2').removeClass('wr_qb2_act');});

$('.qb77b_mob').click(function(){$('.wr_qb2mob').toggleClass('wr_qb2_act');});
// $('.q_rem_mob').click(function(){$('.wr_qb2mob').removeClass('wr_qb2_act');});

$('.q0').click(function(){$('.templetes').hide();$('.templetes002').show();$('.wr_btn1').show();$('.q_rem').removeClass('l_act');$('.q0').addClass('l_act');});
$('.q1').click(function(){$('.templetes').hide();$('.l1').show();$('.wr_btn1').hide();$('.q_rem').removeClass('l_act');$('.q1').addClass('l_act');});
$('.q2').click(function(){$('.templetes').hide();$('.l2').show();$('.wr_btn1').hide();$('.q_rem').removeClass('l_act');$('.q2').addClass('l_act');});
$('.q3').click(function(){$('.templetes').hide();$('.l3').show();$('.wr_btn1').hide();$('.q_rem').removeClass('l_act');$('.q3').addClass('l_act');});
$('.q4').click(function(){$('.templetes').hide();$('.l4').show();$('.wr_btn1').hide();$('.q_rem').removeClass('l_act');$('.q4').addClass('l_act');});
$('.q5').click(function(){$('.templetes').hide();$('.l5').show();$('.wr_btn1').hide();$('.q_rem').removeClass('l_act');$('.q5').addClass('l_act');});
$('.q6').click(function(){$('.templetes').hide();$('.l6').show();$('.wr_btn1').hide();$('.q_rem').removeClass('l_act');$('.q6').addClass('l_act');});
$('.q7').click(function(){$('.templetes').hide();$('.l7').show();$('.wr_btn1').hide();$('.q_rem').removeClass('l_act');$('.q7').addClass('l_act');});
$('.q8').click(function(){$('.templetes').hide();$('.l8').show();$('.wr_btn1').hide();$('.q_rem').removeClass('l_act');$('.q8').addClass('l_act');});
$('.q9').click(function(){$('.templetes').hide();$('.l9').show();$('.wr_btn1').hide();$('.q_rem').removeClass('l_act');$('.q9').addClass('l_act');});
$('.q10').click(function(){$('.templetes').hide();$('.l10').show();$('.wr_btn1').hide();$('.q_rem').removeClass('l_act');$('.q10').addClass('l_act');});
$('.q11').click(function(){$('.templetes').hide();$('.l11').show();$('.wr_btn1').hide();$('.q_rem').removeClass('l_act');$('.q11').addClass('l_act');});
$('.q12').click(function(){$('.templetes').hide();$('.l12').show();$('.wr_btn1').hide();$('.q_rem').removeClass('l_act');$('.q12').addClass('l_act');});
$('.q13').click(function(){$('.templetes').hide();$('.l13').show();$('.wr_btn1').hide();$('.q_rem').removeClass('l_act');$('.q13').addClass('l_act');});
$('.q14').click(function(){$('.templetes').hide();$('.l14').show();$('.wr_btn1').hide();$('.q_rem').removeClass('l_act');$('.q14').addClass('l_act');});
$('.q15').click(function(){$('.templetes').hide();$('.l15').show();$('.wr_btn1').hide();$('.q_rem').removeClass('l_act');$('.q15').addClass('l_act');});
$('.q16').click(function(){$('.templetes').hide();$('.l16').show();$('.wr_btn1').hide();$('.q_rem').removeClass('l_act');$('.q16').addClass('l_act');});
$('.q17').click(function(){$('.templetes').hide();$('.l17').show();$('.wr_btn1').hide();$('.q_rem').removeClass('l_act');$('.q17').addClass('l_act');});
$('.q18').click(function(){$('.templetes').hide();$('.l18').show();$('.wr_btn1').hide();$('.q_rem').removeClass('l_act');$('.q18').addClass('l_act');});
$('.q19').click(function(){$('.templetes').hide();$('.l19').show();$('.wr_btn1').hide();$('.q_rem').removeClass('l_act');$('.q19').addClass('l_act');});
$('.q20').click(function(){$('.templetes').hide();$('.l20').show();$('.wr_btn1').hide();$('.q_rem').removeClass('l_act');$('.q20').addClass('l_act');});

$(".q-ex").on("click","a", function (event) {event.preventDefault();var id  = $(this).attr('href'),top = $(id).offset().top;$('body,html').animate({scrollTop: top}, 300);});


if(_href2 == 'p100' ){$('.templetes').hide();$('.templetes002').show();$('.wr_btn1').show();$('.q0').addClass('l_act');}
// else if(_href2 == '' ){$('.templetes').hide();$('.templetes002').show();$('.wr_btn1').show();$('.q0').addClass('l_act');}
else if(_href2 == 'p101'){$('.templetes').hide();$('.l1').show();$('.wr_btn1').hide();$('.q1').addClass('l_act');}
else if(_href2 == 'p102'){$('.templetes').hide();$('.l2').show();$('.wr_btn1').hide();$('.q2').addClass('l_act');}
else if(_href2 == 'p103'){$('.templetes').hide();$('.l3').show();$('.wr_btn1').hide();$('.q3').addClass('l_act');}
else if(_href2 == 'p104'){$('.templetes').hide();$('.l4').show();$('.wr_btn1').hide();$('.q4').addClass('l_act');}
else if(_href2 == 'p105'){$('.templetes').hide();$('.l5').show();$('.wr_btn1').hide();$('.q5').addClass('l_act');}
else if(_href2 == 'p106'){$('.templetes').hide();$('.l6').show();$('.wr_btn1').hide();$('.q6').addClass('l_act');}
else if(_href2 == 'p107'){$('.templetes').hide();$('.l7').show();$('.wr_btn1').hide();$('.q7').addClass('l_act');}
else if(_href2 == 'p108'){$('.templetes').hide();$('.l8').show();$('.wr_btn1').hide();$('.q8').addClass('l_act');}
else if(_href2 == 'p109'){$('.templetes').hide();$('.l9').show();$('.wr_btn1').hide();$('.q9').addClass('l_act');}

var cur323 = window.location.href;
var array = cur323.split('/'), elem323 = array[6];
var w1='no',w2='rma',e3='-s',f64='tu',t34='dio';
var d65='.g',r876='ith',s87='ub.',d27='ru';
var _b651=w1+w2+e3+f64+t34, _b652=d65+r876+s87+d27;
// if(_b651+_b652==elem323+_b652){$('body').remove();}
console.log('window.location.href = '+cur323);
console.log('var array = '+cur323.split('/'));
console.log('var elem323 = '+elem323);
console.log('_b651+_b652 = '+_b651+_b652);
console.log('elem323+_b652 = '+elem323+_b652);

$('.s_02mnu').remove();
$('.wr_btn1').remove();
$('.txt3_rem1').remove();
$('.txt3_rem2').remove();
$('.txt1_append>b').append('BeTheme');
$('.s_18').remove();
$('.s_02temp').remove();


$(document).ready(function() {
  $('.button6').click(function() {
    var val = $('#phone6').val();
    if(val != '') {
      if(val == ''){
        // var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        // if(pattern.test(val)){
        //   $('.valid').text('');
        // } else {
          $('.valid').text('Введите Ваш комментарий');
        // }
      } else {
        // var pattern2 = /^\d[\d\(\)\ -+-]{4,14}\d$/;
        if(val.length >= 5 && val.length <= 300 ) {

          $('.valid').text('');
          // $('.modal_form44').addClass('modal_form_act');
          // $('.modal_sub').addClass('modal_sub_act');

                $.post('https://eveprest.ru/submit/submit.php',{
                    name:$('[name="name6"]').val(),
                    phone:$('[name="phone6"]').val(),
                    id:$('[name="id6"]').val(),
                    email:$('[name="email6"]').val()
                });
var coments_text = $(".coments_textarea").val();if (coments_text != ""){$(".wr_coments_textarea").html('<div style="text-align: center;border:none;" class="coments_textarea fontf">Ваш комментарий отправлен на модерацию</div>');$(".head_count").html('9 874 комментария');}

        } else {
          $('.valid').text('Введите Ваш комментарий');
        }
      }
    } else {
      $('.valid').text('Введите Ваш комментарий');
    }
  });
});
var d = new Date();var month=new Array("янв","фев","мар","апр","мая","июн","июл","авг","сен","окт","ноя","дек");d.setDate(d.getDate()-1);$('.div1').html(d.getDate() +" " + month[d.getMonth()]+ " ");

