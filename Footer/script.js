const callfooter = () => {
    const footer = document.querySelector('.pageFooter');
    let footerstructure = '';

    footerstructure = `

        <div class="footer-link-wrapper">
        <a target="_blank" href="https://www.digitalm3.com.br" class="footer-link">www.digitalm3.com.br</a>
        </div>


        <div class="footer-images-wrapper">

            <a target="_blank" href="https://www.facebook.com/digitalm3">
                <img class="m3-facebook-desktop" src="././assets/images/footer-facebook.png"> 
                <img class="m3-facebook-mobile" src="././assets/images/m3-facebook-mobile.png"> 
            </a>

            <a target="_blank" href="https://www.instagram.com/m3.ecommerce/">
                <img target="_blank" class="m3-instagram-desktop" src="././assets/images/footer-instagram.png"> 
                <img target="_blank" class="m3-instagram-mobile" src="././assets/images/m3-instagram-mobile.png"> 
            </a>

            <a target="_blank" href="https://www.linkedin.com/company/m3ecommerce/">
                <img target="_blank" class="m3-linkedin-desktop" src="././assets/images/footer-linkedin.png"> 
                <img target="_blank" class="m3-linkedin-mobile" src="././assets/images/m3-linkedin-mobile.png"> 
            </a>

            </div>
       
    `

    footer.innerHTML = footerstructure;
}

export default callfooter;