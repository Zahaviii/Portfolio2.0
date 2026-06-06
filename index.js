// Plain JS - Saktyano Zahavi Simple Portfolio Controls
document.addEventListener("DOMContentLoaded", () => {
  console.log("Saktyano Zahavi Portfolio loaded successfully. Clean & Elegant blue space engine is active.");

  // Theme Switcher Controls
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    const sunIcon = themeToggle.querySelector(".sun-icon");
    const moonIcon = themeToggle.querySelector(".moon-icon");
    const toggleText = themeToggle.querySelector(".toggle-text");

    const updateThemeUI = (isLight) => {
      if (isLight) {
        sunIcon.style.display = "none";
        moonIcon.style.display = "inline-block";
        toggleText.textContent = "Mode Gelap";
      } else {
        sunIcon.style.display = "inline-block";
        moonIcon.style.display = "none";
        toggleText.textContent = "Mode Terang";
      }
    };

    // Pre-sync UI states based on loaded theme classes
    const initiallyLight = document.documentElement.classList.contains("light-theme");
    updateThemeUI(initiallyLight);

    themeToggle.addEventListener("click", () => {
      const isLightNow = document.documentElement.classList.toggle("light-theme");
      localStorage.setItem("theme", isLightNow ? "light" : "dark");
      updateThemeUI(isLightNow);
    });
  }

  // Micro interaction - Highlight card borders when hovered deeply
  const projectCards = document.querySelectorAll(".project-card");
  
  projectCards.forEach((card, index) => {
    card.addEventListener("mouseenter", () => {
      const title = card.querySelector(".project-name");
      if (title) {
        title.style.color = "var(--color-primary)";
      }
    });

    card.addEventListener("mouseleave", () => {
      const title = card.querySelector(".project-name");
      if (title) {
        title.style.color = "";
      }
    });
  });
});
