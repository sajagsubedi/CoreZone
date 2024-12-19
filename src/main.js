const crsr = document.querySelector("#cursor");

document.addEventListener("mousemove", function (e) {
  crsr.style.display = "block";
  crsr.style.left = e.x + "px";
  crsr.style.top = e.y + "px";
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
    start: "top -25%",
    end: "top -70%",
  },
});
