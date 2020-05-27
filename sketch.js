
function setup() {
  createCanvas(400, 400);
}

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
            var mydata = JSON. parse(jokes.json); 
            alert(mydata);
        }

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
