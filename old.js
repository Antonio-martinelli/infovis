canvasWidth = (screen.width)/100*98
canvasHeight = (screen.height)/100*75

d3.select("body").append("h1").text("Catch-A-Bug!")

var audio = new Audio('bug_noise.mp3');

var baseCanvas = d3.select("body")
					.append("svg")
					.attr("id","canvas")
					.attr("width", canvasWidth)
					.attr("height", canvasHeight)
					.attr("border",1)

var canvasBorder = baseCanvas.append("rect")
       			.attr("x", 0)
       			.attr("y", 0)
       			.attr("height", canvasHeight)
       			.attr("width", canvasWidth)
       			.style("stroke", 'black')
       			.style("fill", "none")
       			.style("stroke-width", 1);

do {
	var randX = Math.floor(Math.random() * (canvasWidth));
	var randY = Math.floor(Math.random() * (canvasHeight));
} while (randX < 0 || randX > (canvasWidth)/100*90 || randY < 0 || randY > (canvasHeight)/100*90);

var whole = d3.select('#canvas').append('g').attr("id","whole")

var svgContainer = d3.select('#whole').append("svg")
                                  	.attr("width", 30)
                                    .attr("height", 50)
                                    .attr("x", randX+"px")
									.attr("y", randY+"px")

svgContainer.append("circle")
			.attr("cx", 15)
			.attr("cy", 12)
			.attr("r", 4)
svgContainer.append("ellipse")
			.attr("cx", 15)
            .attr("cy", 22)
            .attr("rx", 5)
            .attr("ry", 10);

svgContainer.append('line')
  			.attr({x1: 7,y1: 17,x2: 15,y2: 18,stroke: '#000'})
svgContainer.append('line')
  			.attr({x1: 23,y1: 17,x2: 15,y2: 18,stroke: '#000'})
svgContainer.append('line')
			.attr({x1: 7,y1: 23,x2: 15,y2: 23,stroke: '#000'})
svgContainer.append('line')
			.attr({x1: 23,y1: 23,x2: 15,y2: 23,stroke: '#000'})
svgContainer.append('line')
			.attr({x1: 8,y1: 29,x2: 15,y2: 23,stroke: '#000'})
svgContainer.append('line')
			.attr({x1: 22,y1: 29,x2: 15,y2: 23,stroke: '#000'})

//var whole = d3.select('#canvas').append('g').attr("id","whole")
/*var bug = d3.select('#whole').append('svg').html('<g><path d="M20.076,52.852c0,0-5.911,1.852-9.416,4.604c0.228,\
														17.387,9.665,38.298,9.665,38.298l-0.466,4.065L21.84,100l-0.265-4.268c0,\
														0,0.61-1.152-0.25-3.119c-0.858-1.969-8.623-22.273-8.969-32.894c2.885-2.327,\
														7.329-4.887,7.329-4.887L20.076,52.852z"/> \
														<path d="M23.583,42.395c0,0-6.891-1.367-11.153-0.896C9.279,47.37,5.896,59.286,\
														5.196,69.604c-0.714,1.053-2.149,2.84-2.149,2.84l1.368,1.022l1.619-3.561c0,0,1.247-0.226\
														,1.429-2.311c0.181-2.086,0.663-12.921,5.112-23.081c3.123-0.041,10.104,0.182,10.104,\
														0.182L23.583,42.395z"/>\
														<path d="M57.006,52.852c0,0,5.91,1.852,9.415,4.604c-0.229,17.387-9.664,\
														38.298-9.664,38.298l0.467,4.065L55.242,100l0.263-4.268c0,0-0.607-1.152,\
														0.252-3.119c0.855-1.969,8.621-22.273,\
														8.969-32.894c-2.885-2.327-7.328-4.887-7.328-4.887L57.006,52.852z"/>\
														<path d="M53.497,42.395c0,0,6.893-1.367,11.154-0.896c3.149,5.872,6.533,\
														17.788,7.232,28.104c0.713,1.053,2.149,2.84,2.149,2.84l-1.368,1.022l-1.62-3.562c0,\
														0-1.246-0.225-1.427-2.31c-0.182-2.086-0.663-12.921-5.113-23.081c-3.121-0.041-10.104,\
														0.182-10.104,0.182L53.497,42.395z"/>\
														<path d="M45.019,85.704c3.889-2.761,8.104-6.558,10.926-15.478c2.826-8.918,\
														1.314-20.81-6.941-34.246c-0.188-9.687-3.16-13.162-3.551-15.146s0.895-4.674,\
														2.658-4.131c2.793,0.856,6.877,4.616,9.969,8.659l-9.88,0.298l0.7,1.989l11.297,\
														0.8c3.06,5.038,14.646,29.946,16.888,\
														49.762c-0.573-20.002-12.877-45.856-15.731-50.58l0.365-0.75c0,0-0.355-12.188-0.418-15.729\
														c-0.056-3.541-0.961-6.051-0.961-6.051l2.035-4.348L60.508,0l-1.101,4.671c0,\
														0-1.252,0.19-0.762,2.386c0.492,2.191,1.176,\
														18.235,1.176,18.235c-3.168-4.526-8.127-9.989-11.688-10.563\
														c-4.129-0.652-7.438,3.442-7.438,3.442h-4.31c0,0-3.309-4.096-7.438-3.442c-3.562,0.574-8.521,\
														6.037-11.688,10.563c0,0,0.683-16.044,1.175-18.235c0.492-2.193-0.761-2.386-0.761-2.386L16.571,\
														0l-1.864,0.754l2.035,4.348c0,0-0.904,2.512-0.961,6.051c-0.059,3.543-0.419,15.729-0.419,\
														15.729l0.367,0.75C12.875,32.355,0.569,58.21,0,78.213c2.239-19.814,13.827-44.725,\
														16.885-49.762L28.18,27.65l0.702-1.987l-9.877-0.298\
														c3.09-4.043,7.176-7.803,9.97-8.659c1.763-0.543,\
														3.048,2.146,2.657,4.131c-0.391,1.983-3.364,5.459-3.551,15.146c-8.258,13.438-9.768,25.328-6.944,\
														34.246c2.825,8.92,7.039,12.717,10.928,\
														15.478c3.891,2.76,6.466,8.662,6.466,8.662S41.128,88.464,45.019,85.704z"/></g>')
				.attr("x", randX+"px")
				.attr("y", randY+"px")*/

