// JavaScript to toggle dark/light theme on button click
document.getElementById("theme-toggle").onclick = function() {
    document.getElementsByTagName("body")[0].classList.toggle("dark");
};
