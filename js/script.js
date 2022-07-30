const checkBoxWrapper = document.querySelectorAll(".checkbox-wrapper");
const inputCheckBox = document.querySelectorAll(".checkbox-wrapper input");
const buttonWhatsApp = document.querySelector("footer .whatsapp-wrapper a img");

const submitButton = document.querySelector("#submitForm");
const resendButton = document.querySelector("main>input");
const toTopSubmitForm = document.querySelector("#toTopSubmitForm");

const widthSubmitButton = submitButton.getBoundingClientRect().width.toFixed(0);
const widthRem = widthSubmitButton.toString().slice(0, -1);

resendButton.setAttribute("style", `max-width:${widthRem}rem`);
resendButton.addEventListener("click", () => {
   window.scrollTo(0, 0);
});

toTopSubmitForm.addEventListener("click", () => {
   window.scrollTo(0, 0);
});


checkBoxWrapper.forEach((element) => {
   element.addEventListener("click", () => {
      element.firstElementChild.toggleAttribute("checked");
   });
});

buttonWhatsApp.addEventListener("mouseover", () => {
   buttonWhatsApp.classList.add("shake-on");
   buttonWhatsApp.classList.remove("shake-off");
});

buttonWhatsApp.addEventListener("mouseout", () => {
   buttonWhatsApp.classList.remove("shake-on");
   buttonWhatsApp.classList.add("shake-off");
});

$('.carousel').slick({
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 1,
   slidesToScroll: 1,
});

const tel = document.getElementById("tel");

tel.addEventListener("keyup", (event) => {
   let value = event.target.value.replace(/\D/g, "");
   value = value.replace(/^(\d\d)(\d)/g, "($1) $2");
   value = value.replace(/(\d{5})(\d)/, "$1-$2");
   event.target.value = value;
});