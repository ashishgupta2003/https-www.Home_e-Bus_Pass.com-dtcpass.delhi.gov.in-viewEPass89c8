// Change date on pass after 2 months

const beginDateElement = document.getElementById("begin-date");
const expireDateElement = document.getElementById("expire-date");

const currentDate = new Date();
let beginDate = new Date("2024-06-09");
const validationPeriod = 5184000000; // 60 days in milliseconds

let expireDate = beginDate.getTime() + validationPeriod;

if (currentDate.getTime() > expireDate) {
  beginDate = currentDate;
  expireDate = currentDate.getTime() + validationPeriod;
}

beginDateElement.innerHTML = dateFormater(beginDate);
expireDateElement.innerHTML = dateFormater(new Date(expireDate));

// Date in format dd/mm/yyyy

function dateFormater(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
