document.addEventListener("DOMContentLoaded", () => {
  const links = [...document.querySelectorAll(".site-nav nav a[href^=\"#\"]")];
  const sections = [...document.querySelectorAll("main section[id]")];

  // Navigation uses normal anchor links, so it works even if JavaScript is disabled.
  links.forEach(link => {
    link.addEventListener("click", () => {
      links.forEach(item => item.classList.remove("active"));
      link.classList.add("active");
    });
  });

  const setActive = id => {
    links.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  };

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.35, 0.6] });

    sections.forEach(section => observer.observe(section));
  }
});
