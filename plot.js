var svgH = 500;
var svgW = 500;

//to get the parabola to point upwards, the y axis values must be multiplied by -1
var dataSet = [[0,0], [1,-1], [-1,-1], [2,-4], [-2,-4], [3,-9], [-3,-9]];

var xScale = d3.scale.linear()
  .domain([-10, 10])
  .range([0, svgW]);

var yScale = d3.scale.linear()
  .domain([-10, 10])
  .range([0, svgH]);

//create the svg
var svg = d3.select('body')
  .append('svg')
  .attr('width', svgW+50)
  .attr('height', svgH+50)
  .append('svg:g') //"svg:g" --> the g here is the group element. It is used to group svg elements together.
  .attr('transform', 'translate(30,30)'); //

//Create and append the circles
svg.selectAll('circle')
  .data(dataSet)
  .enter()
    .append('circle')
    .attr('cx', function(d) {
      return xScale(d[0]);
    })
    .attr('cy', function(d) {
      return yScale(d[1]);
    })
    .attr('r', 5);

//Append the axes
svg.append('svg:g')
  .attr('class', 'xaxis')
  .attr('class', 'yaxis');

var xAxis = d3.svg.axis() //svg.axis() is a d3 method!
  .scale(xScale)
  .orient('center')
  .tickSize(1);

var yAxis = d3.svg.axis()
  .scale(yScale)
  .orient('left')
  .tickSize(1);

svg.append('svg:g')
  .attr('class', 'xaxis')
  .attr('transform', 'translate(0, ' + svgW + ')')
  .call(xAxis);

svg.append('svg:g')
  .attr('class', 'yaxis')
  .call(yAxis);
