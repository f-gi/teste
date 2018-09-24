$(document).ready(function() {

	$("#cadastro").hide();
	$("#conteudo").hide();
	$("#cliente1").hide();
	$("#cliente2").hide();
	$("#cliente3").hide();
	$("#cliente4").hide();
	$("#img2").hide();
	$("#img3").hide();
	$("#img4").hide();

	$('#menu').click(function() { 	// hide + show do modal menu hamburger
		$("#conteudo").slideToggle();
		$("#video").slideToggle();
	});

	$('#img1').click(function() {	// show do modal do primeiro cliente
		$("#cliente1").show("fast");
		$("#video").hide("fast");
	});

	$('#img2').click(function() {	// show do modal do segundo cliente
		$("#cliente2").show("fast");
		$("#video").hide("fast");
	});

	$('#img3').click(function() {	// show do modal do terceiro cliente
		$("#cliente3").show("fast");
		$("#video").hide("fast");
	});

	$('#img4').click(function() {	// show do modal do quarto cliente
		$("#cliente4").show("fast");
		$("#video").hide("fast");
	});

	$('#b1').click(function() { 	// hide no modal do cliente 1
		$("#cliente1").hide("fast");
		$("#video").show("fast");
	});

	$('#b2').click(function() { 	// hide no modal do cliente 2
		$("#cliente2").hide("fast");
		$("#video").show("fast");
	});

	$('#b3').click(function() { 	// hide no modal do cliente 3
		$("#cliente3").hide("fast");
		$("#video").show("fast");
	});

	$('#b4').click(function() { 	// hide no modal do cliente 4
		$("#cliente4").hide("fast");
		$("#video").show("fast");
	});

	$('#b5').click(function(){		// hide do modal do botão hamburger
		$("#cadastro").hide();
		$(".menu").show();
		$("#conteudo").hide();
		$("#video").slideToggle();

	});

	$('#bt6').click(function(){
		$(".menu").hide();
		$("#cadastro").show();
	});

	// funções  do carrossel
	$('#slide1').click(function() { 
		$("#img2").hide();
		$("#img3").hide();
		$("#img4").hide();
		$("#img1").show();
	});

	$('#slide2').click(function() { 
		$("#img1").hide();
		$("#img3").hide();
		$("#img4").hide();
		$("#img2").show();
	});

	$('#slide3').click(function() { 
		$("#img1").hide();
		$("#img2").hide();
		$("#img4").hide();
		$("#img3").show();
	});

	$('#slide4').click(function() { 
		$("#img1").hide();
		$("#img2").hide();
		$("#img3").hide();
		$("#img4").show();
	});
});

function getLocation(){
	navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position){
  var a="Latitude: " + position.coords.latitude + 
  "Longitude: " + position.coords.longitude; 

	alert(a);

		// alert("LAtitude:"latitude);  OMG KKKKK
}