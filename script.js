// const keys = document.getElementsByClassName('keys')[0];
const keyBoard = {
    keys: document.querySelectorAll('.keys__btn div'),
    indicator: document.getElementById('key_press'),
    caps: false,
    init: function () {
        this.setVirtKeyListener();
        this.setKeyBoardListener();
    },
    // uppercase letters
    turnCaps: function () {
        this.keys.forEach((sKeys) => {
            if (sKeys.innerHTML === "CAPS") {
            }
            else if (this.caps) {
                sKeys.innerHTML = sKeys.innerHTML.toLowerCase();
            }
            else {
                sKeys.innerHTML = sKeys.innerHTML.toUpperCase()

            }
        })
        this.caps = !this.caps;
    },
    // add click event to each of the keys in the layput
    setVirtKeyListener: function () {
        this.keys.forEach((sKey, index) => {
            sKey.addEventListener('click', () => {
                this.playSound(sKey);
            })
        })
    },
    // add listener to key press from the keyboard
    setKeyBoardListener: function () {
        document.addEventListener('keypress', (e) => {
            this.playSoundOnkeyboad(e)
        })
    },
    // when keypress on virtual keyboard
    playSound: function (sKey) {
        if (sKey.innerHTML === "CAPS") {
            this.turnCaps()
        }
        else {
            this.indicator.innerHTML = sKey.innerHTML;
            this.indicator.className.replace('key__animation', '')
            this.indicator.classList.add('key__animation');
            this.setaudio();
        }
    },
    // when keypress on actual keyboard
    playSoundOnkeyboad: function (skey) {
        this.indicator.innerHTML = skey.key;
        this.indicator.classList.remove('key__animation');
        this.indicator.classList.add('key__animation');
        this.setaudio();

    },
    // create audio and play a random audio when a key is pressed from any keyboard
    setaudio: function () {
        let num = Math.floor(Math.random() * 24) + 1;
        const audio = new Audio(`./assets/key${num}.ogg`);
        audio.pause();
        audio.play();
    }
}

window.addEventListener('DOMContentLoaded', () => {
    // on full content loaded initialize the function
    keyBoard.init();
})