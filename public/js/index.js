var gridster;

$(function(){

	gridster = $(".gridster ul").gridster({
	  widget_base_dimensions: [250, 250],
	  widget_margins: [10, 10],
	  resize: {
	    enabled: true
	  }
	}).data('gridster');

});