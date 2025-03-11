let intputNumbers = document.querySelectorAll(".otp-input");
let proceedBtn = document.getElementsByTagName("button")[0];
const popoverSuccess = document.getElementById("correct-otp");

let correctOtp = "123456";
let isProceeded = false;

intputNumbers.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (index !== intputNumbers.length - 1 && !isNaN(parseInt(input.value))) {
      input.blur();
      intputNumbers[index + 1].focus();
    } else if (
      index === intputNumbers.length - 1 &&
      !isNaN(parseInt(input.value))
    ) {
      input.blur();
    } else {
      input.value = "";
    }
  });
});

proceedBtn.onclick = function () {
  if (checkOtp() && !isProceeded) {
    console.log("Yes");
    isProceeded = true;
    proceedBtn.setAttribute("popovertarget", popoverSuccess.id);
  }
};

let checkOtp = () => {
  for (let i = 0; i < correctOtp.length; i++) {
    if (correctOtp[i] !== intputNumbers[i].value) {
      return false;
    }
  }
  return true;
};
