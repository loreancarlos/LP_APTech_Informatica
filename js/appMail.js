export class appMail {
   static send({ name, email, tel, services, ip }) {

      const endPoint = `https://appmailer-aptech.herokuapp.com/mail`;
      const data = { name, email, tel, services, ip };

      return fetch(endPoint, {
         method: "POST",
         body: JSON.stringify(data),
         headers: { "Content-type": "application/json; charset=UTF-8" }
      });
   }
}