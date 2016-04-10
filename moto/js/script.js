$(document).ready(function() {

	//Операции выборки!!
	/*
	var i = document.getElementsByTagName('img');

	//alert(i.length);

	var j = document.getElementById('div_for_img');

	//alert(j.alt);

	var x = j.childNodes; //ищем всех дочерних элементов

	for (var i=0;i<x.length;i++)
	{
		x[i].alt = "Fuck";
		//alert(x[i].alt);
	}

	var parent = j.parentNode; //ищем родителя
	//alert(parent.id);

	var nextBrother = j.nextSibling;
	//alert(nextBrother);

	var prevBrother = j.previousSibling;
	//alert(prevBrother);

	var mainH1 = document.getElementById("main_h1");
	alert(mainH1.textContent);
	alert(mainH1.innerText);

	var inHtml = document.getElementById('div_for_img');
	inHtml.innerHTML = "<br><strong>Hello!</strong><br>"
	alert (inHtml.innerHTML);

	*/
	
	/*
	$('div > img'); //выборка по дочерним тегам или классам
	$('div img');  //выборка по въождению опредеоенного элемента в родительский
	$('.class + a');  //следующий a после .class
	$('img[src$=.jpg]'); //выборка по окончанию значения атрибута
	$('img[src^=http]'); //выборка по началу значения атрибута
	$('img[id*=moto]'); //выборка по вхождению в значения атрибута
	$('.class'); //выборка по классу
	$('p'); //выборка по тегу
	$('#id'); //выборка по id
	$('div[width=200]'); //выборка по точному значению атрибута
	$('#table tr:even'); //выборка всех четных дочерних жлементов   (0,2,4,6,8...)
	$('#table tr:odd'); //выборка всех нечетных дочерних жлементов  (1,3,5,7,9...)
	$('img:not[#div img]'); //все картинки кроме тех, которые в блоке див
	$('div:has[img]'); //отбор тегов или классов внутри которых есть кказанный тег или класс
	$('p:contain[мотоцикл]'); //выбор тега по содержанию т.е. по наличию текста внутри
	$('#for_img img:first'); //первая картинка из блока div
	$('#for_img img:last'); //крайняя картинка из блока div
	$('div:hiden'); //только скрытые элементы
	$('div:visibility'); //только видимые элементы
	
	$('#id').show(3000); //показать элемент
	$('#id').hide(3000); //скрыть элемент
	$('#id').text('sdfg'); //получить и изменить текст
	$('#id').width(); //получить и изменить ширину
	$('#id').height(); //получить и изменить высоту
	
	$('#id').html('<>'); //получить и изменить html код
	
	$('#id').fadeOut(3000); //скрыть элемент плавно за какое время
	$('#id').fadeIn(3000); //показать элемент плавно за какое время
	$('#id').fadeTo(3000,0.5); //показать/скрыть элемент плавно за какое время и до какой прозрачности
	
	$('#id > img').slideUp(3000)   //свертывание элемента вверх
	$('#id > img').slideDown(3000)   //развертывание элемента обратно
	
	$('#forfooter > img').attr('height',200);// управление атрибутами
	$('#forfooter > img').removeAttr('title').attr('title','new');  //удаление и добавление атрибута
	
	$('div').addClass('class');  //добавление класса в тег
	$('div').removeClass('class');  //удаление класса из тега
	
	$('#id').css('свойство','значение');  //изменение параметров блоков
	$('#id').css({
	'свойство','значение'},
	'свойство','значение'},
	'свойство','значение'}
	});  //изменение параметров блоков

	$('#id').animate({'borderWidth':'10px'},5000, function(){alert('Finish');})  //Анимация animate вполняет действие за промежток времени и посе нее еще может быть выполнена еще одна функция
	
	$('#div_for_img').before('<p>This string has been written wiith method Before</p>'); //добавддяет код перед выбранным блоком
	$('#div_for_img').after('<p>This string has been written wiith method After</p>');  //добавляет екод после выбранного блока
	$('#div_for_img').append('<p>This string has been written wiith method Apend</p>'); //добавляет код крайним внутри выбранного блока
    $('#div_for_img').prepend('<p>This string has been written wiith method Prepend</p>'); //обавляет код первым нутри выбранного блока
	
	$('img').each(function(){           //для каждого элемента выполяется if и действие (метод each)
    	if($(this).width() > 400){
    		$(this).fadeOut(3000);
    	}
    });

	$('div').size(); //показывает, сколько всего у Нас в html тех или иных элементов
	$('div').get(1);  //получаем JavaScript объект под указанным номеров

	var clone = $('#div_for_img').clone();  //клонирует оъект указанный и его потом можно разместить где угодно на станичке. Возвращает объект который Мы клонируем
	$('body').append(clone);

	var del = $('#my_form').remove();  //удаляет выбранный объект и при этом возвращает сам объект так, что Мы можем его потом вставить куда Нам надо
	$('body').prepend(del);

	$('img[title=мото], div')//выборка по нескольким атрибутам или параметрам
	$('img[title]')//выборка по НАЛИЧИЮ какого-либо атрибута


	*/
	
	/*
	
		var text_h1 = $('#main_h1').text();   //выборка текста внутри тега
		alert(text_h1);

		var header_f = $('img[src*=logo]');
		
		//var header_f = $('img[width=900]');
		//header_f.hide(1000).show(3000);
		
		
		var link = $('a[href$=PDF]');
		link.hide(1000).text('!!!!!').show(1000);
		
		$('img:not(img[width=200])').hide(5000);
		
		//$('img:not(#w)').hide(5000);
		
		//$('#div_for_img').width(900).height(200);
		
		var id = '#forfooter';
		
		alert ($(id).width());
		//alert ($('[id]').height());
		
		function f1(id)
		{
			$('.res > p:first').text(($(id).width()));
			$('.res > p:last').text(($(id).height()));
		}
		
		f1(id);
		
		//alert ($('#moto_models').html('<li>Харлей <strong>Дэвидсон</strong></li><li>Кроссовый мотоцикл</li><li>Гоночный мотоцикл</li><li>Концептуальный мотоцикл</li>'));
		
		
		var id = prompt('Input ID ');
		var time = prompt('How long? ');
		
		time=parseInt(time);
		
		
		function f2(id,time)
		{
			if(isNaN(time))
			{
				alert('false');
				return false;
			}
			else
			{
				if(time>=500&&time<=10000)
				{
					$(id).fadeOut(time);
					alert('true');
					return true;
				}
			}
		}
		
		f2(id,time);
		
		$('#div_for_img').slideUp(4000).slideDown(3000);
	
	*/
	
	/*
	var link1 = document.getElementById('img_1');   //чистым JS вытаскиваем атрибуты их значения
	var j = link1.getAttribute('width');
	alert(j);
	
	
	var result = $('#forfooter > img').attr('height',200);   //узнали значение атрибута и можем его поменять
	alert(result);
	
	$('#forfooter > img').removeAttr('title').attr('title','new');  //удаление атрибута и добавление нового атрибута
	
	
	var id = prompt('input ID: ');
	var attr = prompt('input attr: ');
	var change = prompt('input change: ');
	
	function f3(id,attr,change)
	{
		$(id).attr(attr,change);
	}
	
	f3(id,attr,change);
	
	
function f4()
{
	$('#main_h1').addClass('new');
}		
function f5()
{
	$('#main_h1').removeClass('new');
}
setTimeout(f4,7000);
setTimeout(f5,9000);
	*/
	
	/*
	var textSize = $('#main_h1').css('color');   //вывод стиля текущего
	alert(textSize);
	$('#main_h1').css('color','green');   //вывод стиля текущего и замена на зеленый
	textSize = $('#main_h1').css('color');
	alert(textSize);
	
	$('#main_h1').css({  //передача сразу несклькх параметров (атрибутов)
		'color':'black',
		'padding-top': '10px',
		'background-color':'red'
	});
	
	$('#my_h3 span').removeClass('pq');
	
	$('#my_h3 span').css({
		'border': '1px solid #cc0000',
		'padding': '5px',
		'background-color': '#f6f6f6'	
	});
	
	$('.animate').css({'border':'2px solid red','display':'block'}).animate({'marginLeft':'-1000px'},4000,function() {alert('Я сдвинул блок влево')});
	
	$('#img_2').css({'border':'2px solid green'}).animate({'borderWidth':'5px'},5000, function() {alert('Finish'); $('#rrr').fadeOut(3000);});
	
	*/
	/*

	$('#div_for_img').css({'border':'1px solid cyan'}).before('<p>This string has been written wiith method Before</p>');
	$('#div_for_img').css({'border':'1px solid cyan'}).after('<p>This string has been written wiith method After</p>');
	$('#div_for_img').css({'border':'1px solid cyan'}).append('<p>This string has been written wiith method Apend</p>');
    $('#div_for_img').css({'border':'1px solid cyan'}).prepend('<p>This string has been written wiith method Prepend</p>');
//----------------HW-------------------------

$('body').append('<p>Homework Append</p>');
$('body > p:last').attr('id','newparagraph');
$('#newparagraph').css({
	'backgroundColor' : 'black',
	'color' : 'white',
	'display' : 'block',
	'border' : '2px solid red'
});

    $('img').each(function(){           //для каждого элемента выполяется if и действие
    	if($(this).width() > 400){
    		$(this).fadeOut(3000);
    	}
    });

    //---------------HW---------------------
	$('img[title*=t]').each(function(){ 
    	if($(this).height() > 50 && $(this).height() < 100){
    		$(this).css({
    			'marginBottom' : '10px',
    			'border' : '3px solid red'
    		});
    	}
    });
*/

/*
alert($('div').size()); //показывает, сколько всего у Нас в html тех или иных элементов
$('div').get(1);  //получаем JavaScript объект под указанным номеров

var clone = $('#div_for_img').clone();  //клонирует оъект указанный и его потом можно разместить где угодно на станичке. Возвращает объект который Мы клонируем
$('body').append(clone);

var del = $('#my_form').remove();  //удаляет выбранный объект и при этом возвращает сам объект так, что Мы можем его потом вставить куда Нам надо
$('body').prepend(del);
*/

//События которые отслеживает браузер
/*
mouseover - аналог hover
mouseout - противположное hover (увод с элемента)
click - одиночный клик левой кнопкой мыши
dblclick - двойной клик
mousemove - движение мыши
mousedown - нажали мишь но еще не отпустили
mouseup - отпустили мышь
submit - отправка формы при клике на кнопке "отправить"
focus - когда элемент получает фокус
blure - выход из фокуса
change - ммент, когда чо-то изменилось в поле
reset - сброс формы
keypress - нажатие кнопки клавиатуры
keyup - отпустили кнопку после нажатия
keydown - нажали и еще не отпустили
load - когда браузер загрузил всю страницу (все html,script и т.д.)
resize - меняется ширина окна браузера
scroll - прокрутка окна
upload - когда закрываем страницу или переходим на другую страницу

$('#moto_table td').hover(function(){     //действия при наведении мышки и когда ее уводишь

},function() {
   
});

$('#moto_table td').toggle(function(){    //действие при клике и при пвторном клике (работает нормальн до версии jQuery 1.8)

},function() {
   
});

$('#div_for_img').click(function(eventObject){

	alert('Click');
	alert('Координата щелчка по оси oX: ' + eventObject.screenX + ' Координата щелчка по оси oY:' + eventObject.screenY);
	alert('Координата щелчка по оси oX: ' + eventObject.pageX + ' Координата щелчка по оси oY:' + eventObject.pageY);
	alert('Была ли нажата клавиша Alt: ' + eventObject.altKey);
	alert('Была ли нажата клавиша Ctrl: ' + eventObject.ctrlKey);
	alert('Была ли нажата клавиша Shift: ' + eventObject.shiftKey);

	var myObject = eventObject.target;
	alert('Какой оъект отреагировал на событие: ' + myObject.id);
});


 */
/*
 var myMoto = document.getElementById('img_1');

 function f1() {
 	alert('Вы кликнули по мотоциклу 1, его ширина: '+myMoto.width);
 	$('#img_1').animate({'paddingLeft':'400'},5000,function(){alert('Finish')});
 }
 myMoto.onclick = f1;

<<<<<<< HEAD

 var myMoto2 = document.getElementById('img_2');

 function f2() {
 	$('#img_2').fadeOut(3000);
 	alert('Finish2');
 }
 myMoto2.onclick = f2;

*/


  // События через jQuery
  /*
$('#div_for_img img').click(function() {

	var clone = $(this).clone();
	$('#forresults').append(clone);

});


$('#moto_models li').click(function(){

	var myText = $(this).text();
	//alert('Hell');
	$('.mototable tbody').append('<tr><td>'+ myText +'</td><td>10000</td></tr>');

});
*/
/*
$('#moto_table td').mouseover(function(){

	//alert('Hell');
	$(this).css({
		'borderBottom':'2px solid #1F233C',
		'color':'red',
		'backgroundColor':'cyan'
	})

});

$('#moto_table td').mouseout(function(){

	//alert('Hell');
	$(this).css({
		'borderBottom':'none',
		'color':'black',
		'backgroundColor':'white'
	})

});
*/

/*
$('#moto_table td').hover(function(){

$(this).css({
		'borderBottom':'2px solid #1F233C',
		'color':'red',
		'backgroundColor':'cyan'
	});

},function() {

	$(this).css({
		'borderBottom':'none',
		'color':'black',
		'backgroundColor':'white'
	});

});

//-----------HW----------------
$('#my_button').hover(function(){

	$(this).css({'backgroundColor':'#32375D','color':'white'});

},function() {

	$(this).css({'backgroundColor':'#f6f6f6','color':'#2C2C2C'});

});


//$('#hideBlock').click(function(){
//toggle с двумя функциями работает для jQuery версии до 1.8

$('#hideBlock').toggle(function(){

	$('#my_form').fadeOut(3000);
	$(this).text('развернуть');

},function() {

	$('#my_form').fadeIn(3000);
	$(this).text('свернуть');

})//});


 var myMoto2 = document.getElementById('img_2');

 function f2() {
 	$('#img_2').fadeOut(3000);
 	alert('Finish2');
 }
 myMoto2.onclick = f2;
*/

//Понятие объекта событий


/*
$('#div_for_img').click(function(eventObject){

	alert('Click');
	alert('Координата щелчка по оси oX: ' + eventObject.screenX + ' Координата щелчка по оси oY:' + eventObject.screenY);
	alert('Координата щелчка по оси oX: ' + eventObject.pageX + ' Координата щелчка по оси oY:' + eventObject.pageY);
	alert('Была ли нажата клавиша Alt: ' + eventObject.altKey);
	alert('Была ли нажата клавиша Ctrl: ' + eventObject.ctrlKey);
	alert('Была ли нажата клавиша Shift: ' + eventObject.shiftKey);

	var myObject = eventObject.target;
	alert('Какой оъект отреагировал на событие: ' + myObject.id);
});

	$('img[alt*=Мотоцикл]').click(function(event){
		click++;
		alert(click);
	if(event.shiftKey)
	{
		$(this).css({
			'border':'4px solid red'
		})
	}
	else
	{
		$(this).css({
			'border':'4px solid green'
		})
	}

	});

*/
/*
$('#my_button').click(function(event){

	if(confirm('Are You ready?'))
	{
		alert('Okey');
	}
	else
	{
		event.preventDefault();
	}
});
*/
/*
//Упрощенная работа с формами, выборка из элементов форм
:input - выберет Все элементы, которые влияют на ввод данных в форме
:text - поля ввода, которые были созданы, как <input type="text"...
:password - поля ввода, которые были созданы, как <input type="password"...
:radio - поля ввода, которые были созданы, как <input type="radio"...
:checkbox - поля ввода, которые были созданы, как <input type="checkbox"...
:submit - поля ввода, которые были созданы, как <input type="submit"...
:image - поля ввода, которые были созданы, как <input type="image"...
:reset - поля ввода, которые были созданы, как <input type="reset"...
:button - поля ввода, которые были созданы, как <input type="button"...
:file - поля ввода, которые были созданы, как <input type="file"...
:hidden - поля ввода, которые были созданы, как <input type="hidden"...

:checked - выбрать все использованные или выбранные поля.
:checkbox:checked - выбрать все использованные или выбранные поля checkbox.
:radio:checked - выбрать все использованные или выбранные поля radio.

:selected - выбрать все использованные или выбранные поля select (список) т.е. выбранные.

$(':submit').fadeOut(2000);    //все кнопки типа submit 
$(':checkbox').fadeOut(2000);  //все checkbox-ы
*/


$('#checkButton').click(function(){
	//alert($('#mytextarea').val());

	alert($('#email').val());
});

$('#checkButton').click(function(){
	//alert($('#mytextarea').val());

	alert($('#motoSelect :selected').val());
});

$('#checkButton').click(function(){
	//alert($('#mytextarea').val());

	alert($('#radio :checked').val());
});


$(':checkbox:checked').each(function(){
	alert('checkbox');
	alert($(this).val());
});
















}); //конец jQuery