export default class Slide {
    element: HTMLElement;
    audio: string | null;
    audioElement: HTMLAudioElement;

    constructor(element: HTMLElement, audio : string | null = null) {
       this.element = element;
       this.element.style.display = 'none';
       this.audio = audio;
       if(audio)
           this.audioElement = new Audio(audio);
       else
           this.audioElement = new Audio();
    }

    hide(): void {
        this.element.style.display = 'none';
        this.audioElement.pause();
    }

    show(): void {
        this.element.style.display = 'block';
        if (this.audio) {
            this.playAudio(this.audio);
        }
    }

    playAudio(audio: string){
        document.addEventListener('mousemove', (event) => {
            this.audioElement.play();
        }, {once: true});
    }
}