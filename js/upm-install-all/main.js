/**
 * The main module
 *
 * @context atl.admin
 */
var $ = require('speakeasy/jquery').jQuery;
var img = require('speakeasy/resources').getImageUrl(module, 'projectavatar.png');

$(document).ready(function() {
  if (document.location.href.indexOf("/plugins/servlet/upm") !== -1) {
    $('#upm-install-container-featured').prepend("<div class='upm-install-type' style='display: block'><h3>Advanced Options</h3><p class='upm-section-description'><input type='button' value='Install ALL' class='upm-install-all-button' /></p></div>");
    
    $('.upm-install-all-button').click(function () {
      var dialog = new AJS.Dialog({width:500, height:200});      
      dialog.addHeader("Are you insane?!", "title-class");
      dialog.show();
    });  
  }
});
