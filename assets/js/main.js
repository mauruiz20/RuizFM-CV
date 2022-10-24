/* Scale CV */
function scaleCV() {
  document.body.classList.add("scale-cv");
}

function removeScale() {
  document.body.classList.remove("scale-cv");
}

// Generate PDF

let areaCV = document.getElementById("area-cv");

let printPDF = document.getElementById("print-pdf");

let opt = {
  margin: 1,
  filename: "CV - Ruiz, Francisco Mauricio.pdf",
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: { scale: 4 },
  jsPDF: { format: "a4", orientation: "portrait" },
};

// Function to call areaCV and Html2Pdf options
function generateResume() {
  html2pdf(areaCV, opt);
}

// When the button is clicked, it executes the three functions
printPDF.addEventListener("click", () => {
  // 1. The class .scale-cv is added to the body, where it reduces the size of the elements
  scaleCV();

  // 2. The PDF is generated
  generateResume();

  // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.
  setTimeout(removeScale, 5000);
});
