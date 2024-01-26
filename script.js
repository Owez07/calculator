let string = "";
var buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {

      if (e.target.innerHTML == "=") {
        try{
            string = eval(string);
            if(isNaN(string)){
                throw new Error("Invalid operation")
            }
            document.querySelector("input").value = string;
        }
        catch(Error){
            string = "Error";
            document.querySelector("input").value = string;
        }
      }
      else if (e.target.innerHTML == "C" || e.target.innerHTML == "AC") {
        string = "";
        document.querySelector("input").value = string;
      }
      else {
        string = string + e.target.innerHTML;
        document.querySelector("input").value = string;
      }
    })
  })





