$(document).ready(function() {

  $("#dollarSubmit").click(function(e) {
    e.preventDefault();
    var value = $("#dollarInput").val();
    console.log(value);
    //var myurl= "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=02bb460b565437c548461ffeb5096463";
    var myurl = "https://forex.1forge.com/1.0.3/convert?from=USD&to=EUR&quantity=100&api_key=gcxJa9CzXHalcOPPMY31oJ6u9Egl772k"
    $.ajax({
        url : myurl,
        dataType : "json",
        success : function(json) {
        console.log(json);
        var results = "";
        results += '<h2>' + json.text + "</h2>";
        /*for (var i=0; i<json.weather.length; i++) {
             results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
         }
         results += '<h2>' + json.main.temp + " &deg;F</h2>"
         results += "<p>"
         for (var i=0; i<json.weather.length; i++) {
            results += json.weather[i].description
            if (i !== json.weather.length - 1)
            results += ", "
          }
          results += "</p>";*/
          $("#dollarResults").html(results);

        }
    });
  });
});
