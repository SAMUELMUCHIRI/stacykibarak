document.addEventListener("DOMContentLoaded", () => {
  const scrollTop = document.querySelector(".scroll-top");
  const preloader = document.querySelector("#preloader");

  const toggleScrollTop = () => {
    if (!scrollTop) return;

    window.scrollY > 100
      ? scrollTop.classList.add("active")
      : scrollTop.classList.remove("active");
  };

  window.addEventListener("scroll", toggleScrollTop);

  if (scrollTop) {
    scrollTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  window.addEventListener("load", () => {
    toggleScrollTop();

    if (!preloader) return;

    // 👇 delay before hiding loader
    const LOADER_DELAY = 500; // ms (adjust to taste)
    const FADE_DURATION = 300;

    setTimeout(() => {
      preloader.classList.add("fade-out");

      setTimeout(() => {
        preloader.remove();
      }, FADE_DURATION);
    }, LOADER_DELAY);
  });
});
