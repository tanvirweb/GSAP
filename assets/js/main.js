// Timeline for animations in section 1
const tl = gsap.timeline();
tl.from(".section-1 :is(h1, p)", {
    duration: 1,
    opacity: 0,
    y: 200,
    stagger: 1
})
.from(".section-1 h1 span span", {
    duration: 1,
    x: "-100%"
})
.from(".down-arrow", {
    duration: 1,
    opacity: 0
})
.from(".down-arrow", {
    duration: 1,
    repeat: -1,
    y: 10,
    yoyo: true
});

gsap.to(".section-1 h1 span span", {
    left: 0,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".section-1 h1",
      scroller: "body",
      start: "top 42%",
      end: "top 30%",
      scrub: 1
    }
})

// Timeline for animations triggered by scrolling to section 2
const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-2",
        scroller: "body",
        start: "top 50%"
    }
});
tl2.from(".section-2 p", {
    duration: 1,
    opacity: 0,
    stagger: 1
})

gsap.from(".balance svg", {
    rotation: -25,
    transformOrigin: "center center",
    scrollTrigger: {
        trigger: ".section-2",
        scroller: "body",
        start: "top 25%",
        end: "top 0%",
        scrub: 2
    }
})

gsap.from(".balance svg rect", {
    width: 0,
    transformOrigin: "center center",
    scrollTrigger: {
        trigger: ".section-2",
        scroller: "body",
        start: "top 25%",
        end: "top 0%",
        scrub: 2
    }
})

gsap.from(".balance svg circle", {
    scale: 0,
    transformOrigin: "center center",
    scrollTrigger: {
        trigger: ".section-2",
        scroller: "body",
        start: "top 25%",
        end: "top 0%",
        scrub: 2
    }
})

gsap.from(".balance svg path", {
    opacity: 0,
    transformOrigin: "center center",
    scrollTrigger: {
        trigger: ".section-2",
        scroller: "body",
        start: "top 25%",
        end: "top 0%",
        scrub: 2
    }
})

// Timeline for animations triggered by scrolling to section 3
const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-3",
        scroller: "body",
        start: "top 50%"
    }
});
tl3.from(".section-3 .top p", {
    duration: 1,
    stagger: 1,
    opacity: 0
})

gsap.from(".section-3 .line", {
    height: 0,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".section-3",
        pin: ".section-3",
        scroller: "body",
        start: "top 0%",
        end: "top -80%",
        scrub: 3
    }
})

// Timeline for animations triggered by scrolling to section 4
const tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-4",
        scroller: "body",
        start: "top 50%"
    }
});
tl4.from(".section-4 h2", {
    duration: 1,
    opacity: 0
})

gsap.from(".section-4 .arrow path", {
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: ".section-4",
        scroller: "body",
        start: "top 15%",
        end: "top 5%",
        scrub: 3
    }
})

// Timeline for animations triggered by scrolling to section 5
gsap.from(".section-5 .circle", {
    scale: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".section-5",
        scroller: "body",
        start: "top 45%",
        end: "top 40%",
        scrub: 3
    }
})

gsap.from(".section-5 .circle span", {
    top: "100%",
    duration: 1,
    scrollTrigger: {
        trigger: ".section-5",
        pin: ".section-5",
        scroller: "body",
        start: "top 0",
        end: "top -30%",
        scrub: 3,
        markers: true
    }
})