document.addEventListener('DOMContentLoaded', function() {
setTimeout(function() {
gsap.to(".chartAnimtionIcons > div", {
    duration: 1,
    y: 0,
    opacity: 1,
    visibility: "visible",
    stagger: 0.3,
    ease: "power2.out",
    startAt: { y: 50, opacity: 0 }
});
gsap.to(".firstContent > h1", {
    duration: 1,
    y: 0,
    opacity: 1,
    visibility: "visible",
    stagger: 0.3,
    ease: "power2.out",
    startAt: { y: 50, opacity: 0 }
});
gsap.to(".firstContent > p", {
    duration: 1,
    y: 0,
    opacity: 1,
    visibility: "visible",
    stagger: 0.3,
    ease: "power2.out",
    startAt: { y: 50, opacity: 0 }
});
gsap.to(".secondContent > h1", {
    duration: 1,
    y: 0,
    opacity: 1,
    visibility: "visible",
    stagger: 0.3,
    ease: "power2.out",
    startAt: { y: 50, opacity: 0 }
});
gsap.to(".secondContent > p", {
    duration: 1,
    y: 0,
    opacity: 1,
    visibility: "visible",
    stagger: 0.3,
    ease: "power2.out",
    startAt: { y: 50, opacity: 0 }
});
gsap.to(".thirdContent > h1", {
    duration: 1,
    y: 0,
    opacity: 1,
    visibility: "visible",
    stagger: 0.3,
    ease: "power2.out",
    startAt: { y: 50, opacity: 0 }
});
gsap.to(".thirdContent > p", {
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