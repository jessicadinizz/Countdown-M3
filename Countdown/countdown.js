const callCountdown = () => {
    const pageCountdown = document.querySelector('.countdown-page-wrapper');
    let countdownStructure = '';



    countdownStructure = `

    <div class="countdown-wrapper">
    <div class="countdown-timer">
        <span class="countdown-days"></span>
        <span class="dots">:</span>
        <span class="classifications">Dias</span>
        <span class="countdown-hours"></span>
        <span class="dots">:</span>
        <span class="classifications">Horas</span>
        <span class="countdown-minutes"></span>
        <span class="dots">:</span>
        <span class="classifications">Minutos</span>
        <span class="countdown-seconds"></span>
        <span class="classifications">Segundos</span>

    </div>

    <div class="countdown-input-wrapper">
        <input class="countdown-input" type="datetime-local"/>
    </div>

    <div class="countdown-alert-wrapper">
    <span class="countdown-alert">Por favor, preencha os campos!</span>
    </div>

    <div class="countdown-button-wrapper">
        <button class="countdown-button">Começar</button>
    </div>
</div>

    
    
    `


    pageCountdown.innerHTML =   countdownStructure;

}

export default callCountdown;