module.exports = function(io, mongoose) {
	var Grid = mongoose.model('Grid');

	io.sockets.on('connection', function(socket) {
		Grid.find(function(err, grids) {
			socket.emit('grids', grids);
		});

		socket.on('save grids', function(grids) {
			var issues = false;

			for (i in grids) {
				if (grid[i].chartName != 'gs-w') {
					grid = new Grid({
						chartName: grid[i].chartName,
						col: grid[i].col,
						row: grid[i].row,
						size_x: grid[i].size_x,
						size_y: grid[i].size_y
					});
					grid.save(function(err) {
						issues = true;
						socket.emit(errors, err);
						console.log("Errors Saving grids");
					});
				}
				if (issues) break;
			}

			if (!issues) {
				socket.emit('completed');
			}
		});
	});
};