export default class Presentation {
    constructor(element, slides) {
        this.element = element;
        this.slides = slides;
        this.currentSlideID = 0;
        this.showSlide(0);
        this.element.addEventListener("click", (event) => {
            this.nextSlide();
        });
        document.addEventListener("keydown", (event, parent = this) => {
            if (event.key == ' ') {
                parent.previousSlide();
            }
        });
    }
    nextSlide() {
        if (this.currentSlideID == this.slides.length - 1)
            return;
        this.hideSlide(this.currentSlideID);
        this.currentSlideID++;
        this.showSlide(this.currentSlideID);
    }
    previousSlide() {
        if (this.currentSlideID == 0)
            return;
        this.hideSlide(this.currentSlideID);
        this.currentSlideID--;
        this.showSlide(this.currentSlideID);
    }
    showSlide(currentSlideID) {
        this.slides[currentSlideID].show();
    }
    hideSlide(currentSlideID) {
        this.slides[currentSlideID].hide();
    }
}
