!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=document.querySelector("body");t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,timerId=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));a.style.backgroundColor=t,console.log("dawda")}),1e3)})),e.addEventListener("click",(function(){t.disabled=!1,e.disabled=!0,clearInterval(timerId)}))}();
//# sourceMappingURL=01-color-switcher.8432fcb1.js.map
