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
})

let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".section-2",
        scroller: "body",
        start: "top 50%"
    }
})

tl2.from(".section-2 p:nth-child(1)", {
    duration: 1,
    y: 200,
    opacity: 0
})
.from(".section-2-shape div:nth-child(2)", {
    scale: 0,
    duration: 1.5
})
.from(".section-2-shape div:nth-child(1)", {
    left: "20%",
    top: "45%",
    aspectRatio: 0,
    rotate: -45,
    duration: 1
})
.from(".section-2 p:nth-child(2)", {
    duration: 1,
    y: 200,
    opacity: 0
})

let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".section-3",
        scroller: "body",
        start: "top 50%",
        markers: true
    }
})

tl3.from(".section-3 .top p", {
    y: 50,
    duration: 1,
    stagger: 0.5,
    opacity: 0
})

tl3.to(".section-3 .part-1 .line", {
    height: "30px",
    duration: 1
})
tl3.from(".section-3 .part-1 p", {
    opacity: 0,
    duration: 0.5,
    y: 10
})
tl3.to(".section-3 .part-2 .line", {
    height: "90px",
    duration: 1
})
tl3.from(".section-3 .part-2 p", {
    opacity: 0,
    duration: 0.5,
    y: 10
})
tl3.to(".section-3 .part-3 .line", {
    height: "420px",
    duration: 1
})
tl3.from(".section-3 .part-3 p", {
    opacity: 0,
    duration: 0.5,
    y: 10
})