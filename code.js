$(document).ready(function () {
    var x = 0;
    var y = 0;
    var xList = new Array();
    var yList = new Array();
    var pList = new Array();
    var counter = 2;

    function getId(id) {
        var value = document.getElementById(id).value;
        return value;
    }

    /* disables non-numbers, but disables "-" $('.data').keypress(function (e) {
        var a = [];
        var k = e.which;

        for (i = 48; i < 58; i++)
        a.push(i);

        if (!(a.indexOf(k) >= 0)) e.preventDefault();
    });
    */

    $('input').blur(function () {
        if (!$(this).val()) {
            $(this).css('border', 'red solid 3px');
        } else {
            $(this).css('border', '#cccccc solid 3px');
        }
    });

    $('.add').click(function () {
        var txt = $("<div class='specify' style='opacity: 0;' id='" + counter + "' class='section'><span id='myx'>X" + counter + ":</span><input maxlength='2' type='text'  id='x" + counter + "' /><span id='myy'>Y" + counter + ":<span><input class='specify' type='text'  maxlength='2' id='y" + counter + "' /><br/></div>")
        txt.appendTo('.data');
        $(".data").slideDown("slow");
        txt.animate({
            opacity: 1
        }, 200, function () {});
        counter++;
    });

    $(".del").click(function () {
        $(".data").slideUp("normal", function () {
            $('.data').empty();
            counter = 1;
        });
    });
    $('.submit').click(function (event) {
        for (i = 1; i < counter; i++) {
            xList.push(getId('x' + i));
            yList.push(getId('y' + i));
            pList.push('(' + xList[i - 1] + ', ' + yList[i - 1] + ')');
        }
        document.getElementById('output').innerHTML = '<center><div class="results"><u><b>Your Points:</b></u><br/><br/><span id="span1">' + (pList) +
            '</span><br/><br/><span><u><b>Midpoint:</b></u></span><br/><br/><span id="midpoint"></span></div></center>';
        $('[type="text"]').val('');

        for (i = 0; i < xList.length; i++) {
            x += parseFloat(xList[i]);
        }
        for (i = 0; i < yList.length; i++) {
            y += parseFloat(yList[i]);
        }

        x /= xList.length;
        y /= yList.length;
        
        display();
        
        xList = [];
        yList.length = 0;
        pList.splice(0, pList.length);
        x = 0;
        y = 0;
    });

    function write(string) {
        document.getElementById('midpoint').innerHTML = string;
    }
    
    function display() {
        write('(' + x + ' , ' + y + ')');
    }
    
    

});
