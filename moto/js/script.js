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
	
	
	
	
	
	
	
	
	
	
	
});