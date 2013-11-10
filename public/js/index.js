var gridster;

$(function(){

	var gridster = $(".gridster ul").gridster({
	  widget_base_dimensions: [100, 100],
	  widget_margins: [10, 10],
	  resize: {
	    enabled: true
	  }
	}).data('gridster');

});