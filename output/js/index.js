function setBirthDate() {
  document.querySelector('#age').innerHTML = _calculateAge(new Date('10-25-1995'));
}

function _calculateAge(birthday) { // birthday is a date
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs); // milliseconds from epoch

  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function setCurrentYear() {
  document.querySelector('#current_year').innerHTML = new Date().getFullYear();
}

document.addEventListener('DOMContentLoaded', setBirthDate);
document.addEventListener('DOMContentLoaded', setCurrentYear);
