const birthDate = document.querySelector("#birth-date");
const luckyNum = document.querySelector("#lucky-num");
const checkBtn = document.querySelector("#check-btn");
const result = document.querySelector("#result");

checkBtn.addEventListener("click", function checkBirthday() {
  const convertedDob = convertBirthDate(birthDate.value);
  result.innerHTML = checkLuck(convertedDob, luckyNum.value);
});

function convertBirthDate(dob) {
  return (dob = dob.split("-").reduce(function (total, num) {
    return total + Number(num);
  }, 0));
}

function checkLuck(dob, luckyNum) {
  if (dob % luckyNum === 0) return "Your birthday is lucky bro! :D";
  else return "Your birthday isnt lucky and you should be sad. :(";
}
