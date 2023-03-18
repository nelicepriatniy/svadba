
//анимации при скроле
let windowHeight = window.innerHeight;
let animBlocks = document.querySelectorAll('.animate');
let windowScroll = window.scrollY + windowHeight;

function getPosition(element) {
    var yPosition = 0;

    while(element) {
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return yPosition;
}

window.onscroll = ()=>{
    animBlocks.forEach(el=>{
        windowScroll = window.scrollY + windowHeight;
        let topoffset = getPosition(el);
        console.log(windowScroll)
        if(topoffset < windowScroll) {
            el.classList.add('active');
        }
    })
}

animBlocks.forEach(el=>{
    windowScroll = window.scrollY + windowHeight;
    let topoffset = getPosition(el);
    console.log(windowScroll)
    if(topoffset < windowScroll) {
        el.classList.add('active');
    }
})

//переключение табов в портфолио 

let portfolioTabBtns = document.querySelectorAll('.portfolio__list__item');

portfolioTabBtns.forEach(el=>{
    el.onclick = ()=>{
        portfolioTabBtns.forEach(el =>{
            el.classList.remove('active')
        })
        el.classList.add('active')
    }
})