const callHeader = () => {
    const pageHeader = document.querySelector('.page-header');
    let headerStructure = '';

    headerStructure = `
    
    <div class= "header-logo-wrapper">
    
    <img class= "header-logo" src="././assets/images/m3-logo.png">

    </div>
    
    
    `

    pageHeader.innerHTML = headerStructure;

}

export default callHeader;