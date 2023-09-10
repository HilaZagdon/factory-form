function ReturnAgeToUser() {
  var getBirthday = new Date(dateInput.value);

  var currentDate = new Date();
  var age = currentDate.getFullYear() - getBirthday.getFullYear();

  if (
    currentDate.getMonth() < getBirthday.getMonth() ||
    (currentDate.getMonth() == getBirthday.getMonth() &&
      currentDate.getDate() < getBirthday.getDate())
  ) {
    age--;
  }
  return age;
}
/*
var counter = 0;
function validateFactory() {
  var firstNameMustStartCapital =
    firstName.value[0] == firstName.value[0].toUpperCase();
  var lastNameUnder20 = lastName.value.length < 20;
  var above16Under65 = 16 < ReturnAgeToUser() && ReturnAgeToUser() < 65;
  var emailMustEndWith =
    emailInput.value.substr(emailInput.value.length - 4) == ".com" ||
    emailInput.value.substr(emailInput.value.length - 6) == ".co.il";
  var phoneMustBe0to10 =
    phoneNumber.value[0] == 0 && phoneNumber.value.length == 10;
  if (
    firstNameMustStartCapital &&
    lastNameUnder20 &&
    above16Under65 &&
    emailMustEndWith &&
    phoneMustBe0to10
  ) {
    return true;
  } else {
    if (!firstNameMustStartCapital) {
      firstNameSpan.innerText = "needs to start with a capital letter";
      firstName.style.border = "1px solid red";
    }
    if (!lastNameUnder20) {
      lastNameSpan.innerText = "needs to be under 20 characters";
      lastName.style.border = "1px solid red";
    }
    if (!above16Under65) {
      ageSpan.innerText = "needs to be above 16 and under 65";
      dateInput.style.border = "1px solid red";
    }
    if (!emailMustEndWith) {
      emailSpan.innerText = "email must end with .com or .co.il";
      emailInput.style.border = "1px solid red";
    }
    if (!phoneMustBe0to10) {
      phoneSpan.innerText = "must start with 0 and be exactly 10 digits";
      phoneNumber.style.border = "1px solid red";
    }
    return false;
  }
}*/

btn.disabled = true;
lastName.disabled = true;
dateInput.disabled = true;
emailInput.disabled = true;
phoneNumber.disabled = true;
roleInput.disabled = true;

function isFirstNameValid() {
  var firstNameMustStartCapital =
    firstName.value[0] == firstName.value[0].toUpperCase();
  if (firstNameMustStartCapital) {
    firstNameSpan.innerText = "";
    firstNameSpan.style = "color:black";
    firstName.style.border = "1px solid black";
    return true;
  } else {
    firstNameSpan.innerText = "needs to start with a capital letter";
    firstName.style.border = "1px solid red";
    firstNameSpan.style = "color:red";
    return false;
  }
}

firstName.addEventListener("input", function () {
  lastName.disabled = !isFirstNameValid();
});

function isLastNameValid() {
  var lastNameUnder20 = lastName.value.length < 20;
  if (lastNameUnder20) {
    lastNameSpan.innerText = "";
    lastNameSpan.style = "color:black";
    lastName.style.border = "1px solid black";
    return true;
  } else {
    lastNameSpan.innerText = "needs to be under 20 characters";
    lastName.style.border = "1px solid red";
    lastNameSpan.style = "color:red";
    return false;
  }
}

lastName.addEventListener("input", function () {
  dateInput.disabled = !isLastNameValid();
});

function isAgeValid() {
  var above16Under65 = 16 < ReturnAgeToUser() && ReturnAgeToUser() < 65;
  if (above16Under65) {
    ageSpan.innerText = "";
    ageSpan.style = "color:black";
    dateInput.style.border = "1px solid black";
    return true;
  } else {
    ageSpan.innerText = "needs to be above 16 and under 65";
    dateInput.style.border = "1px solid red";
    ageSpan.style = "color:red";
    return false;
  }
}

dateInput.addEventListener("input", function () {
  emailInput.disabled = !isAgeValid();
});

function isEmailValid() {
  var emailMustEndWith =
    emailInput.value.substr(emailInput.value.length - 4) == ".com" ||
    emailInput.value.substr(emailInput.value.length - 6) == ".co.il";
  if (emailMustEndWith) {
    emailSpan.innerText = "";
    emailSpan.style = "color:black";
    emailInput.style.border = "1px solid black";
    return true;
  } else {
    emailSpan.innerText = "email must end with .com or .co.il";
    emailInput.style.border = "1px solid red";
    emailSpan.style = "color:red";
    return false;
  }
}

emailInput.addEventListener("input", function () {
  phoneNumber.disabled = !isEmailValid();
});

function isPhoneValid() {
  var phoneMustBe0to10 =
    phoneNumber.value[0] == 0 && phoneNumber.value.length == 10;
  if (phoneMustBe0to10) {
    phoneSpan.innerText = "";
    phoneSpan.style = "color:black";
    phoneNumber.style.border = "1px solid black";
    btn.disabled = false;
    return true;
  } else {
    phoneSpan.innerText = "must start with 0 and be exactly 10 digits";
    phoneNumber.style.border = "1px solid red";
    phoneSpan.style = "color:red";
    btn.disabled = true;
    return false;
  }
}

phoneNumber.addEventListener("input", function () {
  roleInput.disabled = !isPhoneValid();
});

function printExactHour() {
  var myTime = new Date();
  clock.innerHTML = myTime.toLocaleTimeString();
}
setInterval(printExactHour, 1000);

function fail4times() {
  if (counter > 4) {
  }
}
