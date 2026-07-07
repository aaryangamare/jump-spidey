score = 0;
cross = true;
const webShot = new Audio('spider_man_web_shot.mp3');
const bgm = new Audio('no_way_home_theme_song.mp3');
bgm.loop=true;
let musicStarted = false;
document.addEventListener('keydown', function startMusic() {
    if (!musicStarted) {
        bgm.play();
        musicStarted = true;
        document.getElementById('startScreen').style.display = 'none'; // Hide the start screen
    }
});

audiogo = new Audio('gta_v_wasted_sound.mp3');
setTimeout(() => {
audio.play()
},1000);

document.onkeydown = function(e) {
    console.log("Keycode is:", e.keyCode)
    if (e.keyCode == 38) {
        spiderman = document.querySelector(".spiderman");
        webShot.currentTime =0;
        webShot.play();
        spiderman.classList.add('animatespiderman');
        setTimeout(() => {
            spiderman.classList.remove('animatespiderman');
        },700 );
    }

if(e.keyCode == 39){
    spiderman = document.querySelector(".spiderman");
    spidermanX = parseInt(window.getComputedStyle(spiderman, null).getPropertyValue("left"));
    spiderman.style.left = spidermanX + 112 + "px";
}
if(e.keyCode == 37){
    spiderman = document.querySelector(".spiderman");
    spidermanX = parseInt(window.getComputedStyle(spiderman, null).getPropertyValue("left"));
    spiderman.style.left = (spidermanX - 112) + "px";
}
}
 
let gameloop = setInterval(() => {
    spiderman = document.querySelector(".spiderman");
    gameOver = document.querySelector(".gameOver");
    obstacle = document.querySelector(".obstacle");
    dx = parseInt(window.getComputedStyle(spiderman, null).getPropertyValue("left"));
    dy = parseInt(window.getComputedStyle(spiderman, null).getPropertyValue("top"));
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("left"));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("top"));
    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);
    //console.log(offsetX, offsetY);
    if(offsetX<73 && offsetY<52){
        gameOver.innerHTML = "Game Over - Reload to Play Again";
        gameOver.style.visibility = "visible";
        obstacle.classList.remove("obstaclehulk");
        clearInterval(gameloop);
        audiogo.play();
        bgm.pause();

    }
    else if(offsetX<145 && cross){
        score+=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
        aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue("animation-duration"));
        newDur = aniDur - 0.1;
        obstacle.style.animationDuration = newDur + 's';
        console.log('New animation duration: ', newDur)
        }, 500);
    }
}, 10);

function updateScore(score){
    scoreCont.innerHTML = "Your Score: " + score;
} 