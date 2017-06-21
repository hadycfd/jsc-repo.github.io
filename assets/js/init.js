var url      = window.location.href;
var filename = url.substring(url.lastIndexOf('/')+1);
var file = url.substring(url.lastIndexOf('#')+1);
$(function($){
    if (filename == "#index" || filename == "") {
      $("#include").load("page/dashboard.html"); 
    }
    if (filename == "#gmaps-repo") {
      $("#include").load("page/gmaps-repo.html"); 
    }
    if (filename == "#cara-membuat-maps-dengan-google-maps") {
      $("#include").load("gmaps-repo/"+file+".html"); 
    }
    if (filename == "#cara-membuat-marker-pada-google-maps") {
      $("#include").load("gmaps-repo/"+file+".html"); 
    }
    if (filename == "#cara-membuat-animasi-pada-marker-google-maps-1") {
      $("#include").load("gmaps-repo/"+file+".html"); 
    }
    if (filename == "#cara-membuat-animasi-pada-marker-google-maps-2") {
      $("#include").load("gmaps-repo/"+file+".html"); 
    }
    if (filename == "#cara-membuat-animasi-pada-marker-google-maps-3") {
      $("#include").load("gmaps-repo/"+file+".html"); 
    }
    if (filename == "#cara-membuat-marker-bisa-di-drag-atau-di-pindahkan-pada-google-maps") {
      $("#include").load("gmaps-repo/"+file+".html"); 
    }
});
$(document).ready(function(){
    $('#index').click(function(){
     	$("#include").load("page/dashboard.html"); 
    });
    $('#gmaps-repo').click(function(){
     	$("#include").load("page/gmaps-repo.html"); 
    });
    $('#back-gmaps').click(function(){
     	$("#include").load("page/gmaps-repo.html"); 
    });
});
function pageRedirect() {
  window.location.replace("#gmaps-repo");
  location.reload();
}  
//function load maps start
function load1(e){
	var value = e.getAttribute("data-id");
	$("#include").load("gmaps-repo/"+value+".html"); 
	location.reload();
}
function load2(e){
	var value = e.getAttribute("data-id");
	$("#include").load("gmaps-repo/"+value+".html"); 
	location.reload();
}
function load3(e){
	var value = e.getAttribute("data-id");
	$("#include").load("gmaps-repo/"+value+".html"); 
	location.reload();
}
function load4(e){
	var value = e.getAttribute("data-id");
	$("#include").load("gmaps-repo/"+value+".html"); 
	location.reload();
}
function load5(e){
	var value = e.getAttribute("data-id");
	$("#include").load("gmaps-repo/"+value+".html"); 
	location.reload();
}
function load6(e){
	var value = e.getAttribute("data-id");
	$("#include").load("gmaps-repo/"+value+".html"); 
	location.reload();
}
//function load maps end

(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $(".dropdown-button").dropdown();
  }); 
})(jQuery); 