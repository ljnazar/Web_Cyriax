var navegador="nav1";
var lenguaje="ESP";
var indicador="i1";


//código a ejecutar cuando el DOM está cargado completamente.
$(document).ready(function() {

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


function clear_container(){
	$('#lala').css('display','none');
	$('.list').css('display','none');
}

function limpiar(){
	$('#nav1').removeClass('active');
	$('#nav2').removeClass('active');
	$('#nav3').removeClass('active');
	$('#nav4').removeClass('active');
}

function reseteo(){
	indicador="i1";
	$('#i1').attr('src', 'img/ind-act.png');
	$('#i2').attr('src', 'img/ind-des.png');
	$('#i3').attr('src', 'img/ind-des.png');
}

$('#nav1').click(function(){
	navegador="nav1";
	limpiar();
	reseteo();
	$('#nav1').addClass('active');
	$('.ind').css('display','block');
	evaluar();
});

$('#nav2').click(function(){
	navegador="nav2";
	limpiar();
	reseteo();
	$('#nav2').addClass('active');
	$('.ind').css('display','block');
	evaluar();
});

$('#nav3').click(function(){
	navegador="nav3";
	limpiar();
	reseteo();
	$('#nav3').addClass('active');
	$('.ind').css('display','none');
	evaluar();
});

$('#nav4').click(function(){
	navegador="nav4";
	limpiar();
	reseteo();
	$('#nav4').addClass('active');
	$('.ind').css('display','none');
	evaluar();
});



$('#ESP').click(function(){
	lenguaje="ESP";
	$('#ESP').addClass('active');
	$('#ENG').removeClass('active');
	$('#shield').css('margin-left', '16px');
	evaluar();
});

$('#ENG').click(function(){
	lenguaje="ENG";
	$('#ENG').addClass('active');
	$('#ESP').removeClass('active');
	$('#shield').css('margin-left', '77px');
	evaluar();
});


$('#i1').click(function(){
	indicador="i1";
	$('#i1').attr('src', 'img/ind-act.png');
	$('#i2').attr('src', 'img/ind-des.png');
	$('#i3').attr('src', 'img/ind-des.png');
	evaluar();
});

$('#i2').click(function(){
	indicador="i2";
	$('#i2').attr('src', 'img/ind-act.png');
	$('#i1').attr('src', 'img/ind-des.png');
	$('#i3').attr('src', 'img/ind-des.png');
	evaluar();
});

$('#i3').click(function(){
	indicador="i3";
	$('#i3').attr('src', 'img/ind-act.png');
	$('#i1').attr('src', 'img/ind-des.png');
	$('#i2').attr('src', 'img/ind-des.png');
	evaluar();
});


function evaluar(){

	clear_container();

  //obtengo un objeto llamado json con toda la estructura (Lo obtiene de forma asíncrona)
  //Buscar la forma de hacerlo sin que sea asíncrono, para que no funcione lento.
  $.getJSON('../data.json', function(json) {

  	var context;
  	var context2;


  	if(lenguaje=="ESP"){
  		context=json.es.titles;
  		if(navegador=="nav1"){
			if(indicador=="i1"){
				context2=json.es.datos_nav1_i1;
			}
			else if(indicador=="i2"){
				context2=json.es.datos_nav1_i2;
				$('.list').css('display','block');
			}
			else{//if(indicador=="i3")
				
			}
  		}
  		else if(navegador=="nav2"){
			if(indicador=="i1"){

			}
			else if(indicador=="i2"){
				
			}
			else{//if(indicador=="i3")
				
			}
  		}
  		else if(navegador=="nav3"){
  			
  		}
  		else{//if(navegador=="nav4")

  		}
    }
    else{//if(lenguaje=="ENG")
  		context=json.en.titles;
  	  	if(navegador=="nav1"){
			if(indicador=="i1"){
				context2=json.en.datos_nav1_i1;
			}
			else if(indicador=="i2"){
			}
			else{//if(indicador=="i3")
				
			}
  		}
  		else if(navegador=="nav2"){
			if(indicador=="i1"){

			}
			else if(indicador=="i2"){
				
			}
			else{//if(indicador=="i3")
				
			}
  		}
  		else if(navegador=="nav3"){
  			
  		}
  		else{//if(navegador=="nav4")

  		}
    }

	$('#titles').loadJSON(context);

	$('#data').loadJSON(context2);

	$('.list').loadJSON(list);



  });
	
}

evaluar();



});