$(document).ready(function() {

alert("Hello");
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
	$('#div_for_img');  //выбор по ID
	$('div'); //выборка по тегу div
	$('.maindiv'); //выборка по классам


	//вложенные теги

	$('#div_for_img img');  //все теги img внутри id 
	$('#div_for_img > img');  //все теги img внутри id только на 1  уровень ниже

	$('#main_h1 + p'); //выбор следуюшего элемента после указанного id


	//--------------------------

	$('img[width=200]');

	$('a[href^=http]');   //все ссылки которые начтнаются с http

	$('img[src$=.jpg]');   //все ссылки которые щканчиваются на .jpg

	$('img[src*=moto]');   //все ссылки которые в любом месте имеют слово moto

	//----------------HW----------------

	$('#my_links[href^=documents]');   

	$('#forfooter > img[title=Производители]');  

	//---------------------------------------------------
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
	*/
	
	
	var text_h1 = $('#main_h1').text();
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
	
});