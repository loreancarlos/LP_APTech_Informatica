import { Events } from "./events.js";
import { Controls } from "./controls.js";
import { emailForm } from "./elements.js";

const controls = Controls();

Events(emailForm, controls);

$('.carousel').slick({
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
});