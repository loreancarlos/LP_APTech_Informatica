import { appMail } from "./appMail.js";

export function Controls() {

   function sendEmail() {
      const name = document.querySelector("#name").value;
      const email = document.querySelector("#email").value;
      const inputCheckBox = document.querySelectorAll(".checkbox-wrapper input");

      const tel = document.querySelector("#tel");
      const services = setServices(inputCheckBox);

      const response = appMail.send({ name, email, tel, services });

      console.log(response + " FIM");
   }

   function setServices(services) {
      let array = [];
      services.forEach(element => {
         if (element.checked) {
            array.push(element.name);
         }
      });

      if (array.length) {
         return array;
      } else {
         return array = ["Não preencheu"];
      }
   }

   return { sendEmail }
}