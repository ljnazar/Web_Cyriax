var navegador="#nav1";
var lenguaje="#ESP";
var indicador="#i1";
var navleng="#navES";


//evento al colocar el puntero del raton sobre la imagen
$('#i1').hover(function(){
	//buscamosla imagen y la rotamos 360 grados
	$('#i1').stop(true,true).rotate({
		duration: 3000,
		animateTo: 360
	});
}, //evento al retirar el raton del elemento
function(){
	//rotamos la imagen a 0 (cero) grados
	$('#i1').stop(true,true).rotate({
		animateTo: 0
	});
});
//evento al colocar el puntero del raton sobre la imagen
$('#i2').hover(function(){
	//buscamosla imagen y la rotamos 360 grados
	$('#i2').stop(true,true).rotate({
		duration: 3000,
		animateTo: 360
	});
}, //evento al retirar el raton del elemento
function(){
	//rotamos la imagen a 0 (cero) grados
	$('#i2').stop(true,true).rotate({
		animateTo: 0
	});
});
//evento al colocar el puntero del raton sobre la imagen
$('#i3').hover(function(){
	//buscamosla imagen y la rotamos 360 grados
	$('#i3').stop(true,true).rotate({
		duration: 3000,
		animateTo: 360
	});
}, //evento al retirar el raton del elemento
function(){
	//rotamos la imagen a 0 (cero) grados
	$('#i3').stop(true,true).rotate({
		animateTo: 0
	});
});


function limpiar(){
	$('#nav1').removeClass('active');
	$('#nav2').removeClass('active');
	$('#nav3').removeClass('active');
	$('#nav4').removeClass('active');
	$('#nav5').removeClass('active');
	$('#nav3').removeClass('active');
	$('#nav6').removeClass('active');
	$('#nav7').removeClass('active');
	$('#nav8').removeClass('active');
}

function reseteo(){
	indicador="#i1";
	$('#i1').attr('src', 'img/ind-act.png');
	$('#i2').attr('src', 'img/ind-des.png');
	$('#i3').attr('src', 'img/ind-des.png');
}

$('#nav1').click(function(){
	navegador="#nav1";
	limpiar();
	reseteo();
	$('#nav1').addClass('active');
	$('#nav5').addClass('active');
	$('.ind').css('display','block');
	evaluar();
});

$('#nav2').click(function(){
	navegador="#nav2";
	limpiar();
	reseteo();
	$('#nav2').addClass('active');
	$('#nav6').addClass('active');
	$('.ind').css('display','block');
	evaluar();
});

$('#nav3').click(function(){
	navegador="#nav3";
	limpiar();
	reseteo();
	$('#nav3').addClass('active');
	$('#nav7').addClass('active');
	$('.ind').css('display','none');
	evaluar();
});

$('#nav4').click(function(){
	navegador="#nav4";
	limpiar();
	reseteo();
	$('#nav4').addClass('active');
	$('#nav8').addClass('active');
	$('.ind').css('display','none');
	evaluar();
});

$('#nav5').click(function(){
	navegador="#nav5";
	limpiar();
	reseteo();
	$('#nav1').addClass('active');
	$('#nav5').addClass('active');
	$('.ind').css('display','block');
	evaluar();
});

$('#nav6').click(function(){
	navegador="#nav6";
	limpiar();
	reseteo();
	$('#nav2').addClass('active');
	$('#nav6').addClass('active');
	$('.ind').css('display','block');
	evaluar();
});

$('#nav7').click(function(){
	navegador="#nav7";
	limpiar();
	reseteo();
	$('#nav3').addClass('active');
	$('#nav7').addClass('active');
	$('.ind').css('display','none');
	evaluar();
});

$('#nav8').click(function(){
	navegador="#nav8";
	limpiar();
	reseteo();
	$('#nav4').addClass('active');
	$('#nav8').addClass('active');
	$('.ind').css('display','none');
	evaluar();
});


$('#ESP').click(function(){
	lenguaje="#ESP";
	navleng="#navES";
	if(navegador=="#nav5"){
		navegador="#nav1";
	}
	else if(navegador=="#nav6"){
		navegador="#nav2";
	}
	else if(navegador=="#nav7"){
		navegador="#nav3";
	}
	else{//if(navegador=="#nav8")
		navegador="#nav4";
	}
	$('#ESP').addClass('active');
	$('#ENG').removeClass('active');
	$('#shield').css('margin-left', '16px');
	evaluar();
});

$('#ENG').click(function(){
	lenguaje="#ENG";
	navleng="#navEN";
	if(navegador=="#nav1"){
		navegador="#nav5";
	}
	else if(navegador=="#nav2"){
		navegador="#nav6";
	}
	else if(navegador=="#nav3"){
		navegador="#nav7";
	}
	else{//if(navegador=="#nav4")
		navegador="#nav8";
	}
	$('#ENG').addClass('active');
	$('#ESP').removeClass('active');
	$('#shield').css('margin-left', '77px');
	evaluar();
});


$('#i1').click(function(){
	indicador="#i1";
	$('#i1').attr('src', 'img/ind-act.png');
	$('#i2').attr('src', 'img/ind-des.png');
	$('#i3').attr('src', 'img/ind-des.png');
	evaluar();
});

$('#i2').click(function(){
	indicador="#i2";
	$('#i2').attr('src', 'img/ind-act.png');
	$('#i1').attr('src', 'img/ind-des.png');
	$('#i3').attr('src', 'img/ind-des.png');
	evaluar();
});

$('#i3').click(function(){
	indicador="#i3";
	$('#i3').attr('src', 'img/ind-act.png');
	$('#i1').attr('src', 'img/ind-des.png');
	$('#i2').attr('src', 'img/ind-des.png');
	evaluar();
});


function evaluar(){
	$('.jumbotron').css('display','none');

	if(navleng=='#navES'){
		$('#navES').css('display','block');
		$('#navEN').css('display','none');
	}
	else{
		$('#navES').css('display','none');
		$('#navEN').css('display','block');
	}

	if(navegador=='#nav1'){
		if(indicador=='#i1'){
			$('#nav1-1').css('display','block');
		}
		else if(indicador=='#i2'){
			$('#nav1-2').css('display','block');
		}
		else{//if(indicador=='#i3')
			$('#nav1-3').css('display','block');
		}
	}
	else if(navegador=='#nav2'){
		if(indicador=='#i1'){
			$('#nav2-1').css('display','block');
		}
		else if(indicador=='#i2'){
			$('#nav2-2').css('display','block');
		}
		else{//if(indicador=='#i3')
			$('#nav2-3').css('display','block');
		}
	}
	else if(navegador=='#nav3'){
		$('#nav3-1').css('display','block');
	}
	else if(navegador=='#nav4'){
		$('#nav4-1').css('display','block');
	}
	else if(navegador=='#nav5'){
		if(indicador=='#i1'){
			$('#nav5-1').css('display','block');
		}
		else if(indicador=='#i2'){
			$('#nav5-2').css('display','block');
		}
		else{//if(indicador=='#i3')
			$('#nav5-3').css('display','block');
		}
	}
	else if(navegador=='#nav6'){
		if(indicador=='#i1'){
			$('#nav6-1').css('display','block');
		}
		else if(indicador=='#i2'){
			$('#nav6-2').css('display','block');
		}
		else{//if(indicador=='#i3')
			$('#nav6-3').css('display','block');
		}
	}
	else if(navegador=='#nav7'){
		$('#nav7-1').css('display','block');
	}
	else{//if(navegador=='#nav8')
		$('#nav8-1').css('display','block');
	}
	
}

evaluar();