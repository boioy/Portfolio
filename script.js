function toggleMenu(){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    
    //Wenn Menu oder Element aus der Liste geklickt wird, soll Menu geschlossen werden
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}