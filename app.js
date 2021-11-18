const getElmHeightInput = $("#height-input");
const getElmWeightInput = $("#weight-input");
const getElmResultText = $(".result__content");
const getElmHeightError = $(".height__error");
const getElmWeightError = $(".weight__error");
// Ham hien thi thong tin nguoi dung nhap vao
function errorInput() {
  if (getElmHeightInput.val() <= 0 || getElmHeightInput.val() >= 300) {
    getElmHeightError.css("visibility", "visible");
    setTimeout(function () {
      getElmHeightError.css("visibility", "hidden");
    }, 5000);
  }
  if (getElmWeightInput.val() <= 0 || getElmWeightInput.val() >= 500) {
    getElmWeightError.css("visibility", "visible");
    setTimeout(function () {
      getElmWeightError.css("visibility", "hidden");
    }, 5000);
  }
}
function hiddenError() {
  $("body").click(function () {
    getElmHeightError.css("visibility", "hidden");
    getElmWeightError.css("visibility", "hidden");
  });
}
// Ham tinh BMI
let startIndex = 0;
let bmi;
function indexBMI() {
  $(".btn").click(function (event) {
    event.stopPropagation();
    const height = +getElmHeightInput.val() / 100;
    const weight = +getElmWeightInput.val();
    errorInput();
    if (height <= 0 || height*100 >= 300 || weight <= 0 || weight >= 500) {
      return;
    }
    bmi = weight / (height * height);
    
    var times=new Promise(function(resolve){
      resolve()
    })
    times
    .then( showBMI)
    .then( notificationHealth)
    // showBMI();
    // notificationHealth();
  });
}

function showBMI() {
  const index = +bmi.toFixed(1);
  if (startIndex != 0) {
    return;
  }
  for (let i = 0; i <= index; i += 0.1) {
    i = +i.toFixed("1");
    if (index < 40) {
      setTimeout(function () {
        getElmResultText.text(`${i}`);
      }, i * 30);
    } else if (index < 100) {
      setTimeout(function () {
        getElmResultText.text(`${i}`);
      }, i * 12);
    } else {
      getElmResultText.text(`${index}`);
    }
    startIndex = 1;
  }
}
function resetContent() {
  getElmHeightInput.val("");
  getElmWeightInput.val("");
  getElmResultText.text("0");
  getElmClassNofity1.css("display", "none");
  getElmClassNofity2.css("display", "none");
  getElmClassNofity3.css("display", "none");
  getElmClassNofity4.css("display", "none");
  getElmClassNofity5.css("display", "none");
  getElmClassNofity6.css("display", "none");
  getElmClassNofity7.css("display", "none");
  getElmClassNofity8.css("display", "none");
  startIndex = 0;
}
function resetCalculation() {
  getElmHeightInput.click(function () {
    if (getElmResultText.text() == "0") {
      return;
    }
    resetContent();
  });
  getElmWeightInput.click(function () {
    if (getElmResultText.text() == "0") {
      return;
    }
    resetContent();
  });
}
//Thông báo về tình hình sức khỏe
const getElmClassNofity1 = $(".notify1");
const getElmClassNofity2 = $(".notify2");
const getElmClassNofity3 = $(".notify3");
const getElmClassNofity4 = $(".notify4");
const getElmClassNofity5 = $(".notify5");
const getElmClassNofity6 = $(".notify6");
const getElmClassNofity7 = $(".notify7");
const getElmClassNofity8 = $(".notify8");
function notificationHealth() {
  if (bmi < 16) {
    getElmClassNofity1.css("display", "block");
  } else if (bmi >= 16 && bmi < 17) {
    getElmClassNofity2.css("display", "block");
  } else if (bmi >= 17 && bmi < 18.5) {
    getElmClassNofity3.css("display", "block");
  } else if (bmi >= 18.5 && bmi < 24.9) {
    getElmClassNofity4.css("display", "block");
  } else if (bmi >= 25 && bmi < 29.9) {
    getElmClassNofity5.css("display", "block");
  } else if (bmi >= 30 && bmi < 34.9) {
    getElmClassNofity6.css("display", "block");
  } else if (bmi >= 35 && bmi < 39.9) {
    getElmClassNofity7.css("display", "block");
  } else if (bmi >= 40) {
    getElmClassNofity8.css("display", "block");
  }
}
hiddenError();
indexBMI();
resetCalculation();
