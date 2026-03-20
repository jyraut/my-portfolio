// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });

      mobileMenu.classList.add("hidden");
    }
  });
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll(".skill-progress");

function animateSkillBars() {
  skillBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.width = width;
    }, 100);
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateSkillBars();
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 },
);

const skillsSection = document.getElementById("skills");
if (skillsSection) {
  observer.observe(skillsSection);
}

// Form submission
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
    console.log({ name, email, subject, message });
    alert("Thank you for your message! I will get back to you soon.");
    contactForm.reset();
  });
}

//View all Project
const toggleBtn = document.getElementById("toggle-projects-btn");
const extraProjects = document.getElementById("extra-projects");

toggleBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const isHidden = extraProjects.classList.contains("hidden");

  if (isHidden) {
    extraProjects.classList.remove("hidden");
    toggleBtn.innerHTML =
      'View Less Projects <i class="fas fa-arrow-up ml-2"></i>';
  } else {
    extraProjects.classList.add("hidden");
    toggleBtn.innerHTML =
      'View All Projects <i class="fas fa-arrow-right ml-2"></i>';
  }
});

// Initialize EmailJS with your public key
(function () {
  emailjs.init("bQB1r4-r8Li2I_0ef");
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs
        .sendForm("service_jnsmb2s", "template_320oyed", this)
        .then(() => {
          alert("Message sent successfully!");
          this.reset();
        })
        .catch((error) => {
          console.error("FAILED...", error);
          alert("Failed to send message.");
        });
    });
  } else {
    console.error("❌ contact-form not found in DOM");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-projects-btn");
  const extraProjects = document.getElementById("extra-projects-container");

  if (toggleBtn && extraProjects) {
    toggleBtn.addEventListener("click", (e) => {
      // Prevent default behavior if it's an <a> tag
      e.preventDefault();

      // Toggle the 'hidden' class
      const isHidden = extraProjects.classList.toggle("hidden");

      // Update Button Text and Icon
      if (isHidden) {
        toggleBtn.innerHTML = `View All Projects <i class="fas fa-arrow-right ml-2"></i>`;
      } else {
        toggleBtn.innerHTML = `Show Less <i class="fas fa-arrow-up ml-2"></i>`;
      }
    });
  }
});
