// var _href0 = window.location.search;
// var _href1 = window.location.href;
var _href2 = window.location.hash.slice(1);

// var _href3 = window.location.hostname;
// alert(_href0);
// alert(_href1);
// alert(_href2);
// alert(_href3);
var arr = new Map([
  ['101000', 'C:/OpenServer/domains/norma-studio/portfolio/inskill/demo/index.html'],
  ['101001', 'https://preview.oklerthemes.com/porto/8.0.0/index-one-page.html'],
  ['101002', 'https://preview.oklerthemes.com/porto/8.0.0/index-corporate.html'],
  ['101003', 'https://preview.oklerthemes.com/porto/8.0.0/index-corporate-2.html'],
  ['101004', 'https://preview.oklerthemes.com/porto/8.0.0/index-corporate-7.html'],
  ['101005', 'https://preview.oklerthemes.com/porto/8.0.0/index-corporate-15.html'],
  ['101006', 'https://preview.oklerthemes.com/porto/8.0.0/index-corporate-16.html'],
  ['101007', 'https://preview.oklerthemes.com/porto/8.0.0/demo-business-consulting.html'],
  ['101008', 'https://preview.oklerthemes.com/porto/8.0.0/demo-business-consulting-2.html'],
  ['101009', 'https://preview.oklerthemes.com/porto/8.0.0/demo-medical-2.html'],
  ['101010', 'https://preview.oklerthemes.com/porto/8.0.0/demo-band.html'],
  ['101011', 'https://preview.oklerthemes.com/porto/8.0.0/index.html#demos'],
  ['101012', 'http://themesindustry.com/html/trax-2020/single-index.html'],
  ['101013', 'https://preview.oklerthemes.com/porto/8.0.0/demo-one-page-agency.html'],
  ['101014', 'https://preview.oklerthemes.com/porto/8.0.0/index-corporate-7.html'],
  ['101015', 'https://yandex.ru/'],

]);

var portfolio7 = new Map([
  ['991000', 'C:/OpenServer/domains/norma-studio/portfolio/inskill/demo/index.html'],
  ['991001', 'https://preview.oklerthemes.com/porto/8.0.0/index-one-page.html'],
  ['991002', 'https://preview.oklerthemes.com/porto/8.0.0/index-corporate.html'],
  ['991003', 'https://preview.oklerthemes.com/porto/8.0.0/index-corporate-2.html'],
  ['991004', 'https://preview.oklerthemes.com/porto/8.0.0/index-corporate-7.html'],
  ['991005', 'https://preview.oklerthemes.com/porto/8.0.0/index-corporate-15.html'],
  ['991006', 'https://preview.oklerthemes.com/porto/8.0.0/index-corporate-16.html'],
  ['991007', 'https://preview.oklerthemes.com/porto/8.0.0/demo-business-consulting.html'],
  ['991008', 'https://preview.oklerthemes.com/porto/8.0.0/demo-business-consulting-2.html'],
  ['991009', 'https://preview.oklerthemes.com/porto/8.0.0/demo-medical-2.html'],
  ['991010', 'https://preview.oklerthemes.com/porto/8.0.0/demo-band.html'],
  ['991011', 'https://preview.oklerthemes.com/porto/8.0.0/index.html#demos'],
  ['991012', 'http://themesindustry.com/html/trax-2020/single-index.html'],
  ['991013', 'https://preview.oklerthemes.com/porto/8.0.0/demo-one-page-agency.html'],
  ['991014', 'https://preview.oklerthemes.com/porto/8.0.0/index-corporate-7.html'],
  ['991015', 'https://yandex.ru/'],

]);

