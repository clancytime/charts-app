var autoGrid;

$(function() {
	var socket = io.connect(null),
	newChart = true;

	socket.on('grids', function (grids) {
		console.log(data);
		for (i in grids) {
			autoGrid = addGrid(grids[i]);
			addCharttoGrid(autoGrid.name, autoGrid.grid, "Pie");
		}
	});

	socket.on('connect', function(){});
	socket.on('disconnect', function(){});
	socket.on('reconnecting', function( nextRetry ){});
	socket.on('reconnect_failed', function(){});

	$('.save-charts').click(function() {
		socket.emit('save grids', gridster.serialize());
	});

	$('.remove-charts').click(function() {
		socket.emit('remove grids');
	})

	socket.on('errors', function(error) {
		console.log(error);
	});

	socket.on('completed', function() {
		console.log('grids added/removed successfully!');
	});
});