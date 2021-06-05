function getInspiration() {
  let name = prompt("What is your name?");
  let eMail = prompt("What's your e-mail address?");
  let age = prompt("How old are you?");
  if (age >= 16) {
    alert(
      "🌍🌞🚌" + "\r\n" + "Great " + name + ", we'll be in touch very soon!"
    );
  } else {
    alert("😕" + "\r\n" + "Sorry " + name + ", but you're a little young.");
  }
}

let applyButton = document.querySelector("button");
applyButton.addEventListener("click", getInspiration);
