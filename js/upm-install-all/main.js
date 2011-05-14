/**
 * The main module
 *
 * @context atl.admin
 */
var $ = require('speakeasy/jquery').jQuery;

var buildUI = function () {
	$('#upm-install-container-featured').prepend(
		"<div class='upm-install-type' style='display: block'>"+
		"<h3>Advanced Options</h3>"+
		"<p class='upm-section-description'><input type='button' value='Install All Available Plugins' class='upm-install-all-button' /></p>"+
		"</div>");
	
	$('.upm-install-all-button').click(function () {
		alert("Are you insane?!? You may want to call Adaptavist if you thought that would be a good idea ...");
	} );
};

$(document).ready(function() {
	// Rebuild when the Install tab is selected
	if (document.location.href.indexOf("/plugins/servlet/upm") !== -1) {
		$("a#upm-tab-install").click( function () {
			buildUI();
		} );
	}

	// Build now if already on the install tab
	if (document.location.href.indexOf("/plugins/servlet/upm#install") !== -1) {
		buildUI();
	}
});
