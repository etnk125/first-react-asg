export function reveal() {
  let items = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;
  const revealpoint = 80;
  items.forEach((item) => {
    const revealtop = item.getBoundingClientRect().top;
    revealtop < windowHeight - revealpoint
      ? item.classList.add("active")
      : item.classList.remove("active");
  });
}
window.addEventListener("scroll", reveal);
