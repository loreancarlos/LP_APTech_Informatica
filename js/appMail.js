export class appMail {
   static send({ name, email, tel, services}) {
      const url = `https://appmailer-aptech.herokuapp.com/mail`;
      const endPoint = `http://localhost:3000/mail`;

      const data = { name, email, tel, services};
      const request = new Request(endPoint, {
         method: 'POST',
         body: data,
         headers: new Headers()
      });
      return fetch(request).then(data => data.json()).catch(console.log("Deu RUIM"));
   }
}