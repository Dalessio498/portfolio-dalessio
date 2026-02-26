const lenis = new Lenis({
  duration: 1.2,      // Tempo do scroll (segundos)
  lerp: 0.1,          // Suavização (quanto menor, mais suave)
  wheelMultiplier: 1, // Sensibilidade do mouse
  smoothWheel: true,
  touchMultiplier: 2  // Deixa o toque no mobile mais natural
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
 
 gsap.registerPlugin(ScrollTrigger)


 const tl1 = gsap.timeline()

 tl1.fromTo(".neo-card-initial", {
    y: -200,
    opacity: 0
 }, 
 {
    y:0,
    opacity: 1,
    duration: 1
 }).fromTo(".vo-img-dev", {
    x: -200,
    opacity: 0
 }, {
    x: 0,
    opacity: 1,
    duration: 1
 })

//  ----------------------

gsap.fromTo(".son-cards-about", {
    y: -200,
    opacity: 0
}, {
    scrollTrigger: {
        trigger: ".son-cards-about",
        scrub: true,
        end: "bottom 500",
        
    },
    y: 0,
    opacity: 1,
    
})

const tl2 = gsap.timeline()

tl2.fromTo("#card1",{
    x: -400,
    opacity: 0
}, {
    scrollTrigger: {
        trigger: "#card1",
        scrub: true,
        
        end: "bottom 700"
       
    },
    x: 0,
    opacity: 1
}), 
    tl2.fromTo("#card2",{
        x: 400,
        opacity: 0
    }, {
        scrollTrigger: {
            trigger: "#card2",
            scrub: true,
            
            end: "bottom 700"
        
        },
        x: 0,
        opacity: 1
    }),
        tl2.fromTo("#card3",{
            x: -400,
            opacity: 0
        }, {
            scrollTrigger: {
                trigger: "#card3",
                scrub: true,
                
                end: "bottom 900"
            
            },
            x: 0,
            opacity: 1
        })


const tl3 = gsap.timeline()

tl3.fromTo("#card10",{
    x: -400,
    opacity: 0
}, {
    scrollTrigger: {
        trigger: "#card10",
        scrub: true,
        
        end: "bottom 700"
       
    },
    x: 0,
    opacity: 1
}), 
    tl3.fromTo("#card20",{
        x: 400,
        opacity: 0
    }, {
        scrollTrigger: {
            trigger: "#card20",
            scrub: true,
            
            end: "bottom 700"
        
        },
        x: 0,
        opacity: 1
    }),
        tl3.fromTo("#card30",{
            x: -400,
            opacity: 0
        }, {
            scrollTrigger: {
                trigger: "#card30",
                scrub: true,
                
                end: "bottom 900"
            
            },
            x: 0,
            opacity: 1
        })
