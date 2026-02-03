const overlay = document.getElementById("overlay");
const closeButton = document.getElementById("closeButton");
const toggles = document.querySelectorAll(".toggle");
const statusItems = document.querySelectorAll("#statusList strong");

const featureMap = {
  "full-bright": 0,
  aim: 1,
  fly: 2,
  "no-clip": 3,
};

const toggleOverlay = () => {
  overlay.classList.toggle("open");
  overlay.setAttribute(
    "aria-hidden",
    overlay.classList.contains("open") ? "false" : "true"
  );
};

document.addEventListener("keydown", (event) => {
  if (event.code === "ShiftRight") {
    toggleOverlay();
  }
});

closeButton.addEventListener("click", () => {
  if (overlay.classList.contains("open")) {
    toggleOverlay();
  }
});

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const feature = toggle.dataset.feature;
    const index = featureMap[feature];

    toggle.classList.toggle("active");
    const isActive = toggle.classList.contains("active");

    const status = statusItems[index];
    status.textContent = isActive ? "ON" : "OFF";
    status.classList.toggle("active", isActive);
  });
});
