const hexadecimalNumberSystem = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
let button = document.getElementById("generate-button");
let resetButton = document.getElementById("reset-button");
let colorPallete1 = document.getElementById("color-pallette-1");
let firstHexCode = document.getElementById("first-hex-code");
let colorPallete2 = document.getElementById("color-pallette-2");
let secondHexCode = document.getElementById("second-hex-code");
let colorPallete3 = document.getElementById("color-pallette-3");
let thirdHexCode = document.getElementById("third-hex-code");
let colorPallete4 = document.getElementById("color-pallette-4");
let fourthHexCode = document.getElementById("fourth-hex-code");
let colorPallete5 = document.getElementById("color-pallette-5");
let fifthHexCode = document.getElementById("fifth-hex-code");

function generateRandomNumber() {
  let randomNumber = Math.floor(Math.random() * hexadecimalNumberSystem.length);
  return randomNumber;
}
button.addEventListener("click", function () {
  // for color pallette 1
  let hexCodeForColorPallete1 = "#";
  for (let x = 0; x < 6; x++) {
    hexCodeForColorPallete1 += hexadecimalNumberSystem[generateRandomNumber()];
  }
  colorPallete1.style.backgroundColor = hexCodeForColorPallete1;
  firstHexCode.textContent = hexCodeForColorPallete1;

  // for color pallette 2
  let hexCodeForColorPallete2 = "#";
  for (let x = 0; x < 6; x++) {
    hexCodeForColorPallete2 += hexadecimalNumberSystem[generateRandomNumber()];
  }
  colorPallete2.style.backgroundColor = hexCodeForColorPallete2;
  secondHexCode.textContent = hexCodeForColorPallete2;

  // for color pallette 3
  let hexCodeForColorPallete3 = "#";
  for (let x = 0; x < 6; x++) {
    hexCodeForColorPallete3 += hexadecimalNumberSystem[generateRandomNumber()];
  }
  colorPallete3.style.backgroundColor = hexCodeForColorPallete3;
  thirdHexCode.textContent = hexCodeForColorPallete3;

  // for color pallette 4
  let hexCodeForColorPallete4 = "#";
  for (let x = 0; x < 6; x++) {
    hexCodeForColorPallete4 += hexadecimalNumberSystem[generateRandomNumber()];
  }
  colorPallete4.style.backgroundColor = hexCodeForColorPallete4;
  fourthHexCode.textContent = hexCodeForColorPallete4;

  // for color pallette 5
  let hexCodeForColorPallete5 = "#";
  for (let x = 0; x < 6; x++) {
    hexCodeForColorPallete5 += hexadecimalNumberSystem[generateRandomNumber()];
  }
  colorPallete5.style.backgroundColor = hexCodeForColorPallete5;
  fifthHexCode.textContent = hexCodeForColorPallete5;
});

//Reset color
resetButton.addEventListener("click", function () {
  // first box
  let textRealColor = "#EDEFF4";
  let firstBoxRealColor = "#EDEFF4";
  colorPallete1.style.backgroundColor = firstBoxRealColor;
  firstHexCode.textContent = firstBoxRealColor;
  firstHexCode.style.Color = textRealColor;

  // second box
  let secondBoxRealColor = "#EDEFF4";
  colorPallete2.style.backgroundColor = secondBoxRealColor;
  secondHexCode.textContent = secondBoxRealColor;
  secondHexCode.style.Color = textRealColor;

  // third box
  let thirdBoxRealColor = "#EDEFF4";
  colorPallete3.style.backgroundColor = thirdBoxRealColor;
  thirdHexCode.textContent = thirdBoxRealColor;
  thirdHexCode.style.Color = textRealColor;

  // fourth box
  let fourthBoxRealColor = "#EDEFF4";
  colorPallete4.style.backgroundColor = fourthBoxRealColor;
  fourthHexCode.textContent = fourthBoxRealColor;
  fourthHexCode.style.Color = textRealColor;

  // fifth box
  let fifthBoxRealColor = "#EDEFF4";
  colorPallete5.style.backgroundColor = fifthBoxRealColor;
  fifthHexCode.textContent = fifthBoxRealColor;
  fifthHexCode.style.Color = textRealColor;
});

const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onClick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");

  toggleBtn.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
