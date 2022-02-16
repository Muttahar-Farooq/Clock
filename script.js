const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');
const toggleSlider = document.getElementById('toggle-slider');

toggleSlider.addEventListener('click', () =>{
    if(toggleSlider.checked){
        document.querySelector('body').classList.add("light");
    } else{
        document.querySelector('body').classList.remove("light");
    }
})

function setClock(){
    currentTime = new Date();
    const secRatio = currentTime.getSeconds() / 60; 
    const minRatio = (currentTime.getMinutes() + secRatio) / 60; 
    const hourRatio = (currentTime.getHours() + minRatio) / 12;
    const secDeg = secRatio * 360; 
    const minDeg = minRatio * 360; 
    const hourDeg = hourRatio * 360;
    setHand(hourHand, hourDeg); 
    setHand(minuteHand, minDeg); 
    setHand(secondHand, secDeg); 
}

function setHand(handElement, handDeg){
    handElement.style.setProperty('--rotation', handDeg);
}

setInterval(setClock, 1000);
setClock();