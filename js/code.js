var errorDisplayed = false;

function checkInput() {
  var input = document.getElementById("input").value;
  if (input.toLowerCase() == "d1h1j1") {
    window.location.href = "z10.html";
    return false;
  } else {
    if (!errorDisplayed) {
      var error = document.createElement("p");
      error.innerHTML = "No such code exists";
      error.classList.add("error");
      var form = document.getElementsByTagName("form")[0];
      form.appendChild(error);
      errorDisplayed = true;
    }
    return false;
  }
}