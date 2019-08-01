function randomLink(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function easter() {
  var myLinks = ["https://www.youtube.com/channel/UCgRLigeCsj-QCNLvsjYZ11Q", "https://soundcloud.com/notlavish/sets/o-o", "https://twitter.com/NootLavish"];
  var result = randomLink(myLinks);
  document.getElementById("easter").setAttribute("href", result);
}

function eightBall() {
  var question = prompt("What do you want to ask the Magic 8 Ball");
  var answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
  var result = randomLink(answers);
  alert(result);
}

function clock() {
  var time = new Date();
  var hrs = time.getHours();
  var min = time.getMinutes();
  var am_pm = ' am';

  // checks if it's pm
  if (hrs > 12) {
    hrs -= 12;
    am_pm = ' pm';
  }

  //checks if it's midnight
  if (hrs == 0) {
    hrs = 12;
  }

  //checks if it's under ten and add a zero
  if (hrs < 10) {
    hrs = '0' + hrs;
  }

  //checks if it's under ten and add a zero
  if (min < 10) {
  min = '0' + min;
  }
  document.getElementById("clock").innerHTML = hrs + ":" + min + am_pm;
}

easter()
setInterval(clock, 500)
