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
var counter = 0;
function validateFactory() {
  var firstNameMustStartCapital =
    firstName.value[0] == firstName.value[0].toUpperCase();
  var lastNameUndere20 = lastName.value.length < 20;
  var above16Under65 = 16 < ReturnAgeToUser() && ReturnAgeToUser() < 65;
  var emailMustEndWith =
    emailInput.value.substr(emailInput.value.length - 4) == ".com" ||
    emailInput.value.substr(emailInput.value.length - 6) == ".co.il";
  var phoneMustBe0to10 =
    phoneNumber.value[0] == 0 && phoneNumber.value.length == 10;
  if (
    firstNameMustStartCapital &&
    lastNameUndere20 &&
    above16Under65 &&
    emailMustEndWith &&
    phoneMustBe0to10
  ) {
    return true;
  } else {
    if (!firstNameMustStartCapital) {
      firstNameDiv.innerHTML += `<label style="color:red" for="firstName"  >needs to start with a capital letter</label>`;
      firstName.style.border = "1px solid red";
    }
    if (!lastNameUndere20) {
      lastNameDiv.innerHTML += `<label style="color:red" for="lastName"  >needs to be under 20 characters</label>`;
      lastName.style.border = "1px solid red";
    }
    if (!above16Under65) {
      ageDiv.innerHTML += `<label style="color:red" for="dateInput"  >needs to be above 16 and under 65</label>`;
      dateInput.style.border = "1px solid red";
    }
    if (!emailMustEndWith) {
      emailDiv.innerHTML += `<label style="color:red" for="emailInput"  >email must end with .com or .co.il</label>`;
      emailInput.style.border = "1px solid red";
    }
    if (!phoneMustBe0to10) {
      phoneNumberDiv.innerHTML += `<label style="color:red" for="phoneNumber"  >must start with 0 and be exactly 10 digits</label>`;
      phoneNumber.style.border = "1px solid red";
    }
    return false;
    counter++;
  }
}

function printExactHour() {
  var myTime = new Date();
  clock.innerHTML = myTime.toLocaleTimeString();
}
setInterval(printExactHour, 1000);

function fail4times() {
  if (counter > 4) {
  }
}
