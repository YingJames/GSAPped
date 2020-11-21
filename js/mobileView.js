let height = window.innerHeight;
document.documentElement.style.setProperty("--mobile-height", height + "px");
console.log(document.documentElement.style.getPropertyValue("--mobile-height"));