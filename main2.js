var launchSession = document.getElementById('start');
launchSession.addEventListener("click", launchtimer);

function showTime (hours, minutes, seconds){
  document.getElementById('H').innerHTML = formatInt(hours,2);
  document.getElementById('M').innerHTML = formatInt(minutes,2);
  document.getElementById('S').innerHTML = formatInt(seconds,2);
}

function launchtimer (){
  var hours = document.getElementById('hour').value;
  var minutes = document.getElementById('minute').value;
  var seconds = document.getElementById('second').value;
  
  showTime(hours, minutes, seconds);

  var hoursMs = hours * 3600000;
  var minutesMs = minutes * 60000;
  var secondsMs = seconds * 1000;
  var currentDateMs = Date.parse(new Date());
  var resultDateMs = currentDateMs + hoursMs + minutesMs + secondsMs;
  var diffDateMs = resultDateMs - currentDateMs;

  var timeInterval = setInterval (function (){
    
    if (resultDateMs===currentDateMs){
      showTime(0,0,0)
    } else {
      diffDateMs -= 1000;
    }

    var resultHours = Math.floor( (diffDateMs/(1000*60*60)) % 24 );
    var resultMinutes = Math.floor( (diffDateMs/1000/60) % 60 );
    var resultSeconds = Math.floor( (diffDateMs/1000) % 60 );

    showTime(resultHours, resultMinutes, resultSeconds);

    if(diffDateMs===0){
      clearInterval(timeInterval);
    }
    // console.log(resultSeconds);
  },1000);
}

function formatInt(time, size){
  if( !time || isNaN(time) ) time = 0;
  var count = (time>0) ? Math.log10(time) : 0;
  var result = "";
  for (var i = 0; i < size-count-1; i++) result += "0";
  console.log("["+time+"] "+count);
  return result+time;
}
