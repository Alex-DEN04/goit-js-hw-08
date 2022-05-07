
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY ="videoplayer-current-time"
const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(onTimeUpdate, 1000));
populeteForm();

function onTimeUpdate(event) {
    const currentTime = event.seconds;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(currentTime));
} 

function populeteForm() { 
    const seconds = JSON.parse(localStorage.getItem(STORAGE_KEY));
        player.setCurrentTime(seconds);
}