wholeX = d3.select("#whole").node().getBBox()["x"] + (d3.select("#whole").node().getBBox()["width"]/2);
wholeY = d3.select("#whole").node().getBBox()["y"] + (d3.select("#whole").node().getBBox()["height"]/2);
//wholeX = d3.select("#whole").node().getBoundingClientRect()["left"] + (d3.select("#whole").node().getBoundingClientRect()["width"]/2);
//wholeY = d3.select("#whole").node().getBoundingClientRect()["top"] + (d3.select("#whole").node().getBoundingClientRect()["height"]/2);

//d3.select('#whole').attr("transform", "scale(0.4)")

function newMove(d) {
	do {
		var newX = Math.floor(Math.random() * canvasWidth);
		var newY = Math.floor(Math.random() * canvasHeight);
	} while (newX < 20 || newX > (canvasWidth)/100*90 || newY < 20 || newY > (canvasHeight)/100*90);
	
	wholeX = d3.select("#whole").node().getBBox()["x"] + (d3.select("#whole").node().getBBox()["width"]/2);
	console.log("vecchia X: " + wholeX + " nuova X: " + newX)
	
	wholeY = d3.select("#whole").node().getBBox()["y"] + (d3.select("#whole").node().getBBox()["height"]/2);
	console.log("vecchia Y: " + wholeY + " nuova Y: " + newY)
	

	var dy = wholeY - newY
	var dx = wholeX - newX
	var theta = Math.atan2(dx, dy);
  	theta *= 180 / Math.PI;
  	console.log(theta)
  	if (Math.sign(dy) != Math.sign(dx)) theta = theta - 90;
  	else theta = -theta;
	console.log("angolo: " + theta)
	var translationX = newX - wholeX
	var translationY = newY - wholeY
	audio.play();
	d3.select("#whole").transition().attr("transform", "translate(" + translationX + " " + translationY + ")")
	setTimeout(function(){
    audio.pause();
	},500);
	//d3.select(this).attr("transform", "rotate("+ theta + " " + wholeX + " " + wholeY + ")")
	//				.transition().attr("transform", "rotate("+ theta + " " + wholeX + " " + wholeY + ") translate(" + newX + " " + newY + ") rotate(0)")

}

function moveInsect(d) {wholeX = d3.select("#whole").node().getBBox()["x"] + (d3.select("#whole").node().getBBox()["width"]/2);
	do {
		var newX = Math.floor(Math.random() * (canvasWidth*2));
		var newY = Math.floor(Math.random() * (canvasHeight*2));
	} while (newX < 30 || newX > 1230 || newY < 30 || newY > 550);
	console.log("vecchia X: " + wholeX + " nuova X: " + (newX/0.4))
	wholeY = d3.select("#whole").node().getBBox()["y"] + (d3.select("#whole").node().getBBox()["height"]/2);
	console.log("vecchia Y: " + wholeY + " nuova Y: " + (newY/0.4))
	d3.select('#canvas').append('circle')
		.attr("cx", newX+"px")
		.attr("cy", newY+"px")
		.attr("r", "2px")
	
	var dy = wholeY - (newY/0.4)
	var dx = wholeX - (newX/0.4)
	var theta = Math.atan2(dx, dy);
  	theta *= 180 / Math.PI;
  	console.log(theta)
  	if (Math.sign(dy) != Math.sign(dx)) theta = theta -90;
  	else theta = -theta;
	console.log("angolo: " + theta)
	var translationX = (newX/0.4) - wholeX
	var translationY = (newY/0.4) - wholeY
	d3.select(this).attr("transform", "rotate("+ theta + " " + wholeX + " " + wholeY + ")")
					.transition().attr("transform", "rotate("+ theta + " " + wholeX + " " + wholeY + ") translate(" + newX/0.4 + " " + newY/0.4 + ") rotate(0)")
};


d3.select("#whole").on("mouseover", newMove);


