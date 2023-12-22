let startBtn = document.getElementById('start'); 
let stopBtn = document.getElementById('stop'); 
let resetBtn = document.getElementById('reset'); 
let lapbtn=document.getElementById('lap');
  
let hour = 00; 
let minute = 00; 
let second = 00; 
let count = 00; 
  
startBtn.addEventListener('click', function () { 
    timer = true; 
    stopWatch(); 
}); 
  
stopBtn.addEventListener('click', function () { 
    timer = false; 
}); 
  
resetBtn.addEventListener('click', function () { 
    timer = false; 
    document.getElementById('hr').innerHTML = "00"; 
    document.getElementById('min').innerHTML = "00"; 
    document.getElementById('sec').innerHTML = "00"; 
    document.getElementById('count').innerHTML = "00"; 
}); 
lapbtn.addEventListener("click",function(){
    lap();
})
  
function stopWatch() { 
    if (timer) { 
        count++; 
  
        if (count == 100) { 
            second++; 
            count = 0; 
        } 
  
        if (second == 60) { 
            minute++; 
            second = 0; 
        } 
  
        if (minute == 60) { 
            hour++; 
            minute = 0; 
            second = 0; 
        } 
  
        let hrString = hour; 
        let minString = minute; 
        let secString = second; 
        let countString = count; 
  
        if (hour < 10) { 
            hrString = "0" + hrString; 
        } 
  
        if (minute < 10) { 
            minString = "0" + minString; 
        } 
  
        if (second < 10) { 
            secString = "0" + secString; 
        } 
  
        if (count < 10) { 
            countString = "0" + countString; 
        } 
  
        document.getElementById('hr').innerHTML = hrString; 
        document.getElementById('min').innerHTML = minString; 
        document.getElementById('sec').innerHTML = secString; 
        document.getElementById('count').innerHTML = countString; 
        setTimeout(stopWatch, 10); 
    } 
}

function lap() {
    const lapTime = formatTime(hour) + ":" + formatTime(minute) + ":" + formatTime(second);
    const lapList = document.getElementById("laps");
    const lapItem = document.createElement("li");
    lapItem.innerText = lapTime;
    lapList.appendChild(lapItem);
}

function updateTime() {
    second++;
    if (second === 60) {
        second = 0;
        minute++;
        if (minute === 60) {
            minute= 0;
            hour++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("time").innerText = formatTime(hour) + ":" + formatTime(minute) + ":" + formatTime(second);
}

function formatTime(value) {
    return value < 10 ? "0" + value : value;
}
