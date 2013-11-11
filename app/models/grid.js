var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    _ = require('underscore');

var gridSchema = new Schema({
	chartName: String,
	col: Number,
	row: Number,
	size_x: Number,
	size_y: Number
});

var Grid = mongoose.model('Grid', gridSchema);