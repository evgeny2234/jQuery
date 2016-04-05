//alert("Hello");

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
