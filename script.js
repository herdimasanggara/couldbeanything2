// script.js
document.getElementById('toggleButton').addEventListener('click', function() {
    var leftPanel = document.getElementById('leftPanel');
    var rightPanel = document.getElementById('rightPanel');
    // Toggle panels
    if (leftPanel.style.transform === "translateX(0%)") {
        leftPanel.style.transform = "translateX(-100%)";
        rightPanel.style.transform = "translateX(100%)";
    } else {
        leftPanel.style.transform = "translateX(0%)";
        rightPanel.style.transform = "translateX(0%)";
    }
});

// Sync scrolling
var leftPanelContent = document.getElementById('leftPanel');
var rightPanelContent = document.getElementById('rightPanel');

leftPanelContent.addEventListener('scroll', function() {
    rightPanelContent.scrollTop = this.scrollTop;
});

rightPanelContent.addEventListener('scroll', function() {
    leftPanelContent.scrollTop = this.scrollTop;
});
