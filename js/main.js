// ===========================================================
// AMR KHALED — Nursing Portfolio — shared behaviour
// ===========================================================

// WhatsApp number (Egypt, country code +20, leading 0 dropped from CV number)
const WHATSAPP_NUMBER = "201013643209";

document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  initScrollReveal();
  initWhatsappForm();
  initWhatsappFloat();
});

function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
}

function initScrollReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((item) => io.observe(item));
}

function initWhatsappFloat() {
  const btn = document.querySelector(".wa-float");
  if (!btn) return;
  const message = encodeURIComponent(
    "Hello Amr, I found your portfolio and would like to get in touch."
  );
  btn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

function initWhatsappForm() {
  const form = document.querySelector("#whatsapp-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("#field-name").value.trim();
    const subject = form.querySelector("#field-subject").value;
    const message = form.querySelector("#field-message").value.trim();

    if (!name || !message) {
      showFormStatus(form, "Please add your name and a message before sending.", true);
      return;
    }

    const lines = [
      `Hello Amr, my name is ${name}.`,
      subject ? `Subject: ${subject}` : "",
      message,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    showFormStatus(form, "Opening WhatsApp with your message ready to send…", false);
    window.open(url, "_blank", "noopener");
  });
}

function showFormStatus(form, text, isError) {
  let status = form.querySelector(".form-status");
  if (!status) {
    status = document.createElement("p");
    status.className = "form-status form-note";
    form.appendChild(status);
  }
  status.textContent = text;
  status.style.color = isError ? "#C6472F" : "#6E9B8C";
}
