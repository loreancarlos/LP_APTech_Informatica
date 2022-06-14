const checkBoxWrapper = document.querySelectorAll(".checkbox-wrapper");

checkBoxWrapper.forEach((element) => {
   element.addEventListener("click", () => {
      console.log(element.children[0]);
      element.children[0].toggleAttribute("checked");
   });
});