if (arr.get(_href2)) {var elem = arr.get(_href2);
  console.log('Запись с ключом "'+_href2+'" получина из массива!');
  console.log(elem);
  $(".iframe").html('<iframe src="'+elem+'" frameborder="0" rel="nofollow"></iframe>');$('.demo_h1').append('<span> '+_href2+'</span>');
  var eee55 = 'ID '+_href2;$(".form55 input[name=id55]").attr("value", eee55);$(".form66 input[name=id66]").attr("value", eee55);console.log('eee55 = '+eee55);
} 
else if (portfolio7.get(_href2)) {var elem7 = portfolio7.get(_href2);
  console.log('Запись с ключом "'+_href2+'" получина из массива!');
  console.log(elem7);
  $(".iframe").html('<iframe src="'+elem7+'" frameborder="0"></iframe>');$('.demo_h1').html('Наши работы');$('title').html('Наши работы | Norma Studio');$('.btn_mnu_demo').remove();
} else {
  console.log('Запись с ключом "'+_href2+'" не найдена в массиве!');
  $(".iframe").append('Запись с ключом "'+_href2+'" не найдена в массиве!');$('.demo_h1').html('NaN');
}


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
"101001" : [{"id":"101001", "name":"101001", "btn":"002", "theme":"l3 l4 l5"}],
"101002" : [{"id":"101002", "name":"101002", "btn":"002", "theme":"l1 l2 l3"}],
"101003" : [{"id":"101003", "name":"101003", "btn":"002", "theme":"l1 l2"}],
"101004" : [{"id":"101004", "name":"101004", "btn":"002", "theme":"l1"}],
"101005" : [{"id":"101005", "name":"101005", "btn":"002", "theme":"l5"}],
"101006" : [{"id":"101006", "name":"101006", "btn":"002", "theme":"l1 l2 l4 l5"}],
"101007" : [{"id":"101007", "name":"101007", "btn":"002", "theme":"l1 l2 l3"}],
"101008" : [{"id":"101008", "name":"101008", "btn":"002", "theme":"l1 l2"}],
"101009" : [{"id":"101009", "name":"101009", "btn":"002", "theme":"l1 l5"}],
"101010" : [{"id":"101010", "name":"101010", "btn":"002", "theme":"l3 l4 l5"}],

"101011" : [{"id":"101011", "name":"101011", "btn":"002", "theme":"l5"}],
"101012" : [{"id":"101012", "name":"101012", "btn":"002", "theme":"l4 l5"}],
"101013" : [{"id":"101013", "name":"101013", "btn":"002", "theme":"l3"}],
"101014" : [{"id":"101014", "name":"101014", "btn":"002", "theme":"l3 l5"}],
"101015" : [{"id":"101015", "name":"101015", "btn":"002", "theme":"l3 l4 l5"}],

"301011" : [{"id":"101001", "name":"101001", "btn":"003", "theme":"l1 l4 l5"}],
"301012" : [{"id":"101002", "name":"101002", "btn":"003", "theme":"l1 l2 l5"}],
"301013" : [{"id":"101003", "name":"101003", "btn":"003", "theme":"l1 l2 l3"}],
"301014" : [{"id":"101004", "name":"101004", "btn":"003", "theme":"l1 l5"}],
"301015" : [{"id":"101005", "name":"101005", "btn":"003", "theme":"l3 l4 l5"}],
"301016" : [{"id":"101006", "name":"101006", "btn":"003", "theme":"l1 l2 l5"}],
"301017" : [{"id":"101007", "name":"101007", "btn":"003", "theme":"l1 l4 l5"}],
"301018" : [{"id":"101008", "name":"101008", "btn":"003", "theme":"l1 l3 l4 l5"}],
"301019" : [{"id":"101009", "name":"101009", "btn":"003", "theme":"l1 l2 l3 l5"}],
"301020" : [{"id":"101010", "name":"101010", "btn":"003", "theme":"l1 l2"}],

"301021" : [{"id":"101011", "name":"101011", "btn":"003", "theme":"l5"}],
"301022" : [{"id":"101012", "name":"101012", "btn":"003", "theme":"l4 l5"}],
"301023" : [{"id":"101013", "name":"101013", "btn":"003", "theme":"l3"}],
"301024" : [{"id":"101014", "name":"101014", "btn":"003", "theme":"l3 l5"}],
"301025" : [{"id":"101015", "name":"101015", "btn":"003", "theme":"l3 l4 l5"}],

"401021" : [{"id":"101001", "name":"101001", "btn":"004", "theme":"l1 l5"}],
"401022" : [{"id":"101002", "name":"101002", "btn":"004", "theme":"l3 l4 l5"}],
"401023" : [{"id":"101003", "name":"101003", "btn":"004", "theme":"l1 l5"}],
"401024" : [{"id":"101004", "name":"101004", "btn":"004", "theme":"l1 l4 l5"}],
"401025" : [{"id":"101005", "name":"101005", "btn":"004", "theme":"l1 l2"}],
"401026" : [{"id":"101006", "name":"101006", "btn":"004", "theme":"l3 l4 l5"}],
"401027" : [{"id":"101007", "name":"101007", "btn":"004", "theme":"l3 l4"}],
"401028" : [{"id":"101008", "name":"101008", "btn":"004", "theme":"l2 l3"}],
"401029" : [{"id":"101009", "name":"101009", "btn":"004", "theme":"l4"}],
"401030" : [{"id":"101010", "name":"101010", "btn":"004", "theme":"l2"}],

