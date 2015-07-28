
onmessage = function(e) {
	var storyId = e.data.storyId;
	//var title = e.data.title;
	//var score = e.data.score;
	var height = e.data.height;
	var bodyStart = e.data.bodyStart;
	var scoreStart = e.data.scoreStart;
	var storyStyling = {};

	// Base the scale on the y position of the score.
	var scoreLocation = scoreStart - bodyStart;
	var scale = Math.min(1, 1 - (0.05 * ((scoreLocation - 170) / height)));

	// Cache style parameters
	storyStyling['scoreDiameter'] = (scale * 40) + 'px';
	storyStyling['scoreLineHeight'] = storyStyling['scoreDiameter'];
	storyStyling['opacity'] =
        Math.min(1, 1 - (0.5 * ((scoreLocation - 170) / height)));
	// Now figure out how wide it is and use that to saturate it.
	var saturation = (100 * ((storyStyling['scoreDiameter'] - 38) / 2));
	storyStyling['scoreBackgroundColor'] = 'hsl(42, ' + saturation + '%, 50%)';
	postMessage({
		'id': storyId,
		//'title': title,
		//'score': score,
		'style': storyStyling
	});
};
