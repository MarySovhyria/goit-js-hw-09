import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

let date = new Date();
const start = document.querySelector('[data-start]');
start.disabled = true;
const daysT = document.querySelector('[data-days]');
const hoursT = document.querySelector('[data-hours]');
const minutesT = document.querySelector('[data-minutes]');
const secondsT = document.querySelector('[data-seconds]');

const fp = flatpickr('#datetime-picker', {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    
    minuteIncrement: 1,
    onClose(selectedDates) {
        
      if (selectedDates[0].getTime() <  date.getTime()) {
        
        Notiflix.Notify.warning('Please choose a date in the future');
        return;
      };
      start.disabled = false;
      start.addEventListener('click', () => {
    const timeId = setInterval(function() {
     date = new Date();
     const left =selectedDates[0].getTime() - date.getTime();
     if (left <= 0 || left < 0) {
        console.log('finish');
        return;
     }
     convertMs(left);
     
    }, 1000)
})
  },
});





function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
     const days= Math.floor(ms / day);
     daysT.textContent = addLeadingZero(days);
    // Remaining hours
     const hours = Math.floor((ms % day) / hour);
     hoursT.textContent = addLeadingZero(hours);
    // Remaining minutes
     const minutes = Math.floor(((ms % day) % hour) / minute);
     minutesT.textContent = addLeadingZero(minutes);
    // Remaining seconds
      const seconds= Math.floor((((ms % day) % hour) % minute) / second);
      secondsT.textContent  = addLeadingZero(seconds);
  }

  function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
  }