"401031" : [{"id":"101011", "name":"101011", "btn":"004", "theme":"l5"}],
"401032" : [{"id":"101012", "name":"101012", "btn":"004", "theme":"l4 l5"}],
"401033" : [{"id":"101013", "name":"101013", "btn":"004", "theme":"l3"}],
"401034" : [{"id":"101014", "name":"101014", "btn":"004", "theme":"l3 l5"}],
"401035" : [{"id":"101015", "name":"101015", "btn":"004", "theme":"l3 l4 l5"}],

"501031" : [{"id":"101001", "name":"101001", "btn":"005", "theme":"l1 l4 l5"}],
"501032" : [{"id":"101002", "name":"101002", "btn":"005", "theme":"l1 l3 l5"}],
"501033" : [{"id":"101003", "name":"101003", "btn":"005", "theme":"l3 l4 l5"}],
"501034" : [{"id":"101004", "name":"101004", "btn":"005", "theme":" l2 l3 l4 l5"}],
"501035" : [{"id":"101005", "name":"101005", "btn":"005", "theme":"l1 l2 l3 l4"}],
"501036" : [{"id":"101006", "name":"101006", "btn":"005", "theme":"l3 l9 l5"}],
"501037" : [{"id":"101007", "name":"101007", "btn":"005", "theme":"l1 l7 l3"}],
"501038" : [{"id":"101008", "name":"101008", "btn":"005", "theme":"l1 l7 l8 l9 l5"}],
"501039" : [{"id":"101009", "name":"101009", "btn":"005", "theme":"l1 l8 l9 l5"}],
"501040" : [{"id":"101010", "name":"101010", "btn":"005", "theme":"l1 l7"}],

"501041" : [{"id":"101011", "name":"101011", "btn":"005", "theme":"l5"}],
"501042" : [{"id":"101012", "name":"101012", "btn":"005", "theme":"l9 l5"}],
"501043" : [{"id":"101013", "name":"101013", "btn":"005", "theme":"l8"}],
"501044" : [{"id":"101014", "name":"101014", "btn":"005", "theme":"l8 l5"}],
"501045" : [{"id":"101015", "name":"101015", "btn":"005", "theme":"l8 l9 l5"}],

"601031" : [{"id":"101001", "name":"101001", "btn":"006", "theme":"l6 l9 l5"}],
"601032" : [{"id":"101002", "name":"101002", "btn":"006", "theme":"l6 l8 l5"}],
"601033" : [{"id":"101003", "name":"101003", "btn":"006", "theme":"l8 l9 l5"}],
"601034" : [{"id":"101004", "name":"101004", "btn":"006", "theme":"l7 l8 l9 l5"}],
"601035" : [{"id":"101005", "name":"101005", "btn":"006", "theme":"l6 l7 l8 l9"}],
"601036" : [{"id":"101006", "name":"101006", "btn":"006", "theme":"l8 l9 l5"}],
"601037" : [{"id":"101007", "name":"101007", "btn":"006", "theme":"l6 l7 l8"}],
"601038" : [{"id":"101008", "name":"101008", "btn":"006", "theme":"l6 l7 l8 l9 l5"}],
"601039" : [{"id":"101009", "name":"101009", "btn":"006", "theme":"l6 l8 l9 l5"}],
"601040" : [{"id":"101010", "name":"101010", "btn":"006", "theme":"l6 l7"}],

"601041" : [{"id":"101011", "name":"101011", "btn":"006", "theme":"l5"}],
"601042" : [{"id":"101012", "name":"101012", "btn":"006", "theme":"l9 l5"}],
"601043" : [{"id":"101013", "name":"101013", "btn":"006", "theme":"l8"}],
"601044" : [{"id":"101014", "name":"101014", "btn":"006", "theme":"l8 l5"}],
"601045" : [{"id":"101015", "name":"101015", "btn":"006", "theme":"l8 l9 l5"}],
};

$.each(articles101,function(key,data) {$.each(data, function(index,value) {
$('.wr_templetes').append(`<a href="demo/index.html#${value['id']}" target="_blank" class="templetes templetes${value['btn']} ${value['theme']}" title="Разработка сайтов от Norma Studio">
<img class="lazy07" src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=" data-src="i2/${value['id']}.webp" width="50" height="50" alt="Дизайн сайтов от Norma Studio" title="Разработка сайтов от Norma Studio">
<span>ID #${value['id']}</span></a>`
);});});
$('.templetes').hide();$('.templetes002').show();
// ===
$.each(btn1,function(key,data) {$.each(data, function(index,value) {
$('.wr_btn1').append(`<a class="btn btn_dn btn${value['id']}" title="Разработка сайтов от Norma Studio">Показать еще</a>`
);});});
$('.btn002').click(function(){$('.btn002').remove();$('.btn003').removeClass('btn_dn');$('.templetes003').show();});
$('.btn003').click(function(){$('.btn003').remove();$('.btn004').removeClass('btn_dn');$('.templetes004').show();});
$('.btn004').click(function(){$('.btn004').remove();$('.btn005').removeClass('btn_dn');$('.templetes005').show();});
$('.btn005').click(function(){$('.btn005').remove();$('.btn006').removeClass('btn_dn');$('.templetes005').show();});
$('.btn006').click(function(){$('.btn006').remove();$('.templetes006').show();});

