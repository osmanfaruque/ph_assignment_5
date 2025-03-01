// Array of eye-soothing colors
const colors = [
    '#8FB8E6', // Even darker blue
    '#9BC1AD', // Even darker mint
    '#E6BC8F', // Even darker peach
    '#BFBFBF', // Even darker gray
    '#8FB890', // Even darker mint green
    '#C9A3CD', // Even darker lavender
    '#E6B589', // Even darker orange
    '#8FCCD4', // Even darker cyan
    '#CCD48F', // Even darker lime
    '#E091A7'  // Even darker pink
];

let currentColorIndex = 0;
document.getElementById("theme-btn").addEventListener("click", function(event) {
    document.getElementById("body").style.backgroundColor = colors[currentColorIndex];
    document.getElementById("main").style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % colors.length;
});