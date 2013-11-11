var socket = io.connect(null);
socket.on('news', function (data) {
	console.log(data);
});