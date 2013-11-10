var gridster;

var data = [
	{
		value: 30,
		color:"#F38630"
	},
	{
		value : 50,
		color : "#E0E4CC"
	},
	{
		value : 100,
		color : "#69D2E7"
	}			
];

$(function(){

	var gridster = $(".gridster ul").gridster({
	  widget_base_dimensions: [250, 250],
	  widget_margins: [10, 10],
	  resize: {
	    enabled: true,
	    stop: function(e, ui, $widget) {

	  		var grid = $widget[0].className.split(" ")[0];
	  		if (grid != "gs-w") {
	  			$('#' + grid).attr('height', ($widget[0].clientHeight - 50));
				$('#' + grid).attr('width', ($widget[0].clientWidth - 50));

				addCharttoGrid(grid, $widget, "Pie");
	  		}
	  	}
	  },
	  serialize_params: function($w, wgd) { 
	  	var gridName = $w[0].className.split(" ")[0];
	  	return { chartName: gridName, col: wgd.col, row: wgd.row, size_x: wgd.size_x, size_y: wgd.size_y };
	  }
	}).data('gridster');


	$('a.add-chart').click(function(){
		addChartForm();
	});

	$('#mask').click(function(){
		closeChartForm();
	});

	$('.chart-form button').click(function(){
		var chartType = $('.chart-form select #chartType').val();
		var newGrid = addGrid();

		addCharttoGrid(newGrid.name, newGrid.grid, chartType);

		closeChartForm();
	});


	addChartForm = function() {

		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		//Set heigth and width to mask to fill up the whole screen
		$('#mask').css({'width': maskWidth,'height': maskHeight});

		//transition effect     
		$('#mask').fadeIn(1000);

		$('.chart-form').css({ 'left': (maskWidth - 500)/2, 'margin-top': (maskHeight-500)/2 });
		$('.chart-form').fadeIn();
	};

	closeChartForm = function() {
		$('.chart-form').fadeOut();
		$('#mask').fadeOut();
	};

	addGrid = function(chart) {
		var grids = gridster.serialize(),
			gridName = "Chart" + grids.length.toString(),
			chart = typeof chart !== 'undefined' ? chart : 'undefined';

		if (chart == 'undefined') {
			var newGrid = gridster.add_widget('<li class="' + gridName + '"><canvas id="' + gridName + '" width="200" height="200"></canvas></li>', 1, 1, 1, 1);
			return { grid: newGrid, name: gridName };
		}
		else {
			var newGrid = gridster.add_widget('<li class="' + chart.chartName + '"><canvas id="' + chart.chartName + '" width="200" height="200"></canvas></li>',
			chart.size_x, chart.size_y, chart.col, chart.row);
			return { grid: newGrid, name: chart.chartName };
		}
	};

	addCharttoGrid = function(gridName, grid, chartType) {
		if ((grid[0].clientHeight != 250) && (grid[0].clientWidth != 250)){
			$('#' + gridName).attr('height', (grid[0].clientHeight - 50));
			$('#' + gridName).attr('width', (grid[0].clientWidth - 50));
		}
		//Get context with jQuery - using jQuery's .get() method.
		var ctx = $("#" + gridName).get(0).getContext("2d");
		//This will get the first returned node in the jQuery collection.
		new Chart(ctx).Pie(data);

	};
});