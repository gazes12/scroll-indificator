const bar =  document.querySelector('.bar');
const indf = document.querySelector('.bar p');

window.addEventListener('scroll', (e) =>{
    const positionScroll = document.documentElement.scrollTop;
    const heightWindow = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const percent = Math.round(positionScroll / heightWindow * 100);
    bar.style.width = percent + '%';
    if(bar.style.width > 0 + '%'){
        indf.innerText = percent + '%';
    }else{
        indf.innerText = null;
    }
})