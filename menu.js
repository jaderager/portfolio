var HamburgerMenu = function(srcEle) {
  this.srcEle = srcEle;
  $(this.srcEle).slideToggle(0);

  this.visible = false;

};
HamburgerMenu.prototype.toggle = function() {
  console.log('toggling ' + this.srcEle);
  
  if (!this.visible) {
    $(this.srcEle).removeClass('hide');
    $(this.srcEle).slideToggle('fast');
  } else if (this.visible) {
    console.log('sliding');
    $(this.srcEle).slideToggle('fast');
  }
}

$(document).ready(function() {
  console.log($('#ham-menu'));
  var iHamburgerMenu = new HamburgerMenu('#ham-menu');
  $('#ham-button').click(function() {

    console.log('fired');
    iHamburgerMenu.toggle();

  });

  $('#ham-button-home').on('click', function() {
    $('#home').removeClass('hide');
    $('#about').addClass('hide');
    $('#sub-header article.project').addClass('hide');
  });

  $('#ham-button-about').on('click', function() {
    $('#home').addClass('hide');
    $('#about').removeClass('hide');
    $('#sub-header article.project').addClass('hide');
  });

  $('#ham-button-projects').on('click', function() {
    $('#home').addClass('hide');
    $('#about').addClass('hide');
    $('#sub-header article.project').removeClass('hide');
  });
});