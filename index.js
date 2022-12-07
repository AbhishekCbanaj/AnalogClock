
const SecondsHand = document.getElementById('second');
const MinutesHand = document.getElementById('minute');
const Hourshand = document.getElementById('hours');



function getTime()
{

  const now = new Date();

  const seconds = now.getSeconds();
  SecondsHand.style.transform = `rotate(${seconds*6}deg)`;

  const mins = now.getMinutes();
  MinutesHand.style.transform = `rotate(${mins*6}deg)`;

  const hour = now.getHours(); 
  Hourshand.style.transform = `rotate(${hour *30}deg)`;
  

}

    setInterval(getTime, 1000);

getTime();

