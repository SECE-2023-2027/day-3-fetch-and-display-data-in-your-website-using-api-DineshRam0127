function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const hourDegrees = (hours * 30) + (minutes * 0.5);
    const minuteDegrees = minutes * 6;
    const secondDegrees = seconds * 6;
    
    document.querySelector('.hour-hand').style.transform = `translate(-50%, -100%) rotate(${hourDegrees}deg)`;
    document.querySelector('.minute-hand').style.transform = `translate(-50%, -100%) rotate(${minuteDegrees}deg)`;
    document.querySelector('.second-hand').style.transform = `translate(-50%, -100%) rotate(${secondDegrees}deg)`;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to set the clock immediately