function page1Animation(){
    var tl = gsap.timeline()
tl.from("#nav h1,i,#nav h4,#btn1",{
    y:-30,
    opacity:0,
    duration:0.4,
    delay:0.5,
    stagger:0.15
})
tl.from("#hero #left h1",{
    x:-200,
    duration:0.5,
    opacity:0
},"-=0.5")
tl.from("#hero #left p",{
    x:-100,
    duration:0.4,
    opacity:0
})
tl.from("#hero #left button",{
   opacity:0,
   duration:0.4
})
tl.from("#hero #right img",{
   opacity:0,
   duration:0.4,
   x:200
},"-=0.7")
tl.from("#herobottom img",{
    y:30,
    opacity:0,
    stagger:0.15,
    duration:0.6
})
}
function page2Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:"#page2",
            scroller:"body",
            start:"top 50%",
            scrub:2,
            end:"top 0",
        }
    })
    tl2.from("#services",{
        y:30,
        opacity:0,
        duration:0.5
    })
    tl2.from(".elem.line1.left",{
        x:-300,
        opacity:0,
        duration:1
    },"anim1")
    tl2.from(".elem.line1.right",{
        x:300,
        opacity:0,
        duration:1
    },"anim1")
    tl2.from(".elem.line2.left",{
        x:-300,
        opacity:0,
        duration:1
    },"anim2")
    tl2.from(".elem.line2.right",{
        x:300,
        opacity:0,
        duration:1
    },"anim2")
}
page1Animation()
page2Animation()
function loco(){
    gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(""),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
loco();