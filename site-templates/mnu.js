setTimeout(function () {
$('.wr_mnu>.mnu').append(`
<span><a class="a_mnu0" href="../index.html#ex1" title="Разработка сайтов от Norma Studio">Главная</a></span>
<span><a class="a_mnu3" href="../index.html#ex4" title="Разработка сайтов от Norma Studio">Дизайн сайтов</a></span>
<span><a class="a_mnu16" href="portfolio.html" target="_blank" title="Портфолио по разработке сайтов от Norma Studio">Портфолио</a></span>
<span><a class="a_mnu5" href="../index.html#ex2" title="Разработка сайтов от Norma Studio">Услуги</a></span>
<span><a class="a_mnu10" href="testimonials.html" target="blank" title="Отзывы клиентов | Разработка сайтов от Norma Studio">Отзывы</a></span>
<span><a class="a_mnu6" href="../index.html#ex6" title="Разработка сайтов от Norma Studio">Контакты</a></span>
<span><a data-remodal-target="modal5" title="Разработка сайтов от Norma Studio" style="color: #5733e8;cursor: pointer;border-bottom: 1px solid #5733e8;">Заказать</a></span>
`);
var cur386 = window.location.href;
var array15 = cur386.split('/'), elem965 = array15[8];
var a_mnu11 ='canvas.html', a_mnu12='polo.html', a_mnu13='porto.html', a_mnu14='ezy.html', a_mnu15='betheme.html', a_mnu16='portfolio.html', a_mnu10='testimonials.html';
if(elem965==a_mnu11){$('.a_mnu11').addClass('a_mnu_act');}
else if(elem965==a_mnu10){$('.a_mnu10').addClass('a_mnu_act');}
else if(elem965==a_mnu12){$('.a_mnu12').addClass('a_mnu_act');}
else if(elem965==a_mnu13){$('.a_mnu13').addClass('a_mnu_act');}
else if(elem965==a_mnu14){$('.a_mnu14').addClass('a_mnu_act');}
else if(elem965==a_mnu15){$('.a_mnu15').addClass('a_mnu_act');}
else if(elem965==a_mnu16){$('.a_mnu16').addClass('a_mnu_act');}
console.log('var cur386 = '+cur386);
console.log('var array15 = '+cur386.split('/'));
console.log('var elem965 = '+elem965);
}, 500);
// <span><a class="a_mnu11" href="canvas.html" target="blank" title="Разработка сайтов от Norma Studio">Дизайн сайтов Canvas</a></span>
// <span><a class="a_mnu12" href="polo.html" target="blank" title="Разработка сайтов от Norma Studio">Дизайн сайтов Polo</a></span>
// <span><a class="a_mnu13" href="porto.html" target="blank" title="Разработка сайтов от Norma Studio">Дизайн сайтов Porto</a></span>
// <span><a class="a_mnu14" href="ezy.html" target="blank" title="Разработка сайтов от Norma Studio">Дизайн сайтов Ezy</a></span>
// <span><a class="a_mnu15" href="betheme.html" target="blank" title="Разработка сайтов от Norma Studio">Дизайн сайтов BeTheme</a></span>