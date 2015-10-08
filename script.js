var gridSize = 16;
var containerSize = 700;

function setGridSize(size) {
    $('div#grid table').empty();
    gridSize = size;
    cellElement = '<div class="cell"></div>';
    for (i = 0; i < gridSize; i++) {
        $('#grid table').append('<tr id="' + i.toString() + '"></tr>');
        for (j = 0; j < gridSize; j++) {
            $('#grid table tr#' + i.toString()).append('<td class="cell"></td>');
        }
    }
    $(".cell").css("width", (containerSize / gridSize).toString() + "px");
    $(".cell").css("height", (containerSize / gridSize).toString() + "px");
    $('.cell').hover( function() {
       $(this).css("background-color", "#000000");
    });
}

$(document).ready(function () {
    setGridSize(16);
    
    $('input#reset').click(function() {
     	var newSize = parseInt(prompt("Set new size for the grid.", "16"));
        setGridSize(newSize);
    });
});
