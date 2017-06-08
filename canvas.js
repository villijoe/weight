function graph(obj, array) {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {

        var $ = canvas.getContext('2d');
        var maxArray = Math.max.apply(Math, array); // count max value bd
        var minArray = Math.min.apply(Math, array); // count min value bd
        var maxCount = maxArray + 0.5;
        var minCount = minArray - 0.5;
        var x0 = y0 = 50;
        var width = canvas.width - 50;
        var height = canvas.height - 100;
        var stepY = Math.round(height / (maxCount - minCount));
        var stepX = Math.round(width / obj.length);
        $.beginPath();
        $.strokeStyle = "#ABB5F9"; // light blue color
        $.moveTo(x0, y0);
        $.lineTo(x0, height + y0);
        $.lineTo(width + x0, height + y0);
        $.stroke();
        $.beginPath();
        $.strokeStyle = "#ABB5F9";
        $.fillStyle = "#000000";
        var m = 0;
        for (var i = x0; m < obj.length; i += stepX) {
            $.moveTo(i, height + y0);
            $.lineTo(i, height + y0 + 15);
            $.fillText(obj[m], i + 3, height + y0 + 15);
            m++;
        }
        $.stroke();
        var i = 0;
        var x, y, k, j, color, weight;
        for (var count in array) {
            weight = array[count];
            x = x0 + ((count) * stepX);
            y = y0 + Math.round(height - (weight - minCount) * stepY);
            $.beginPath();
            if (0 == count) {
                $.moveTo(x, y);
                k = x;
                j = y;
                //console.log(x + 'xy' + y);
                //console.log(k + " kj " + j);
            } else {
                if (j > y || j == y) {
                    color = "#F03D3D"; // red color
                } else {
                    color = "#00FF00"; // green color
                }
                //console.log(x + " xy " + y);
                //console.log(k + " kj " + j);
                $.strokeStyle = color;
                $.fillStyle = color;
                $.lineWidth = 3;
                $.moveTo(k, j);
                $.lineTo(x, y);
                k = x;
                j = y;
            }
            $.fillText(weight, x0 - 15, y);
            $.arc(x,y,2,0,360);
            //$.fillRect(x,y,5,5);
            $.stroke();
        }
    }
}