var mnu77 = {
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
$.each(mnu77,function(key,data) {$.each(data, function(index,value) {
$('.wr_mnu77').append(`<a href="#${value['href']}" class="q q${value['id']}">${value['name']}</a>`
);});});
$('.q0').click(function(){$('.templetes').hide();$('.templetes002').show();$('.wr_btn1').show();$('.q').removeClass('l_act');$('.q0').addClass('l_act');});
$('.q1').click(function(){$('.templetes').hide();$('.l1').show();$('.wr_btn1').hide();$('.q').removeClass('l_act');$('.q1').addClass('l_act');});
$('.q2').click(function(){$('.templetes').hide();$('.l2').show();$('.wr_btn1').hide();$('.q').removeClass('l_act');$('.q2').addClass('l_act');});
$('.q3').click(function(){$('.templetes').hide();$('.l3').show();$('.wr_btn1').hide();$('.q').removeClass('l_act');$('.q3').addClass('l_act');});
$('.q4').click(function(){$('.templetes').hide();$('.l4').show();$('.wr_btn1').hide();$('.q').removeClass('l_act');$('.q4').addClass('l_act');});
$('.q5').click(function(){$('.templetes').hide();$('.l5').show();$('.wr_btn1').hide();$('.q').removeClass('l_act');$('.q5').addClass('l_act');});
$('.q6').click(function(){$('.templetes').hide();$('.l6').show();$('.wr_btn1').hide();$('.q').removeClass('l_act');$('.q6').addClass('l_act');});
$('.q7').click(function(){$('.templetes').hide();$('.l7').show();$('.wr_btn1').hide();$('.q').removeClass('l_act');$('.q7').addClass('l_act');});
$('.q8').click(function(){$('.templetes').hide();$('.l8').show();$('.wr_btn1').hide();$('.q').removeClass('l_act');$('.q8').addClass('l_act');});
$('.q9').click(function(){$('.templetes').hide();$('.l9').show();$('.wr_btn1').hide();$('.q').removeClass('l_act');$('.q9').addClass('l_act');});

if(_href2 == 'p100' ){$('.templetes').hide();$('.templetes002').show();$('.wr_btn1').show();$('.q0').addClass('l_act');}
else if(_href2 == 'p101'){$('.templetes').hide();$('.l1').show();$('.wr_btn1').hide();$('.q1').addClass('l_act');}
else if(_href2 == 'p102'){$('.templetes').hide();$('.l2').show();$('.wr_btn1').hide();$('.q2').addClass('l_act');}
else if(_href2 == 'p103'){$('.templetes').hide();$('.l3').show();$('.wr_btn1').hide();$('.q3').addClass('l_act');}
else if(_href2 == 'p104'){$('.templetes').hide();$('.l4').show();$('.wr_btn1').hide();$('.q4').addClass('l_act');}
else if(_href2 == 'p105'){$('.templetes').hide();$('.l5').show();$('.wr_btn1').hide();$('.q5').addClass('l_act');}
else if(_href2 == 'p106'){$('.templetes').hide();$('.l6').show();$('.wr_btn1').hide();$('.q6').addClass('l_act');}
else if(_href2 == 'p107'){$('.templetes').hide();$('.l7').show();$('.wr_btn1').hide();$('.q7').addClass('l_act');}
else if(_href2 == 'p108'){$('.templetes').hide();$('.l8').show();$('.wr_btn1').hide();$('.q8').addClass('l_act');}
else if(_href2 == 'p109'){$('.templetes').hide();$('.l9').show();$('.wr_btn1').hide();$('.q9').addClass('l_act');}

$(".a_reload5").click(function(){location.href='C:/OpenServer/domains/norma-studio/site-templates/index.html#p105';location.reload();});
$(".a_reload7").click(function(){location.href='C:/OpenServer/domains/norma-studio/site-templates/index.html#p107';location.reload();});
$(".a_reload0").click(function(){location.href='C:/OpenServer/domains/norma-studio/site-templates/index.html#p100';location.reload();});