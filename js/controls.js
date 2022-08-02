export function Controls() {

   function sendEmail() {
      const name = document.querySelector("#name");
      const email = document.querySelector("#email");
      const cell = document.getElementById("tel");

      console.log(Array.from(cell.value));

      const tel = Array.from(cell.value).filter(s => console.log(console.log(typeof Number(s)))).join("");

      console.log(tel);

      const inputCheckBox = document.querySelectorAll(".checkbox-wrapper input");


   }

   return { sendEmail }
}