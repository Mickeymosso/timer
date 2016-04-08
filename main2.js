

var timeInput = document.getElementById('request');
timeInput.addEventListener("submit", addtime);

function addtime (){

  var hours = document.getElementById('hour').value;
  var minutes = document.getElementById('minute').value;
  var seconds = document.getElementById('second').value;

  if (hours<10){
    document.getElementById('H').innerHTML='0'+hours+':';
  }
  else{document.getElementById('H').innerHTML=hours+':';
}

if (minutes<10){
  document.getElementById('M').innerHTML='0'+minutes+':';
}
else{document.getElementById('M').innerHTML=minutes+':';
}

if (seconds<10){
  document.getElementById('S').innerHTML='0'+seconds;
}
else{document.getElementById('S').innerHTML=seconds;
}

if (hours===""){
  document.getElementById('H').innerHTML='00'+':';
}

if (minutes===""){
  document.getElementById('M').innerHTML='00'+':';
}

if (seconds===""){
  document.getElementById('S').innerHTML='00';
}
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
      document.getElementById('H').innerHTML='00'+':';
      document.getElementById('M').innerHTML='00'+':';
      document.getElementById('S').innerHTML='00';
    } else
    {
      diffDateMs -= i;
    }

    var resultHours = Math.floor( (diffDateMs/(1000*60*60)) % 24 );
    var resultMinutes = Math.floor( (diffDateMs/1000/60) % 60 );
    var resultSeconds = Math.floor( (diffDateMs/1000) % 60 );

    if(resultHours<10){
      document.getElementById('H').innerHTML='0'+resultHours+':';
    }
    else{document.getElementById('H').innerHTML=resultHours+':';
  }

  if(resultMinutes<10){
    document.getElementById('M').innerHTML='0'+resultMinutes+':';
  }
  else{document.getElementById('M').innerHTML=resultMinutes+':';
}

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
