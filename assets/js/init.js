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
    if (filename == "#cara-menambah-marker-dengan-fungsi-click-pada-pada-google-maps") {
      $("#include").load("gmaps-repo/"+file+".html"); 
    }
    if (filename == "#cara-membuat-fungsi-show-atau-hide-marker-pada-google-maps") {
      $("#include").load("gmaps-repo/"+file+".html"); 
    }
    if (filename == "#cara-menghapus-marker-dari-maps-pada-google-maps") {
      $("#include").load("gmaps-repo/"+file+".html"); 
    }
    if (filename == "#cara-merubah-marker-menjadi-icon-gambar-pada-google-maps") {
      $("#include").load("gmaps-repo/"+file+".html"); 
    }
    if (filename == "#cara-membuat-info-window-sederhana-pada-google-maps") {
      $("#include").load("gmaps-repo/"+file+".html"); 
    }
    if (filename == "#cara-merubah-style-konten-info-window-pada-google-maps") {
      $("#include").load("gmaps-repo/"+file+".html"); 
    }
    if (filename == "#cara-menghapus-background-putih-info-window-pada-google-maps") {
      $("#include").load("gmaps-repo/"+file+".html"); 
    }
    if (filename == "#cara-membuat-infowindow-dengan-infobox-di-google-maps") {
      $("#include").load("gmaps-repo/"+file+".html"); 
    }
    if (filename == "#cara-merubah-style-maps-pada-google-maps") {
      $("#include").load("gmaps-repo/"+file+".html"); 
    }
    if (filename == "#cara-membuat-aplikasi-google-maps-dengan-php-dan-mysql") {
      $("#include").load("gmaps-repo/"+file+".html"); 
    }
    if (filename == "#cara-membuat-style-maps-menggunakan-styling-wizard") {
      $("#include").load("gmaps-repo/"+file+".html"); 
    }
    if (filename == "#cara-membuat-legenda-pada-google-maps") {
      $("#include").load("gmaps-repo/"+file+".html"); 
    }
    if (filename == "#cara-membuat-pencarian-lokasi-pada-google-maps-menggunakan-php-dan-mysql") {
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
function load(e){
	var value = e.getAttribute("data-id");
	$("#include").load("gmaps-repo/"+value+".html"); 
	location.reload();
}
(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $(".dropdown-button").dropdown();
  }); 
})(jQuery); 