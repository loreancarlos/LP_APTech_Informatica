import { appMail } from "./appMail.js";

export function Controls() {

   async function sendEmail() {
      const statusScreen = document.querySelector("#statusScreen");

      statusScreen.classList.remove("hide");

      const name = document.querySelector("#name").value;
      const email = document.querySelector("#email").value;
      const inputCheckBox = document.querySelectorAll(".checkbox-wrapper input");

      const tel = document.querySelector("#tel").value;
      const services = setServices(inputCheckBox);
      const { ip } = await getIpClient();

      const response = await appMail.send({ name, email, tel, services, ip });

      if (response.status == "200") {
         statusScreen.firstElementChild.firstElementChild.setAttribute("src", "./img/ok.png");
      } else {
         statusScreen.firstElementChild.lastElementChild.textContent = "NÂO CONSEGUIMOS ENVIAR SEU EMAIL. MANDE MENSAGEM PELO WHATSAPP";
         statusScreen.firstElementChild.firstElementChild.setAttribute("src", "./img/error.png");
      }
      await delay(2);
      statusScreen.classList.add("hide");
      await delay(0.8);
      location.reload();
   }

   function delay(n) {
      return new Promise(function (resolve) {
         setTimeout(resolve, n * 1000);
      });
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
      return fetch('https://api.ipify.org?format=json').then(data => data.json()).catch(error => "");
   }

   return { sendEmail }
}