document.addEventListener('DOMContentLoaded', function() {
setTimeout(function() {
gsap.to(".leftSideAnimationContent > div", {
    duration: 1,
    y: 0,
    opacity: 1,
    visibility: "visible",
    stagger: 0.3,
    ease: "power2.out",
    startAt: { y: 50, opacity: 0 }
});
gsap.to(".leftSideAnimationContent > p", {
    duration: 1,
    y: 0,
    opacity: 1,
    visibility: "visible",
    stagger: 0.3,
    ease: "power2.out",
    startAt: { y: 50, opacity: 0 }
});
gsap.to(".rightSideAnimationContent > div", {
    duration: 1,
    y: 0,
    opacity: 1,
    visibility: "visible",
    stagger: 0.3,
    ease: "power2.out",
    startAt: { y: 50, opacity: 0 }
});
gsap.to(".bottomSideAnimationContent > div", {
    duration: 1,
    y: 0,
    opacity: 1,
    visibility: "visible",
    stagger: 0.3,
    ease: "power2.out",
    startAt: { y: 50, opacity: 0 }
});
gsap.to(".leftSideChartContent > h1", {
    duration: 1,
    y: 0,
    opacity: 1,
    visibility: "visible",
    stagger: 0.3,
    ease: "power2.out",
    startAt: { y: 50, opacity: 0 }
});
gsap.to(".leftSideChartContent > p", {
    duration: 1,
    y: 0,
    opacity: 1,
    visibility: "visible",
    stagger: 0.3,
    ease: "power2.out",
    startAt: { y: 50, opacity: 0 }
});
gsap.to(".rightSideChartContent > h1", {
    duration: 1,
    y: 0,
    opacity: 1,
    visibility: "visible",
    stagger: 0.3,
    ease: "power2.out",
    startAt: { y: 50, opacity: 0 }
});
gsap.to(".rightSideChartContent > p", {
    duration: 1,
    y: 0,
    opacity: 1,
    visibility: "visible",
    stagger: 0.3,
    ease: "power2.out",
    startAt: { y: 50, opacity: 0 }
});
gsap.to(".bottomSideChartContent > h1", {
    duration: 1,
    y: 0,
    opacity: 1,
    visibility: "visible",
    stagger: 0.3,
    ease: "power2.out",
    startAt: { y: 50, opacity: 0 }
});
gsap.to(".bottomSideChartContent > p", {
    duration: 1,
    y: 0,
    opacity: 1,
    visibility: "visible",
    stagger: 0.3,
    ease: "power2.out",
    startAt: { y: 50, opacity: 0 }
});
}, 100);
});