import { appMail } from "./appMail.js";

export function Controls() {

   async function sendEmail() {
      const statusScreen = document.querySelector("#screen-wrapper");
      statusScreen.classList.remove("hide");

      const name = document.querySelector("#name").value;
      const email = document.querySelector("#email").value;
      const inputCheckBox = document.querySelectorAll(".checkbox-wrapper input");

      const tel = document.querySelector("#tel").value;
      const services = setServices(inputCheckBox);
      const { ip } = await getIpClient();

      const response = await appMail.send({ name, email, tel, services, ip });

      if (response.status == "200") {
         statusScreen.firstElementChild.firstElementChild.src = "./img/ok.png";
      } else {
         statusScreen.firstElementChild.lastElementChild.textContent = "NÂO CONSEGUIMOS ENVIAR SEU EMAIL. MANDE MENSAGEM PELO WHATSAPP";
         statusScreen.firstElementChild.firstElementChild.src = "./img/error.png";
      }
      setInterval(() => {

      }, 3000);
      statusScreen.classList.add("hide");
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
      return fetch('https://api.ipify.org?format=json').then(data => data.json());
   }

   return { sendEmail }
}