var loadedBg = "0";

function updateBackground() {
  screenWidth = $(window).width();
  screenHeight = $(window).height();
  bg = $("#bg");
  ratio = 1.6
  
  if (screenWidth/screenHeight > ratio) {
    $(bg).height("auto");
    $(bg).width("100%");
  } else {
    $(bg).width("auto");
    $(bg).height("100%");
  }

  if ($(bg).width() > 0) {
    $(bg).css('left', (screenWidth - $(bg).width()) / 2);
  }
  if ((loadedBg > screenHeight) && (loadedBg*ratio > screenWidth)) {
    return false;
  }
  
  if ((screenHeight > 1050) || (screenWidth > 1680)) {
    $(bg).attr("src", "img/background1667.jpg");
    loadedBg = 2000;
  } else if ((screenHeight > 900) || (screenWidth > 1440)) {
    $(bg).attr("src", "img/background1050.jpg");
    loadedBg = 1050;
  } else if ((screenHeight > 600) || (screenWidth > 800)) {
    $(bg).attr("src", "img/background900.jpg");
    loadedBg = 900;
  } else {
    $(bg).attr("src", "img/background600.jpg");
    loadedBg = 600;    
  }

  // Hacer desaparecer imagen shield
  if(screenWidth < 805){
    $('#shield').css('display','none');
  }

}
$(document).ready(function() {
  updateBackground();
  $(window).bind("resize", function() {
    updateBackground();
  });
});
