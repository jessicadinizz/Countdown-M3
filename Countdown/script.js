const callcountdowntimer = () => { 
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const send = document.querySelector('.countdown-button'); 

 
    
        function countdownTimer(){
    
            
            let timeOut = setInterval(() => {
                const finalDate = document.querySelector('.countdown-input');
                const finalDateValue = finalDate.value;

                    if(finalDateValue !== '') {
                        let selectedDate = new Date(finalDateValue).getTime(); 
                        let actualDate = new Date().getTime(); 
                        let difference = selectedDate - actualDate; 

                        if(difference <= 0) {
                            clearInterval(timeOut);
                            document.querySelector('.countdown-days').innerHTML = '00';
                            document.querySelector('.countdown-hours').innerHTML = '00';
                            document.querySelector('.countdown-minutes').innerHTML = '00';
                            document.querySelector('.countdown-seconds').innerHTML = '00';

                        } else {
                            document.querySelector('.countdown-days').innerHTML = Math.floor(difference / day); 
                            document.querySelector('.countdown-hours').innerHTML = Math.floor(difference % day / hour);
                            document.querySelector('.countdown-minutes').innerHTML = Math.floor(difference % hour / minute);
                            document.querySelector('.countdown-seconds').innerHTML = Math.floor(difference % minute / second);
                            
                            saveDataLocalStorage();
                            saveDateLocalStorage();
                        }

                     if(difference < 0){
                        clearInterval(timeOut)
                        alert('Por favor, preencha os campos corretamente!');
                     }
                }

            }, second); 
        }

        send.addEventListener("click", countdownTimer);

    function saveDateLocalStorage() {
        const localStorageDate = document.querySelector('.countdown-input').value;
        localStorage.setItem("days", localStorageDate);
    }

    function saveDataLocalStorage() {
        const localStorageDays = document.querySelector('.countdown-days').innerHTML;
        const storedDays = parseInt(localStorageDays);

        const localStorageHours = document.querySelector('.countdown-hours').innerHTML;
        const storedHours = parseInt(localStorageHours);

        const localStorageMinutes = document.querySelector('.countdown-minutes').innerHTML;
        const storedMinutes = parseInt(localStorageMinutes);

        const localStorageSeconds = document.querySelector('.countdown-seconds').innerHTML;
        const storedSeconds = parseInt(localStorageSeconds);

        localStorage.setItem("day", storedDays);
        localStorage.setItem("hour", storedHours);
        localStorage.setItem("minute", storedMinutes);
        localStorage.setItem("second", storedSeconds)
    }

    onload = function showDataLocalStorage() {
        const date = localStorage.getItem("days");
        const day = localStorage.getItem("day");
        const hours = localStorage.getItem("hour");
        const minutes = localStorage.getItem("minute");
        const seconds = localStorage.getItem("second");
        
        if(day === null && hours === null && minutes === null && seconds === null) {
            document.querySelector('.countdown-days').innerHTML = '00';
            document.querySelector('.countdown-hours').innerHTML = '00';
            document.querySelector('.countdown-minutes').innerHTML = '00';
            document.querySelector('.countdown-seconds').innerHTML = '00';
        } else {
            document.querySelector('.countdown-input').value = date ;
            document.querySelector('.countdown-days').innerHTML = day;
            document.querySelector('.countdown-hours').innerHTML = hours;
            document.querySelector('.countdown-minutes').innerHTML = minutes;
            document.querySelector('.countdown-seconds').innerHTML = seconds;
        }
        countdownTimer();
    }
}
export default callcountdowntimer;