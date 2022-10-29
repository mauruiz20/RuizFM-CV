/* Dark Theme Button */

const doc = document; // Abreviación de document

export default function darkThemeButton(btn, i) {
  const $i = doc.querySelector(i),
    $body = doc.querySelector("body");

  const lightMode = () => {
    $i.classList.remove("fa-sun");
    $i.classList.add("fa-moon");
    localStorage.setItem("theme", "light");
    $body.classList.remove("dark-theme");
  };

  const darkMode = () => {
    $i.classList.remove("fa-moon");
    $i.classList.add("fa-sun");
    localStorage.setItem("theme", "dark");
    $body.classList.add("dark-theme");
  };

  doc.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($body.classList.value === "dark-theme") {
        lightMode();
      } else {
        darkMode();
      }
    }
  });

  doc.addEventListener("DOMContentLoaded", (e) => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }
    if (localStorage.getItem("theme") === "light") {
      lightMode();
    }
    if (localStorage.getItem("theme") === "dark") {
      darkMode();
    }
  });
}
