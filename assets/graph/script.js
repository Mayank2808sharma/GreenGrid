google.charts.load("current", {
  packages: ["bar"],
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
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

  var options = {
    chart: {
      title: "Column Chart",
      subtitle: "Average Demand and Electricity Availability",
    },
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
    title: "Average Demand and Electricity Availability",
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
    ["Average demand", "Value Per month"],
    ["January", 31060],
    ["February", 31133],
    ["March", 29018],
    ["April", 27133],
    ["May", 26924],
    ["June", 28374],
    ["July", 30093],
    ["August", 28575],
    ["September", 28329],
    ["October", 27213],
    ["November", 28960],
    ["December", 29530],
  ]);

  var options2 = {
    title: "Average demand",
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
    ["January", 5283],
    ["February", 5281],
    ["March", 5055],
    ["April", 4499],
    ["May", 3876],
    ["June", 4278],
    ["July", 4746],
    ["August", 4402],
    ["September", 4380],
    ["October", 4768],
    ["November", 5082],
    ["December", 5017],
  ]);

  var options3 = {
    title: "Electrical Availability",
    pieHole: 0.3,
    backgroundColor: "#f3f0f0",
  };

  var chart3 = new google.visualization.PieChart(
    document.getElementById("donutchart2")
  );
  chart3.draw(data, options3);
}
