// const keys = document.getElementsByClassName('keys')[0];
const keyBoard = {
    keys: document.querySelectorAll('.keys__btn div'),
    indicator: document.getElementById('key_press'),
    caps: false,
    init: function () {
        this.setVirtKeyListener();
        this.setKeyBoardListener();
    },
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

    setVirtKeyListener: function () {
        this.keys.forEach((sKey, index) => {
            sKey.addEventListener('click', () => {
                this.playSound(sKey);
            })
        })
    },
    setKeyBoardListener: function () {
        document.addEventListener('keypress', (e) => {
            this.playSoundOnkeyboad(e)
        })
    },
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
    playSoundOnkeyboad: function (skey) {
        this.indicator.innerHTML = skey.key;
        this.indicator.classList.remove('key__animation');
        this.indicator.classList.add('key__animation');
        this.setaudio();

    },
    setaudio: function () {
        let num = Math.floor(Math.random() * 24) + 1;
        const audio = new Audio(`./assets/key${num}.ogg`);
        audio.pause();
        audio.play();
    }
}

window.addEventListener('DOMContentLoaded', () => {
    keyBoard.init();
})