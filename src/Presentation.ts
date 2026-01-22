import Slide from "./Slide.js";

export default class Presentation{
    slides: Slide[];
    currentSlideID: number;
    element: HTMLElement;

    constructor(element: HTMLElement, slides: Slide[]) {
        this.element = element;
        this.slides = slides;
        this.currentSlideID = 0;

        this.showSlide(0);
        this.element.addEventListener("click", (event) => {
            this.nextSlide();
        })

        document.addEventListener("keydown", (event, parent = this) => {
            if (event.key == ' ') {
               parent.previousSlide();
            }
        })
    }

    nextSlide(): void {
        if(this.currentSlideID == this.slides.length - 1)
            return;
        this.hideSlide(this.currentSlideID);
        this.currentSlideID++;
        this.showSlide(this.currentSlideID);
    }

    previousSlide(): void {
        if(this.currentSlideID == 0)
            return;
        this.hideSlide(this.currentSlideID);
        this.currentSlideID--;
        this.showSlide(this.currentSlideID);
    }

    showSlide(currentSlideID: number): void {
        this.slides[currentSlideID].show();
    }

    hideSlide(currentSlideID: number): void {
        this.slides[currentSlideID].hide();
    }
}