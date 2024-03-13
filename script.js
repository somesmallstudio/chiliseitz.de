window.addEventListener(
  "scroll",
  (evt) => {
    let { height } = getComputedStyle(document.body);
    height = parseInt(height);
    console.log(height);
    document.body.style.setProperty("--scrolly", window.scrollY / height);
    document.body.style.setProperty(
      "--scrollyvp",
      Math.min(window.scrollY / window.innerHeight),
    );
    document.body.style.setProperty("--scrollypx", window.scrollY);
  },
  { capture: false, passive: true },
);

document.addEventListener("DOMContentLoaded", () =>
  window.dispatchEvent(new Event("scroll")),
);
