export class appMail {
   static send({ name, email, cell, services }) {
      name.replace(" ", "+");
      email.replace("@", "%40");
      const tel = cell.map(string => { Array.from(string).filter(s => typeof s != Number) });
      console.log(tel);
      const endPoint = `https://appmailer-aptech.herokuapp.com/mail?name=${name}&email=${email}`;
      return fetch(endPoint).then(data => data.json()).then(({ login, name, public_repos, followers }) => ({ login, name, public_repos, followers }));
   }
}