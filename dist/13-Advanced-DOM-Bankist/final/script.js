"use strict";const modal=document.querySelector(".modal"),overlay=document.querySelector(".overlay"),btnCloseModal=document.querySelector(".btn--close-modal"),btnsOpenModal=document.querySelectorAll(".btn--show-modal"),btnScrollTo=document.querySelector(".btn--scroll-to"),section1=document.querySelector("#section--1"),nav=document.querySelector(".nav"),tabs=document.querySelectorAll(".operations__tab"),tabsContainer=document.querySelector(".operations__tab-container"),tabsContent=document.querySelectorAll(".operations__content"),openModal=function(e){e.preventDefault(),modal.classList.remove("hidden"),overlay.classList.remove("hidden")},closeModal=function(){modal.classList.add("hidden"),overlay.classList.add("hidden")},handleHover=(btnsOpenModal.forEach(e=>e.addEventListener("click",openModal)),btnCloseModal.addEventListener("click",closeModal),overlay.addEventListener("click",closeModal),document.addEventListener("keydown",function(e){"Escape"!==e.key||modal.classList.contains("hidden")||closeModal()}),btnScrollTo.addEventListener("click",function(e){var t=section1.getBoundingClientRect();console.log(t),console.log(e.target.getBoundingClientRect()),console.log("Current scroll (X/Y)",window.pageXOffset,window.pageYOffset),console.log("height/width viewport",document.documentElement.clientHeight,document.documentElement.clientWidth),section1.scrollIntoView({behavior:"smooth"})}),document.querySelector(".nav__links").addEventListener("click",function(e){e.preventDefault(),e.target.classList.contains("nav__link")&&(e=e.target.getAttribute("href"),document.querySelector(e).scrollIntoView({behavior:"smooth"}))}),tabsContainer.addEventListener("click",function(e){e=e.target.closest(".operations__tab");e&&(tabs.forEach(e=>e.classList.remove("operations__tab--active")),tabsContent.forEach(e=>e.classList.remove("operations__content--active")),e.classList.add("operations__tab--active"),document.querySelector(".operations__content--"+e.dataset.tab).classList.add("operations__content--active"))}),function(e){if(e.target.classList.contains("nav__link")){const o=e.target;var e=o.closest(".nav").querySelectorAll(".nav__link"),t=o.closest(".nav").querySelector("img");e.forEach(e=>{e!==o&&(e.style.opacity=this)}),t.style.opacity=this}}),header=(nav.addEventListener("mouseover",handleHover.bind(.5)),nav.addEventListener("mouseout",handleHover.bind(1)),document.querySelector(".header")),navHeight=nav.getBoundingClientRect().height,stickyNav=function(e){var[e]=e;e.isIntersecting?nav.classList.remove("sticky"):nav.classList.add("sticky")},headerObserver=new IntersectionObserver(stickyNav,{root:null,threshold:0,rootMargin:`-${navHeight}px`}),allSections=(headerObserver.observe(header),document.querySelectorAll(".section")),revealSection=function(e,t){var[e]=e;e.isIntersecting&&(e.target.classList.remove("section--hidden"),t.unobserve(e.target))},sectionObserver=new IntersectionObserver(revealSection,{root:null,threshold:.15}),imgTargets=(allSections.forEach(function(e){sectionObserver.observe(e),e.classList.add("section--hidden")}),document.querySelectorAll("img[data-src]")),loadImg=function(e,t){const[o]=e;o.isIntersecting&&(o.target.src=o.target.dataset.src,o.target.addEventListener("load",function(){o.target.classList.remove("lazy-img")}),t.unobserve(o.target))},imgObserver=new IntersectionObserver(loadImg,{root:null,threshold:0,rootMargin:"200px"}),slider=(imgTargets.forEach(e=>imgObserver.observe(e)),function(){const e=document.querySelectorAll(".slide");var t=document.querySelector(".slider__btn--left"),o=document.querySelector(".slider__btn--right");const n=document.querySelector(".dots");let s=0;function r(e){document.querySelectorAll(".dots__dot").forEach(e=>e.classList.remove("dots__dot--active")),document.querySelector(`.dots__dot[data-slide="${e}"]`).classList.add("dots__dot--active")}function c(o){e.forEach((e,t)=>e.style.transform=`translateX(${100*(t-o)}%)`)}function a(){s===l-1?s=0:s++,c(s),r(s)}function i(){0===s?s=l-1:s--,c(s),r(s)}const l=e.length;c(0),e.forEach(function(e,t){n.insertAdjacentHTML("beforeend",`<button class="dots__dot" data-slide="${t}"></button>`)}),r(0),o.addEventListener("click",a),t.addEventListener("click",i),document.addEventListener("keydown",function(e){"ArrowLeft"===e.key&&i(),"ArrowRight"===e.key&&a()}),n.addEventListener("click",function(e){e.target.classList.contains("dots__dot")&&(e=e.target.dataset["slide"],c(e),r(e))})});slider();