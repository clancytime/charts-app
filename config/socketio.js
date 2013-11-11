module.exports = function(io, mongoose) {
	var Grid = mongoose.model('Grid');

	io.sockets.on('connection', function(socket) {
		Grid.find(function(err, grids) {
			socket.emit('grids', grids);
		});

		socket.on('save grids', function(grids) {
			var issues = false;

			for (i in grids) {
				if (grids[i].chartName != 'gs-w') {
					grid = new Grid({
						chartName: grids[i].chartName,
						col: grids[i].col,
						row: grids[i].row,
						size_x: grids[i].size_x,
						size_y: grids[i].size_y
					});
					grid.save(function(err) {
						if (err) {
							issues = true;
							socket.emit('errors', err);
							console.log("Errors Saving grids");
						}
					});
				}
				if (issues) break;
			}

			if (!issues) {
				socket.emit('completed');
			}
		});

		socket.on('remove grids', function() {
			Grid.find(function(err, grids) {
				for (i in grids) {
					grids[i].remove(function(err, grid) {});
				}
			});
			socket.emit('completed');
		});
	});
};