const doc = document; // Abreviación de document

doc.addEventListener("DOMContentLoaded", (e) => {
  // Delegación de eventos
  scrollTopButton(".scroll-top-btn");
  printPDFButton(".print-pdf-btn");
});

/* Scroll Top Button */

function scrollTopButton(btn) {
  const $scrollBtn = doc.querySelector(btn);
  window.addEventListener("scroll", (e) => {
    let scrollTop = window.pageYOffset || doc.documentElement.scrollTop;

    if (scrollTop > 150) {
      $scrollBtn.classList.remove("hidden");
    } else {
      $scrollBtn.classList.add("hidden");
    }
  });
  doc.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
  });
}

/* Scale CV */
function scaleCV() {
  doc.body.classList.add("scale-cv");
}

function removeScale() {
  doc.body.classList.remove("scale-cv");
}

/* Generate PDF */

let areaCV = doc.getElementById("area-cv");

let options = {
  margin: 1,
  filename: "CV - Ruiz, Francisco Mauricio.pdf",
  image: { type: "jpeg", quality: 0.98 },
  html2canvas: { scale: 4 },
  jsPDF: { format: "a4", orientation: "portrait" },
};

/* Print PDF Button */

function printPDFButton(btn) {
  doc.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      // 1. The class .scale-cv is added to the body, where it reduces the size of the elements
      scaleCV();

      // 2. The PDF is generated
      html2pdf(areaCV, options);

      // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.
      setTimeout(removeScale, 5000);
    }
  });
}
