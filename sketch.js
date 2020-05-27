/*function preload() {
	var myurl='http://api.openweathermap.org/data/2.5/weather?q=London&appid=785085d80ee071e7cf776e9e8aee30f4&units=metric';
	var myweather = loadJSON(myurl);
	console.log(myweather);
}*/
//var weather;


function setup() {
  createCanvas(400, 400);
/*  url='https://api.jokes.one/jod?category=animal&ID=MDStJNS1Onh8RnBrLdq_PweF';
  loadJSON(url, gotData,'jsonp');
  */
}


/*
function gotData(data) {
    console.log("Hello");
    //myweather = data;
    console.log (data);
    createElement('h1',"The temperature in London now is " + data.main.temp);
    console.log ("The temperature in London now is " + data.main.temp);
  }
  */

//gotData();
function get_joke_of_the_day() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       // Access the result here
       console.log(this);
       console.log(this.responseText);
       var data = JSON.parse(this.responseText);
       console.log(data);
       console.log(data.contents.jokes[0].clean);
       console.log(data.contents.jokes[0].title);
       console.log(data.contents.jokes[0].text);
       if(data.contents.jokes[0].clean==1){
        createP(data.contents.jokes[0].title);
        createP(data.contents.jokes[0].text);
       } else{
          alert("Please try again!");
          //read local file
          var txt = 'junk';
          var xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange = function(){
          if(xmlhttp.status == 200 /*&& xmlhttp.readyState == 4)*/{
            txt = xmlhttp.responseText;
          }
        };
        xmlhttp.open("GET","https://github.com/vasco0372/g_j_bot",true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xmlhttp.send(); 
        var joketxt = JSON.parse();
        alert(joketxt);
//local file read
       }
       

       //var data = JSON.parse("thisresponse" + this.responseText);
       //console.log("data "+ data);

// Get the first item
 //       var firstPost = data[0];
      }
    };
    xhttp.open("GET", "https://api.jokes.one/joke/random", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("X-JokesOne-Api-Secret", "MDStJNS1Onh8RnBrLdq_PweF");
    xhttp.send();
}

// Convert data string to an object


get_joke_of_the_day()

function draw() {
  background(200);
  fill(255,0,0);
  ellipse(200,100,25,35);
  rect(100,300,200,80,20);
}