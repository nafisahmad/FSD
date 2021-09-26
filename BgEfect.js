const banner = document.getElementsByClassName('banner')[0]
const blocks = document.getElementsByClassName('blocks')

for (var i = 1; i<400; i++){
    banner.innerHTML += "<div class='blocks'></div>";
    blocks[i].style.animationDelay=`${i*0.01}s`;
}