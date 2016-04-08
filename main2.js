

var timeInput = document.getElementById('request');
timeInput.addEventListener("submit", addtime);

function addtime (){
  var hours = document.getElementById('hour').value;
  var minutes = document.getElementById('minute').value;
  var seconds = document.getElementById('second').value;

  document.getElementById('H').innerHTML = formatInt(hours,2);
  document.getElementById('M').innerHTML = formatInt(minutes,2);
  document.getElementById('S').innerHTML = formatInt(seconds,2);
}

var launchSession = document.getElementById('start');
launchSession.addEventListener("click", launchtimer);

function launchtimer (){

  var hours = document.getElementById('hour').value;
  var minutes = document.getElementById('minute').value;
  var seconds = document.getElementById('second').value;

  if (hours===""){
    hours=0;
  }

  if (minutes===""){
    minutes=0;
  }

  if (seconds===""){
    seconds=0;
  }

  var hoursMs = hours * 3600000;
  var minutesMs = minutes * 60000;
  var secondsMs = seconds * 1000;
  var currentDateMs = Date.parse(new Date());
  var resultDateMs = currentDateMs + hoursMs + minutesMs + secondsMs;
  var diffDateMs = resultDateMs - currentDateMs;

  var timeInterval = setInterval (function (){
    
    var i=1000;
    if (resultDateMs===currentDateMs){
      document.getElementById('H').innerHTML='00';
      document.getElementById('M').innerHTML='00';
      document.getElementById('S').innerHTML='00';
    } else {
      diffDateMs -= i;
    }

    var resultHours = Math.floor( (diffDateMs/(1000*60*60)) % 24 );
    var resultMinutes = Math.floor( (diffDateMs/1000/60) % 60 );
    var resultSeconds = Math.floor( (diffDateMs/1000) % 60 );

    document.getElementById('H').innerHTML = formatInt(resultHours, 2);
    document.getElementById('M').innerHTML = formatInt(resultMinutes, 2);
    document.getElementById('S').innerHTML = formatInt(resultSeconds, 2);

    if(resultSeconds<10){
      document.getElementById('S').innerHTML='0'+resultSeconds;
    }
    else{document.getElementById('S').innerHTML=resultSeconds;
    }

    if(diffDateMs===0){
      clearInterval(timeInterval);
    }
    // console.log(resultSeconds);
  },1000);
}

function formatInt(time, size){
  var count = (count>0) ? Math.log10(time) : 0;
  var result = "";
  for (var i = 0; i < size-count-1; i++) result += "0";
  return result+time;
}
