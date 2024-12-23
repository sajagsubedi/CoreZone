const crsr = document.querySelector("#cursor");
const navLinks = document.querySelectorAll("#nav #menu li a");

document.addEventListener("mousemove", function (e) {
  crsr.style.display = "block";
  crsr.style.left = e.x + "px";
  crsr.style.top = e.y + "px";
});

navLinks.forEach((navlink) => {
  navlink.addEventListener("mouseenter", (e) => {
    crsr.classList.add("hoverCursor");
  });
  navlink.addEventListener("mouseout", (e) => {
    crsr.classList.remove("hoverCursor");
  });
});
gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "5rem",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 2,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  bgOpacity: 1,
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    scrub: 2,
    start: "top -20%",
    end: "top -70%",
  },
});

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
