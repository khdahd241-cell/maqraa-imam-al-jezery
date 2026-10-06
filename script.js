document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelectorAll("#year");
  year.forEach(el => el.textContent = new Date().getFullYear());

  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav-links");
  if (menuBtn && nav) menuBtn.addEventListener("click", () => nav.classList.toggle("open"));

  const form = document.getElementById("registrationForm");
  if (form) {
    const params = new URLSearchParams(location.search);
    const course = params.get("course");
    if (course && document.getElementById("course")) document.getElementById("course").value = course;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const message = document.getElementById("formMessage");
      message.textContent = "تم استلام طلبك مبدئيًا. هذه نسخة تجريبية من الموقع؛ سيتم ربط النموذج بقاعدة البيانات وواتساب في المرحلة التالية.";
      form.reset();
    });
  }

  const language = document.getElementById("language");
  if (language) {
    language.addEventListener("change", () => {
      if (language.value !== "ar") {
        alert("اللغات الإنجليزية والأمهرية والأورومية مهيأة للمرحلة التالية من الترجمة.");
        language.value = "ar";
      }
    });
  }
});
