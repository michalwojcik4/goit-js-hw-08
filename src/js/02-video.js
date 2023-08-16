import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const keyCurrentTime = "videoplayer-current-time";

player.on('timeupdate', throttle(function() {
    player.getCurrentTime().then(function(seconds) {
        localStorage.setItem(keyCurrentTime, seconds);
    }).catch(function(error) {
        console.log(error.message)
    });
}, 1000));

const currentTime = localStorage.getItem(keyCurrentTime)
player.setCurrentTime(currentTime).then().catch(function(error) {
    switch (error.message) {
        case 'RangeError':
            break;
        default:
            break;
    }
});
