//time elements
const hourElement = document.getElementById('hour');
const minuteElement = document.getElementById('min');

//date elements
const weekElement = document.getElementById('week-day');
const dayElement = document.getElementById('day');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');

const weekDays = ["Sunday","Monday","Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
const months = ["January","February", "March", "April", "May","June","July","August", "September", "October", "November", "December"]


const setTime = () =>{
    const time = new Date ();
    let hours = time.getHours();
    let minutes = time.getMinutes();

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    
    hourElement.textContent = hours;
    minuteElement.textContent = minutes;
}

const setDate = () =>{
    const date = new Date ();

    const dayOfTheWeek = date.getDay();
    const monthIndex = date.getMonth();

    weekElement.textContent = weekDays[dayOfTheWeek];
    dayElement.textContent = date.getDate();
    monthElement.textContent = months[monthIndex]
    yearElement.textContent = date.getFullYear()
}


const timeForAnalogicClock = () =>{
    const hands = new Date();
    let hours = hands.getHours();
    let minutes = hands.getMinutes();
    let seconds = hands.getSeconds();

    const hoursRotate = (hours % 12) * 30 + minutes * 0.5
    //cada vez que pasa 60 min
    //La manecilla de las horas da una vuelta cada 12 horas.
    //12 horas → 360° → cada hora = 30°
    // //Grados= Horas transcurridas × 30°
    // //Grados= 3horas×30°=90°

    const minutesRotate = minutes * 6 + seconds * 0.1;
    // cada vez que pasa 60 seg
    //1 segundo = 1/60 de minuto.
    //La manecilla de los minutos da una vuelta cada 60 minutos.
    //60 minutos → 30° → cada minuto = 6
   // Grados recorridos=Minutos pasados × 6

    const secondRotate = seconds * 6;
   // La manecilla de los segundos da una vuelta cada 60 segundos.
    //Grados recorridos=Segundos pasados×6

    document.documentElement.style.setProperty('--hours-rotate', `rotate(${hoursRotate}deg)`);
    document.documentElement.style.setProperty('--minutes-rotate', `rotate(${minutesRotate}deg)`);
    document.documentElement.style.setProperty('--seconds-rotate', `rotate(${secondRotate}deg)`);
}


setInterval(setTime, 1000);
setInterval(timeForAnalogicClock, 1000);
setTime();
setDate()
timeForAnalogicClock()