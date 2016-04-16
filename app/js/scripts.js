
function generateGrid() {
    var col = "<div class='grid-overlay-col'></div>";
    var gutter = "<div class='grid-overlay-gutter'></div>";
    var overlayGrid = col;
    for (i=1; i<12; i++){
        overlayGrid = overlayGrid + gutter + col;
    };
    $('.grid-overlay').append("<div class='grid-overlay-container'>" + overlayGrid + "</div>");
}

function toggleGrid() {
    $('.grid-overlay').toggle();
}


function expandSection(e) {
    $(e).next('.content-expanded').slideToggle();
    $(e).children('.chevron-lrg').toggleClass('chevron-up');
    console.log(e);
}