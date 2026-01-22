export default class Slide {
    constructor(element, audio = null) {
        this.element = element;
        this.element.style.display = 'none';
        this.audio = audio;
        if (audio)
            this.audioElement = new Audio(audio);
        else
            this.audioElement = new Audio();
    }
    hide() {
        this.element.style.display = 'none';
        this.audioElement.pause();
    }
    show() {
        this.element.style.display = 'block';
        if (this.audio) {
            this.playAudio(this.audio);
        }
    }
    playAudio(audio) {
        document.addEventListener('mousemove', (event) => {
            this.audioElement.play();
        }, { once: true });
    }
}
