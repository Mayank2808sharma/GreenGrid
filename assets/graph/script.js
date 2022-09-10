google.charts.load("current", {
  packages: ["bar"],
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Months", "Average demand", "Electrical Availability"],
    ["00:00 : 02:00", 29460, 7882],
    ["02:00 : 04:00", 24629, 11715],
    ["04:00 : 06:00", 23474, 12869],
    ["06:00 : 08:00", 25592, 10751],
    ["08:00 : 10:00", 31274, 5069],
    ["10:00 : 12:00", 34271, 2072],
    ["12:00 : 14:00", 34363, 1980],
    ["14:00 : 16:00", 33033, 3310],
    ["16:00 : 18:00", 32140, 4208],
    ["18:00 : 20:00", 34559, 1784],
    ["20:00 : 22:00", 36244, 109],
    ["22:00 : 24:00", 33627, 2715],
  ]);

  var options = {
    bars: "vertical",
    vAxis: { format: "decimal" },
    height: 400,
    colors: ["#1b9e77", "#d95f02"],
    backgroundColor: "#f3f0f0",
  };

  var chart = new google.charts.Bar(document.getElementById("chart_div"));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}
// //////////////////////////////////////////////////////////////////////////////////
// line graph
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart1);
function drawChart1() {
  var data = google.visualization.arrayToDataTable([
    ["Months", "Average demand", "Electrical Availability"],
    ["January", 31060, 5283],
    ["February", 31133, 5281],
    ["March", 29018, 5055],
    ["April", 27133, 4499],
    ["May", 26924, 3876],
    ["June", 28374, 4278],
    ["July", 30093, 4746],
    ["August", 28575, 4402],
    ["September", 28329, 4380],
    ["October", 27213, 4768],
    ["November", 28960, 5082],
    ["December", 29530, 5017],
  ]);

  var options1 = {
    curveType: "function",
    legend: { position: "bottom" },
    backgroundColor: "#f3f0f0",
  };

  var chart1 = new google.visualization.LineChart(
    document.getElementById("curve_chart")
  );

  chart1.draw(data, options1);
}
// /////////////////////////////////////////////////////////
//
// donut chart for the demand part
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart2);
function drawChart2() {
  var data = google.visualization.arrayToDataTable([
    ["Average demand", "Value Per Day"],
    ["Morning", 30963],
    ["Noon", 33442],
    ["Evening", 33347],
    ["Night", 28648],
  ]);

  var options2 = {
    pieHole: 0.3,
    backgroundColor: "#f3f0f0",
  };

  var chart2 = new google.visualization.PieChart(
    document.getElementById("donutchart1")
  );
  chart2.draw(data, options2);
}

// pie chart for the availability part
//
google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart3);
function drawChart3() {
  var data = google.visualization.arrayToDataTable([
    ["Average demand", "Value Per month"],
    ["Morning", 6319],
    ["Noon", 3222],
    ["Evening", 1603],
    ["Night", 7116],
  ]);

  var options3 = {
    pieHole: 0.3,
    backgroundColor: "#f3f0f0",
  };

  var chart3 = new google.visualization.PieChart(
    document.getElementById("donutchart2")
  );
  chart3.draw(data, options3);
}
