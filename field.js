
var field = $("#weight");
var k;
field.keypress(function(e){
    setTimeout("handler()", 50);
});

function handler(){
    var string = field.val();
    var length = string.length;
    if (length == 3) {
        field.val(field.val() + '.');
    }
}

if( document.getElementById("weight") ) {
    document.getElementById("weight").onkeydown = pressed;
}

function pressed(e)
{
    key = e.keyCode || e.which;
    if (key == 8) {
        var string = field.val();
        var length = string.length;
        if (length == 4) {
            var substr = field.val().slice(0,-1);
            field.val(substr);
        }
    }
}