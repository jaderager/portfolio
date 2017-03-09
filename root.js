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
    // window.getSelection().removeAllRanges();
    console.log('fired');
    iHamburgerMenu.toggle();
    // $('#ham-menu').slideToggle('fast');
  });
});