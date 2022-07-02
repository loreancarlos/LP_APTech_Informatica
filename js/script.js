const checkBoxWrapper = document.querySelectorAll(".checkbox-wrapper");
const inputCheckBox = document.querySelectorAll(".checkbox-wrapper input");
const buttonWhatsApp = document.querySelector("footer .whatsapp-wrapper a img");

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

