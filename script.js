canvasWidth = (screen.width)/100*98
canvasHeight = (screen.height)/100*65

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

var bug = d3.select('#canvas').append('g').attr("id","bug")

var svgContainer = d3.select('#bug').append("svg")
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
  			.attr({x1: 7, y1: 17, x2: 15, y2: 18, stroke: '#000'})
svgContainer.append('line')
  			.attr({x1: 23, y1: 17, x2: 15, y2: 18, stroke: '#000'})
svgContainer.append('line')
			.attr({x1: 7, y1: 23, x2: 15, y2: 23, stroke: '#000'})
svgContainer.append('line')
			.attr({x1: 23, y1: 23, x2: 15, y2: 23, stroke: '#000'})
svgContainer.append('line')
			.attr({x1: 8, y1: 29, x2: 15, y2: 23, stroke: '#000'})
svgContainer.append('line')
			.attr({x1: 22, y1: 29, x2: 15, y2: 23, stroke: '#000'})

function newMove(d) {
	bugX = d3.select("#bug").node().getBBox()["x"] + (d3.select("#bug").node().getBBox()["width"]/2);
	bugY = d3.select("#bug").node().getBBox()["y"] + (d3.select("#bug").node().getBBox()["height"]/2);

	do {
		var newX = Math.floor(Math.random() * canvasWidth);
		var newY = Math.floor(Math.random() * canvasHeight);
		var differenceX = bugX - newX;
		var differenceY = bugY - newY;
	} while (newX < 20 || newX > (canvasWidth)/100*90 || newY < 20 || newY > (canvasHeight)/100*90 || Math.abs(differenceX) < 20 || Math.abs(differenceY) < 20);
	

	var dy = bugY - newY
	var dx = bugX - newX
	var theta = Math.atan2(dx, dy);
  	theta *= 180 / Math.PI;

  	if (Math.sign(dy) != Math.sign(dx)) theta = theta - 90;
  	else theta = -theta;
	
	var translationX = newX - bugX
	var translationY = newY - bugY
	
	audio.play();
	
	d3.select("#bug").transition().attr("transform", "translate(" + translationX + " " + translationY + ")")
	
	setTimeout(function(){
    	audio.pause();
	},500);
	//d3.select(this).attr("transform", "rotate("+ theta + " " + bugX + " " + bugY + ")")
	//				.transition().attr("transform", "rotate("+ theta + " " + bugX + " " + bugY + ") translate(" + newX + " " + newY + ") rotate(0)")
}

d3.select("#bug").on("mouseover", newMove);
