//Variables for height, width, & color
var height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
    //from jQuery API Docs - .submit()
    event.preventDefault();
    // Select size input
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);
    //test to see if I am grabbing the Height & Width Properly
    //console.log('Height: ' + height + " Width: " + width);
});

function makeGrid(height, width) {
    //clear grid to make room!
    $('tr').remove();

    //using the height and width Params along with id: pixelCanvas &
    //-> table.. I am able to draw a grid whatever size
    for (var i = 1; i <= height; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (var j = 1; j <= width; j++) {
            $('#table' + i).append('<td></td>');
        }
    }

    //modify the color of the grid cells ".click"
    $('td').click(function addColor() {
        color = $('#colorPicker').val();
        //looking to see if the cell has style attribute with "this"
        if ($(this).attr('style')) {
            //removes style if there was style in the cell prior to change
            //requires 2 clicks to fully change color - remove THEN add
            $(this).removeAttr('style')
        } else {
            //adds new style on click
            $(this).attr('style', 'background-color:' + color);
        }
    })
}
