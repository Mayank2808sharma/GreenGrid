let dailyans = [] 
function check() {
dailyans = [];
  console.log("submitted")
  for (let i = 0; i <24; i++) {
    let currval = Math.floor(Math.random()*3);
   if(currval==0){
    dailyans.push(1);
   }
   if(currval==1){
    dailyans.push(2);
   }
   if(currval==2){
    dailyans.push(3);
    }
  }
}
check();
google.charts.load("current", {
    packages: ["bar"],
  });
  google.charts.setOnLoadCallback(drawChart);
  
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ["Daily", "Load Per Hour"],
      ["00:00 : 01:00", `${dailyans[0]}`],
      ["01:00 : 02:00", `${dailyans[1]}`],
      ["02:00 : 03:00", `${dailyans[2]}`],
      ["03:00 : 04:00", `${dailyans[3]}`],
      ["04:00 : 05:00", `${dailyans[4]}`],
      ["05:00 : 06:00", `${dailyans[5]}`],
      ["06:00 : 07:00", `${dailyans[6]}`],
      ["07:00 : 08:00", `${dailyans[7]}`],
      ["08:00 : 09:00", `${dailyans[8]}`],
      ["09:00 : 10:00", `${dailyans[9]}`],
      ["10:00 : 11:00", `${dailyans[10]}`],
      ["11:00 : 12:00", `${dailyans[11]}`],
      ["12:00 : 13:00", `${dailyans[12]}`],
      ["13:00 : 14:00", `${dailyans[13]}`],
      ["14:00 : 15:00", `${dailyans[14]}`],
      ["15:00 : 16:00", `${dailyans[15]}`],
      ["16:00 : 17:00", `${dailyans[16]}`],
      ["17:00 : 18:00", `${dailyans[17]}`],
      ["18:00 : 19:00", `${dailyans[18]}`],
      ["19:00 : 20:00", `${dailyans[19]}`],
      ["20:00 : 21:00", `${dailyans[20]}`],
      ["21:00 : 22:00", `${dailyans[21]}`],
      ["22:00 : 23:00", `${dailyans[22]}`],
      ["23:00 : 24:00", `${dailyans[23]}`],
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