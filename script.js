/*$(document).ready(function() {

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
        console.log(value);
        var realresults = value * json.value * .01;
        console.log(realresults);
        var results = "";
        results += '<h2>' + json.text + "</h2>";
        realresults = "<h2>" + value + " dollars is equivalent to " + realresults.toPrecision(4) + " euros</h2>";
          $("#dollarResults").html(realresults);
          //console.log(results);

        }
    });
  });
});*/

var app = new Vue({
  el: '#app',
  data:{
    inputvalue: '',
    exchange: '',
    finalresults: '',
    //results: {},
    //number: 0,

  }
  methods:{
    inputDollars:function()
    {
      this.exchange = json.value;
      this.finalresults = this.inputvalue * this.exchange * .01;
      consol.log(finalresults);
      return finalresults;
      //Vue.set(app.results, this.number, new Array);
      //this.results[this.number].push({euros: this.finalresults});
      //this.number = this.number +1;
      //this.inputvalue: '';
    }
  }
})
