function homePageAnimation() {
  gsap.set(".rows", { scale: 5 });

  // timeline 2 chije ek hi sath animate karne ke liye
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
  });

  tl.to(
    ".vdodiv",
    {
      "--clip": "0%",
      ease: Power2,
    },
    "ekSathKaro"
  )
    .to(
      ".rows",
      {
        scale: 1,
        ease: Power2,
      },
      "ekSathKaro"
    )
    .to(
      ".lft",
      {
        xPercent: -8,
        ease: Power4,
      },
      "unkeSathNai"
    )
    .to(
      ".rgt",
      {
        xPercent: 8,
        ease: Power4,
      },
      "unkeSathNai"
    );
}

function realAnimation() {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
    xPercent: -200,
    ease: Power4,
  });
}

function teamAnimation() {
  document.querySelectorAll(".listEle").forEach(function (ele) {
    ele.addEventListener("mousemove", function (dets) {
      gsap.to(ele.querySelector(".picture"), {
        opacity: 1,
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
        ease: Power4,
        duration: 0.5,
      });
    });

    ele.addEventListener("mouseleave", function (dets) {
      gsap.to(ele.querySelector(".picture"), {
        opacity: 0,
        ease: Power4,
        duration: 0.5,
      });
    });
  });
}

function paraAnimation() {
  clutter = "";
  document
    .querySelector(".paraText")
    .textContent.split("")
    .forEach((e) => {
      clutter += `<span>${e}</span>`;
    });
  document.querySelector(".paraText").innerHTML = clutter;

  gsap.set(".paraText span", { opacity: 0.1 });
  gsap.set(".paraText span", {
    scrollTrigger: {
      trigger: ".para",
      start: "top 50%",
      end: "bottom bottom",
      scrub: 1,
    },
    opacity: 1,
    stagger: 0.03,
    ease: Power4,
  });
}

function locomotive() {
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}

function capsulesAnimation() {
  gsap.to(".capsule:nth-child(2)", {
    scrollTrigger: {
      trigger: ".capsules",
      start: "top bottom",
      bottom: "bottom bottom",
      scrub: 1,
    },
    y: -40,
    ease: Power4,
  });
}

function bgColorAnimation() {
  document.querySelectorAll(".section").forEach((e) => {
    ScrollTrigger.create({
      trigger: e,
      start: "top 50%",
      end: "bottom 50%",
      onEnter: function () {
        document.body.setAttribute("theme", e.dataset.color);
      },
      onEnterBack: function () {
        document.body.setAttribute("theme", e.dataset.color);
      },
    });
  });
}

locomotive();
homePageAnimation();
realAnimation();
teamAnimation();
paraAnimation();
capsulesAnimation();
bgColorAnimation();
