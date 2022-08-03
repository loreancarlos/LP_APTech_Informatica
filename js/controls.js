import { appMail } from "./appMail.js";

export function Controls() {

   async function sendEmail() {
      const name = document.querySelector("#name").value;
      const email = document.querySelector("#email").value;
      const inputCheckBox = document.querySelectorAll(".checkbox-wrapper input");

      const tel = document.querySelector("#tel");
      const services = setServices(inputCheckBox);
      const ip = await getIpClient();

      /*     const response = appMail.send({ name, email, tel, services });
    
          console.log(response + " FIM"); */
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

   function getIpClient() {
         return fetch('https://api.ipify.org?format=json').then(data => data.json()).then(data => {console.log(data);console.log("AQUIII")});
   }


   return { sendEmail }
}