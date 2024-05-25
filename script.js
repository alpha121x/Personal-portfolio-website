function init() {
    gsap.registerPlugin(ScrollTrigger);



const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

init();

var cursor = document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove", function(dets) {
    cursor.style.left = dets.x +20+"px"
    cursor.style.top = dets.y+ 20+"px"
})


 var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        start:"top 27%",
        end:"top 0",
        scrub:3
    }
})

tl.to(".page1 h1",{
    x:-100,
},"anim")
tl.to(".page1 h2", {
    x:100
},"anim")
tl.to(".page1 video", {
    width:"90%",
},"anim")

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        start:"top -115%",
        end:"top -120%",
        scrub:3
    }
})    
.to(".main",{
    backgroundColor:"#fff"
})

var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        start:"top -260%",
        end:"top -300%",
        scrub:3
    }
})    
.to(".main",{
    backgroundColor:"#0F0D0D",
    color:"#fff"
})

var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem) {
    elem.addEventListener("mouseenter",function() {
        var att = elem.getAttribute("data-image")
        cursor.style.width = "300px",
        cursor.style.height = "250px",
        cursor.style.borderRadius = "0",
        cursor.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function() {
        elem.style.backgroundColor= "transparent"
        var att = elem.getAttribute("data-image")
        cursor.style.width = "15px",
        cursor.style.height = "15px",
        cursor.style.borderRadius = "50%",
        cursor.style.backgroundImage = `none`
    })
})

 var about = document.querySelectorAll("#about")
 var purple = document.querySelector("#purple")
 about.forEach(function(elem) {
        elem.addEventListener("mouseenter", function() {
            purple.style.display = "block"
            purple.style.opacity = "1"
        })
        elem.addEventListener("mouseleave", function() {
            purple.style.display = "none"
            purple.style.opacity = "0"
        })
 })

 var gallery = document.querySelectorAll("#gallery")
 var purple1 = document.querySelector("#purple1")
 gallery.forEach(function(elem) {
        elem.addEventListener("mouseenter", function() {
            purple1.style.display = "block"
            purple1.style.opacity = "1"
        })
        elem.addEventListener("mouseleave", function() {
            purple1.style.display = "none"
            purple1.style.opacity = "0"
        })
 })

 var education = document.querySelectorAll("#education")
 var purple2 = document.querySelector("#purple2")
 education.forEach(function(elem) {
        elem.addEventListener("mouseenter", function() {
            purple2.style.display = "block"
            purple2.style.opacity = "1"
        })
        elem.addEventListener("mouseleave", function() {
            purple2.style.display = "none"
            purple2.style.opacity = "0"
        })
 })

 var contact = document.querySelectorAll("#contact")
 var purple3 = document.querySelector("#purple3")
 contact.forEach(function(elem) {
        elem.addEventListener("mouseenter", function() {
            purple3.style.display = "block"
            purple3.style.opacity = "1"
        })
        elem.addEventListener("mouseleave", function() {
            purple3.style.display = "none"
            purple3.style.opacity = "0"
        })
 })

 

 gsap.from(".box1 img",{
    scale:1.2,
    duration:2,
    delay:1,
    repeat:-1,
    yoyo:true
  })