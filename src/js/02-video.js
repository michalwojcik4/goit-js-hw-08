import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(function() {
    player.getCurrentTime().then(function(seconds) {
        localStorage.setItem("videoplayer-current-time", seconds);
    }).catch(function(error) {
        console.log(error.message)
    });
}, 1000));

const currentTime = localStorage.getItem("videoplayer-current-time")
player.setCurrentTime(currentTime).then().catch(function(error) {
    switch (error.message) {
        case 'RangeError':
            break;
        default:
            break;
    }
});
