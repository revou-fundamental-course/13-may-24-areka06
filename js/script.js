// Scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Function menghitung luas
function calculateArea() {
  const alas = parseFloat(document.querySelector(".input-alas").value);
  const tinggi = parseFloat(document.querySelector(".input-tinggi").value);
  let calculationSteps = "";

  // Check data valid
  if (!isNaN(alas) && !isNaN(tinggi)) {
    calculationSteps += "L= 1/2 x A x T\n";
    calculationSteps += `L= 1/2 x ${alas} x ${tinggi}\n`;
    calculationSteps += `L= ${0.5 * alas * tinggi}\n`;

    const luas = 0.5 * alas * tinggi;
    document.querySelector(".hasil").value = luas;
    document.querySelector(".hasil").value = calculationSteps;
  } else {
    alert("Please enter valid numbers for base and height.");
  }
}

// Function menghitung keliling
function calculatePerimeter() {
  const sisiA = parseFloat(document.querySelector(".input-A").value);
  const sisiB = parseFloat(document.querySelector(".input-B").value);
  const sisiC = parseFloat(document.querySelector(".input-C").value);
  let calculationSteps = "";

  // Check data valid
  if (!isNaN(sisiA) && !isNaN(sisiB) && !isNaN(sisiC)) {
    calculationSteps += "K= S1 + S2 +S3\n";
    calculationSteps += `K= ${sisiA} + ${sisiB} + ${sisiC}\n`;
    calculationSteps += `K= ${sisiA + sisiB + sisiC}\n`;

    document.querySelectorAll(".hasil").forEach(function (input) {
      input.value = calculationSteps;
    });
  } else {
    alert("Please enter valid numbers for all sides of the triangle.");
  }
}
document
  .querySelector(".hitung-luas button")
  .addEventListener("click", calculateArea);
document
  .querySelector(".hitung-keliling button")
  .addEventListener("click", calculatePerimeter);

// Reset Button
function resetForm() {
  document.querySelectorAll("input").forEach(function (input) {
    input.value = "";
  });
  document.querySelectorAll("textarea").forEach(function (input) {
    input.value = "";
  });
}

// Hide and Show
function sectionShow(sectionToShow) {
  resetForm()
  document.getElementById("luas-section").style.display = "none";
  document.getElementById("keliling-section").style.display = "none";
  document.getElementById(sectionToShow).style.display = "flex";
}