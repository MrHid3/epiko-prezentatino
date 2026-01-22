import Presentation from "./Presentation.js";
import Slide from "./Slide.js";

const main = document.getElementById("main")!;

const presentation = new Presentation(main, [
    new Slide(getSlide(1)),
    new Slide(getSlide(2)),
    new Slide(getSlide(3), "media/ddlc-theme.mp3"),
    new Slide(getSlide(4)),
    new Slide(getSlide(5)),
    new Slide(getSlide(6)),
    new Slide(getSlide(7), "media/in-the-end.mp3"),
    ]
)

function getSlide(id : number){
    return document.getElementById(`slide-${id}`)!;
}