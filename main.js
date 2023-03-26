let nameInput = document.getElementById("name");
let myName = document.querySelector(".theName");
let nameError = document.querySelector(".nameError");
let numInput = document.getElementById("num");
let myNum = document.querySelector(".num");
let numError = document.querySelector(".numError");
let monthInput = document.getElementById("dataMM");
let month = document.querySelector(".month");
let yearInput = document.getElementById("dataYY");
let dataError = document.querySelector(".dataError");
let year = document.querySelector(".year");
let cvcInput = document.getElementById("cvc");
let myCVC = document.querySelector(".myCVC");
let cvcErorr = document.querySelector(".cvcErorr");

let error1 = document.createElement("div");
let error2 = document.createElement("div");
let error22 = document.createElement("div");
let error3 = document.createElement("div");
let error4 = document.createElement("div");

let infoForm = document.querySelector(".infoForm");
let complete = document.querySelector(".complete");

function check(str) {
  return /[0-9]/.test(str);
}

document.forms[0].onsubmit = function (e) {
  let user = false;
  let num = false;
  let month = false;
  let year = false;
  let cvc = false;

  if (nameInput.value !== "" && check(nameInput.value) === false) {
    user = true;
  }
  if (user === false) {
    error1.textContent = "Can't be blank";
    error1.style.cssText =
      "font-size: 12px; margin-top: 5px; color: hsl(0, 100%, 74%);";
    nameInput.style.cssText = "border-color: hsl(0, 100%, 74%);";
    nameError.appendChild(error1);
    e.preventDefault();
  } else {
    nameInput.style.cssText = "border-color: green;";
    error1.style.cssText = "display: none;";
    e.preventDefault();
  }

  if (
    numInput.value !== "" &&
    check(numInput.value) === true &&
    numInput.value.length === 19
  ) {
    num = true;
  }
  if (num === false && numInput.value === "") {
    error2.textContent = "Can't be blank";
    error2.style.cssText =
      "font-size: 12px; margin-top: 5px; color: hsl(0, 100%, 74%);";
    numError.appendChild(error2);
    numInput.style.cssText = "border-color: hsl(0, 100%, 74%);";
    e.preventDefault();
  } else {
    numInput.style.cssText = "border-color: green;";
    error2.style.cssText = "display: none;";
    e.preventDefault();
  }
  if (num === false && check(numInput.value) === false) {
    error22.textContent = "Wrong format, numbers only";
    error22.style.cssText =
      "font-size: 12px; margin-top: 5px; color: hsl(0, 100%, 74%);";
    numError.appendChild(error22);
    numInput.style.cssText = "border-color: hsl(0, 100%, 74%);";
    e.preventDefault();
  } else {
    numInput.style.cssText = "border-color: green;";
    error22.style.cssText = "display: none;";
    e.preventDefault();
  }

  if (user === false || num === false) {
    e.preventDefault();
  }

  if (monthInput.value !== "" && check(monthInput.value) === true) {
    month = true;
  }
  if (month === false) {
    error3.textContent = "Can't be blank";
    error3.style.cssText =
      "font-size: 12px; margin-top: 5px; color: hsl(0, 100%, 74%);";
    monthInput.style.cssText = "border-color: hsl(0, 100%, 74%);";
    dataError.appendChild(error3);
    e.preventDefault();
  } else {
    monthInput.style.cssText = "border-color: green;";
    error3.style.cssText = "display: none;";
    e.preventDefault();
  }

  if (yearInput.value !== "" && check(yearInput.value) === true) {
    year = true;
  }
  if (year === false) {
    yearInput.style.cssText = "border-color: hsl(0, 100%, 74%);";
    e.preventDefault();
  } else {
    yearInput.style.cssText = "border-color: green;";
    e.preventDefault();
  }

  if (month === true && year === true) {
    error3.style.cssText = "display: none;";
    e.preventDefault();
  }
  if (month === false || year === false) {
    error3.textContent = "Can't be blank";
    error3.style.cssText =
      "font-size: 12px; margin-top: 5px; color: hsl(0, 100%, 74%);";
    dataError.appendChild(error3);
    e.preventDefault();
  }

  if (cvcInput.value !== "" && check(cvcInput.value) === true) {
    cvc = true;
  }
  if (cvc === false) {
    cvcInput.style.cssText = "border-color: hsl(0, 100%, 74%);";
    error4.textContent = "Can't be blank";
    error4.style.cssText =
      "font-size: 12px; margin-top: 5px; color: hsl(0, 100%, 74%);";
    cvcErorr.appendChild(error4);
    e.preventDefault();
  } else {
    cvcInput.style.cssText = "border-color: green;";
    error4.style.cssText = "display: none;";
    e.preventDefault();
  }

  if (
    user === true &&
    num === true &&
    month === true &&
    year === true &&
    cvc === true
  ) {
    complete.style.cssText = "display: flex;";
    infoForm.style.cssText = "display: none;";
  }
};

nameInput.onkeyup = function () {
  myName.textContent = `${nameInput.value}`;
};
document.getElementById("num").addEventListener("keyup", function (e) {
  const txt = numInput.value;
  if (txt.length == 19) e.preventDefault();
  myNum.textContent = `${numInput.value}`;
  if (txt.length == 4 || txt.length == 9 || txt.length == 14) {
    numInput.value = numInput.value + " ";
  }
  if (txt.length == 19) {
    numInput.value = numInput.value;
  }
});
monthInput.onkeyup = function () {
  month.textContent = `${monthInput.value}`;
};
yearInput.onkeyup = function () {
  year.textContent = `${yearInput.value}`;
};
cvcInput.onkeyup = function () {
  myCVC.textContent = `${cvcInput.value}`;
};
