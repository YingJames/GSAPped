let height = window.innerHeight;
document.documentElement.style.setProperty("--height", height + "px");
console.log(document.documentElement.style.getPropertyValue("--height"));